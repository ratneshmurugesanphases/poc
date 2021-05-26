import { useEffect, useRef, useState } from "react";
import { Calendar as CalendarDHX } from "dhx-suite";
// import useScheduleController from "../../hooks/useScheduleController";
// import NewBookingForm from "molecules/NewBookingForm";
// import EditBookingForm from "molecules/EditBookingForm";

import "./Scheduler.scss";
const scheduler = window.scheduler;

function Calendar() {
  const datePickerStartRef = useRef(null);
  const datePickerEndRef = useRef(null);
  const [dateHovered, setDateHovered] = useState({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    datePickerStartRef.current = new CalendarDHX(datePickerStartRef.current, {
      css: "dhx_widget--bordered",
      value: new Date(),
    });
    datePickerEndRef.current = new CalendarDHX(datePickerEndRef.current, {
      css: "dhx_widget--bordered",
      value: new Date(),
    });
    datePickerStartRef.current.events.on("change", (date, id) => {
      setDateHovered((state) => ({ ...state, startDate: date.toString() }));
    });
    datePickerEndRef.current.events.on("change", (date, id) => {
      setDateHovered((state) => ({ ...state, endDate: date.toString() }));
    });

    datePickerStartRef.current.link(datePickerEndRef.current);
    return () => {
      datePickerStartRef.current && datePickerStartRef.current.destructor();
      datePickerEndRef.current && datePickerEndRef.current.destructor();
    };
  }, []);

  return (
    <>
      <div ref={datePickerStartRef}></div>
      <div ref={datePickerEndRef}></div>
      <p>startDate: {dateHovered && dateHovered.startDate}</p>
      <p>endDate: {dateHovered && dateHovered.endDate}</p>
    </>
  );
}

const Scheduler = () => {
  // const [schedulerContainerRef] = useScheduleController();

  useEffect(() => {
    scheduler.locale.labels.timeline_tab = "Timeline";
    scheduler.locale.labels.section_custom = "Section";
    scheduler.locale.labels.timeline_scale_header = "Sections";
    scheduler.config.details_on_create = true;
    scheduler.config.details_on_dblclick = true;

    // ===============
    // Configuration
    // ===============
    var sections = [];

    for (var i = 1; i < 5; i++) {
      sections.push({ key: i, label: "section " + i });
    }
    var days = 7;
    scheduler.createTimelineView({
      name: "timeline",
      x_unit: "hour",
      x_date: "%H:%i",
      x_step: 1,
      x_size: 24 * days,
      scrollable: true,
      scroll_position: new Date(),
      column_width: 70,
      x_length: 24 * days,
      y_unit: sections,
      y_property: "section_id",
      render: "bar",
      second_scale: {
        x_unit: "day", // unit which should be used for second scale
        x_date: "%F %d", // date format which should be used for second scale, "July 01"
      },
    });

    // ===============
    // Data loading
    // ===============
    scheduler.config.lightbox.sections = [
      {
        name: "description",
        height: 50,
        map_to: "text",
        type: "textarea",
        focus: true,
      },
      {
        name: "custom",
        height: 30,
        type: "select",
        options: sections,
        map_to: "section_id",
      },
      { name: "time", height: 72, type: "time", map_to: "auto" },
    ];

    var start = new Date(2021, 5, 30);
    scheduler.init("scheduler_here", start, "timeline");
    scheduler.parse(
      generateEvents(
        start,
        scheduler.date.add(start, days, "day"),
        sections.length,
        sections
      )
    );
    scheduler.updateView(new Date(2012,5,3), "timeline");

    function randomDate(date1, date2) {
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      var date1 = date1;
      var date2 = date2;
      date1 = new Date(date1).getTime();
      date2 = new Date(date2).getTime();
      if (date1 > date2) {
        return new Date(getRandomArbitrary(date2, date1));
      } else {
        return new Date(getRandomArbitrary(date1, date2));
      }
    }

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function generateEvents(from, to, count, sections) {
      var evs = [];
      for (var i = 0; i < count; i++) {
        var ev = {
          section_id:
            sections[randomIntFromInterval(0, sections.length - 1)].key,
          text: "event " + i,
          start_date: randomDate(from, to),
          id: scheduler.uid(),
        };
        ev.end_date = scheduler.date.add(
          ev.start_date,
          randomIntFromInterval(1, 24),
          "hour"
        );
        evs.push(ev);
      }
      return evs;
    }
    return () => {
      // cleanup
    };
  }, []);

  console.log("Scheduler");
  return (
    <>
      <Calendar />

      <div
        id="scheduler_here"
        class="dhx_cal_container"
        style={{ width: "100%", height: "100%" }}
      >
        <div class="dhx_cal_navline">
          <div class="dhx_cal_prev_button">&nbsp;</div>
          <div class="dhx_cal_next_button">&nbsp;</div>
          <div class="dhx_cal_today_button"></div>
          <div class="dhx_cal_date"></div>
          <div
            class="dhx_cal_tab"
            name="day_tab"
            style={{ right: "204px" }}
          ></div>
          <div
            class="dhx_cal_tab"
            name="week_tab"
            style={{ right: "140px" }}
          ></div>
          <div
            class="dhx_cal_tab"
            name="timeline_tab"
            style={{ right: "280px" }}
          ></div>
          <div
            class="dhx_cal_tab"
            name="month_tab"
            style={{ right: "76px" }}
          ></div>
        </div>
        <div class="dhx_cal_header"></div>
        <div class="dhx_cal_data"></div>
      </div>
      {/* <NewBookingForm />
      <EditBookingForm /> */}
    </>
  );
};

export default Scheduler;
