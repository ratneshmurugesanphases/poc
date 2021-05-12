import React, { Component } from "react";
import "dhtmlx-scheduler";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";

const scheduler = window.scheduler;

const actualData = [
  {
    id: 1,
    start_date: "2021-05-10 6:00",
    end_date: "2021-05-10 8:00",
    text: "Event 1",
    color: "red",

  },
  {
    id: 2,
    start_date: "2021-05-13 10:00",
    end_date: "2021-05-13 18:00",
    text: "Event B1",
    color: "green",

  },
  {
    id: 3,
    start_date: "2021-05-13 10:00",
    end_date: "2021-05-13 18:00",
    text: "Event B2",
    color: "blue",
  },
];

export default class Scheduler extends Component {
    initSchedulerEvents() {
        if (scheduler._$initialized) {
            return;
        }
 
        const onDataUpdated = this.props.onDataUpdated;
 
        scheduler.attachEvent('onEventAdded', (id, ev) => {
          const formattedDate = new Date(ev).getTime();
            console.log("onEventAdded", formattedDate);
            if (onDataUpdated) {
                onDataUpdated('create', ev, id);
            }
        });
 
        scheduler.attachEvent('onEventChanged', (id, ev) => {
        console.log("onEventChanged");
            if (onDataUpdated) {
                onDataUpdated('update', ev, id);
            }
        });
 
        scheduler.attachEvent('onEventDeleted', (id, ev) => {
        console.log("onEventDeleted");

            if (onDataUpdated) {
                onDataUpdated('delete', ev, id);
            }
        });
        scheduler._$initialized = true;
        console.log("initSchedulerEvents");
  }
     componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
        
        scheduler.config.fix_tab_position = false;
        scheduler.config.hour_date = '%g:%i %A';
        scheduler.xy.scale_width = 70;
        scheduler.config.icons_select = ["icon_delete"];

 
        this.initSchedulerEvents();
 
        const { events } = this.props;
        scheduler.init(this.schedulerContainer, new Date(), "week");
        scheduler.clearAll();
        scheduler.parse([...events, ...actualData ]);
    }
  shouldComponentUpdate(nextProps) {
    return this.props.timeFormatState !== nextProps.timeFormatState;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    scheduler.render();
  }

  setTimeFormat(state) {
    scheduler.config.hour_date = state ? "%H:%i" : "%g:%i %A";
    scheduler.templates.hour_scale = scheduler.date.date_to_str(
      scheduler.config.hour_date
    );
  }

  render() {
    const { timeFormatState } = this.props;
    this.setTimeFormat(timeFormatState);
    return (
      <div
        ref={(input) => {
          this.schedulerContainer = input;
        }}
        style={{ width: "100%", height: "100%" }}
      ></div>
    );
  }
}
