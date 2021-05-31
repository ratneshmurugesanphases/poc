import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useHistory } from "react-router-dom";
import { useCommonContextDeps } from "contexts/CommonContext";
import { getPodioStatusColors } from "configs/colorConfig";
import scheduler from "../config";

const podioStatusColors = getPodioStatusColors();

const useScheduler = () => {
  const {
    state: commonState,
    dispatch,
    newBookingFormRef,
  } = useCommonContextDeps();
  const schedulerRef = useRef();
  const history = useHistory();
  const handlePrint = useReactToPrint({
    content: () => schedulerRef.current,
  });
  const eventData = [
    {
      start_date: "2021-05-28 00:00",
      end_date: "2021-05-28 12:00",
      text: "Initiative B",
      color: podioStatusColors.uncertain,
      status: "uncertain",
      section_id: 2,
      textColor: "black",
      aktor: "Aktor A",
      id: 1,
    },
    {
      start_date: "2021-05-28 00:00",
      end_date: "2021-05-29 00:00",
      text: "Initiative A",
      section_id: 4,
      color: podioStatusColors.cancelled,
      status: "cancelled",
      textColor: "black",
      aktor: "Aktor B",
      id: 2,
    },
    {
      start_date: "2021-05-28 00:00",
      end_date: "2021-05-28 11:30",
      text: "Initiative C",
      section_id: 1,
      color: podioStatusColors.notdone,
      status: "notdone",
      textColor: "black",
      aktor: "Aktor C",
      id: 3,
    },
    {
      start_date: "2021-05-28 00:00",
      end_date: "2021-05-28 11:30",
      text: "Initiative D",
      section_id: 3,
      status: "clear",
      color: podioStatusColors.clear,
      textColor: "black",
      aktor: "Aktor D",
      id: 4,
    },
    {
      start_date: "2021-05-28 00:00",
      end_date: "2021-05-28 15:30",
      text: "Initiative E",
      section_id: 5,
      status: "followup",
      color: podioStatusColors.followup,
      textColor: "black",
      aktor: "Aktor E",
      id: 5,
    },
    {
      start_date: "2021-05-10 00:00",
      end_date: "2021-05-10 5:30",
      text: "Initiative F",
      section_id: 2,
      status: "followup",
      color: podioStatusColors.followup,
      textColor: "black",
      aktor: "Aktor F",
      id: 6,
    },
  ];

  const [state] = useState({
    currentView: "timeline1",
    // schedulerYUnitData: [sceneA, sceneB, sceneC, sceneD],
    schedulerData: eventData,
  });

  const { schedulerData } = state;
  const { searchTerm } = commonState;

  scheduler.date.timeline1_start = function (date) {
    // console.log("T1", date);
    // return scheduler.date.year_start(date);
    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0);
  };

  scheduler.date.timeline2_start = function (date) {
    // console.log("T2", date);
    // return scheduler.date.month_start(date);
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - date.getDay(),
      0,
      0
    );
  };

  scheduler.date.timeline3_start = function (date) {
    // console.log("T3", date);
    // return scheduler.date.week_start(date);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0);
  };

  scheduler.date.timeline4_start = function (date) {
    console.log("T4", date);
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      0
    );
  };

  const handleSearchChange = (value) => {
    dispatch({ type: "UPDATE_SEARCH", payload: { searchTerm: value } });
  };

  const handleNewFormClick = () => {
    if (newBookingFormRef && newBookingFormRef.current) {
      newBookingFormRef.current.setOpen((open) => !open);
    }
  };

  function handleMiniCalClick() {
    if (scheduler.isCalendarVisible()) {
      scheduler.destroyCalendar();
    } else {
      scheduler.renderCalendar({
        // position: "minicalendar",
        position: this,
        date: scheduler.getState().date,
        navigation: true,
        handler: function (date, calendar) {
          scheduler.setCurrentView(date);
          scheduler.destroyCalendar();
        },
      });
    }
  }

  scheduler.config.header = {
    css: "scheduler_header",
    cols: [
      //   {
      //     html: "calendar",
      //     click: () => history.push("/calendar-view"),
      //     css: "header_calendar_button",
      //   },
      {
        html: "Dashboard",
        click: () => history.push("/dashboard"),
        css: "header_dashboard_button",
      },
      {
        html: "Map",
        click: () => history.push("/map-view"),
        css: "header_map_button",
      },
      "spacer",
      "timeline2",
      "timeline3",
      "timeline4",
      {
        view: "minicalendar",
        click: handleMiniCalClick,
        // css: ""
      },
      "spacer",
      "prev",
      // "spacer",
      "date",
      // "spacer",
      "next",
      "spacer",
      {
        html: "+ Add new",
        click: handleNewFormClick,
        css: "header_addnew_button",
      },
      {
        html: "Print",
        click: handlePrint,
        css: "header_print_button",
      },
      {
        html: "Search",
        // click: handlePrint,
        css: "header_search_button",
      },
    ],
  };

  useEffect(() => {
    const schedulerEventRef = schedulerRef.current;
    let lastPointedDate = new Date();
    let currentView;
    let mouseHoverActionDataDate;

    const handleMouseWheelTurn = (e) => {
      let time = new Date();
      if (time - lastPointedDate < 200) return;
      lastPointedDate = time;

      const mode = scheduler.getState().mode;
      const mouseHoverActionData = scheduler.getActionData(e);
      mouseHoverActionDataDate =
        mouseHoverActionData && mouseHoverActionData.date;
      let num = mode.substr(8, 1);

      if (mouseHoverActionDataDate) {
        if (e.deltaY < 0) num++;
        else num--;

        if (num > 0 && num < 5) {
          currentView = `timeline${num}`;
          scheduler.setCurrentView(mouseHoverActionDataDate, currentView);
        }
      }
    };
    scheduler.init("scheduler_here", new Date(), "timeline1");
    const filteredPostsBySearch = searchTerm
      ? schedulerData.filter(
          (dataObj) => dataObj.status.toLowerCase() === searchTerm.toLowerCase()
        )
      : schedulerData;
    console.log("filteredPostsBySearch", filteredPostsBySearch);
    // scheduler.setCurrentView(mouseHoverActionDataDate, currentView);
    scheduler.clearAll();
    scheduler.parse(filteredPostsBySearch);
    const eventId = scheduler.addEvent({
      start_date: "2021-05-12 00:00",
      end_date: "2021-05-12 12:00",
      text: "Initiative X",
      color: podioStatusColors.uncertain,
      status: "uncertain",
      section_id: 4,
      textColor: "black",
      id: 11,
      aktor: "Aktor X"
    });
    const testEvent = scheduler.getEvent(eventId);
    testEvent.text = "Conference";
    scheduler.updateEvent(testEvent.id);
    console.log("addEvent id", eventId);
    schedulerEventRef.addEventListener("wheel", handleMouseWheelTurn);

  //   scheduler.showLightbox = function(id){
  //     // id - id of event
  //     scheduler.startLightbox(id, document.getElementById("newbookingform"));
  //     scheduler.endLightbox(true, document.getElementById("newbookingform"));
  // }

  
    return () => {
      console.log("unmount");
      schedulerEventRef.removeEventListener("wheel", handleMouseWheelTurn);
    };
  }, [newBookingFormRef, schedulerData, searchTerm]);
  //   const availableEvents = scheduler.getEvents();
  //   console.log("availableEvents", availableEvents);

  //   console.log("getEvent", scheduler.getEvents(2));



  console.log("sche", scheduler);

  return { schedulerRef, handleSearchChange };
};

export default useScheduler;
