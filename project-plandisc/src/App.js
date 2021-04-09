import React, { useRef, useEffect } from "react";
import "./App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { series4Data, series42Data, series4BackData, series5Data } from "./data/dates";

// function am4themes_myTheme(target) {
//   if (target instanceof am4core.ColorSet) {
//     target.list = [
//       // am4core.color("#1BA68D"),
//       // am4core.color("#E7DA4F"),
//       // am4core.color("#E77624"),
//       // am4core.color("#DF3520"),
//       // am4core.color("#64297B"),
//       // am4core.color("#232555"),
//     ];
//   }
// }

// am4core.useTheme(am4themes_myTheme);
// am4core.useTheme(am4themes_animated);

function App(props) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = am4core.create("chartdiv", am4charts.RadarChart);
    chart.data = [
      {
        category: "Four",
        // config: {
          // isActive: true,
        //   stroke: am4core.color("#54B8B4"),
        //   fill: am4core.color("#54B8B4"),
        // },
        color: am4core.color("#54B8B4")
      },
      {
        category: "Five",
        // color: "#B582BA"
        // config: {
        //   isActive: false,
          // stroke: am4core.color("red"),
          // fill: am4core.color("red"),
        // },
      },
      {
        category: "Six",
      //   config: {
      //     isActive: true,
      //     stroke: am4core.color("yellow"),
      //   },
      },
      {
        category: "Seven",
        // config: {
        //   isActive: true,
        //   // stroke: am4core.color("red"),
        // },
      },
    ];

    // chart.padding(20, 20, 20, 20);
    chart.colors.step = 1;
    chart.dateFormatter.inputDateFormat = "YYYY-MM-dd";
    chart.innerRadius = am4core.percent(30);
    chart.responsive.enabled = true;
    chart.dateFormatter.intlLocales = "en-EN";
    chart.dateFormatter.dateFormat = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    const label = categoryAxis.renderer.labels.template;
    label.truncate = true;
    label.maxWidth = 30;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.labels.template.location = 0;
    // categoryAxis.renderer.grid.template.x = 0;
    // categoryAxis.renderer.grid.template.properties.
    // categoryAxis.renderer.tooltipLocation = 0.5;
    categoryAxis.renderer.grid.template.stroke = am4core.color("white");
    categoryAxis.renderer.grid.template.strokeOpacity = 1;
    categoryAxis.renderer.grid.template.strokeWidth = 5;

    // categoryAxis.renderer.minGridDistance = 3;
    // categoryAxis.mouseEnabled = true;
    // categoryAxis.tooltip.disabled = true;
    // categoryAxis.renderer.grid.template.stroke = am4core.color("green");
    // categoryAxis.renderer.inside = true;
    categoryAxis.renderer.labels.template.fontSize = "0.7em";
    categoryAxis.renderer.labels.template.disabled = true;

    // // categoryAxis.renderer.axisFills.template.disabled = false;
    categoryAxis.zIndex = 1;
    // categoryAxis.zoomable = false;


    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.labels.template.horizontalCenter = "right";
    dateAxis.strictMinMax = false;
    // dateAxis.renderer.maxLabelPosition = 0.99;
    dateAxis.renderer.grid.template.strokeOpacity = 0;
    dateAxis.renderer.minGridDistance = 60;
    // dateAxis.renderer.labels.template.relativeRotation = 30;
    // dateAxis.renderer.labels.template.location = 0.5;
    dateAxis.dateFormats.setKey("month", { month: "long", year: "numeric" });
    dateAxis.periodChangeDateFormats.setKey("month", {
      month: "long",
      year: "numeric",
    });
    dateAxis.min = new Date(2018, 0, 1, 0, 0, 0).getTime();
    dateAxis.max = new Date(2018, 11, 31, 0, 0, 0).getTime();
    dateAxis.mouseEnabled = false;
    dateAxis.tooltip.disabled = false;
    // dateAxis.baseInterval = { timeUnit: "day", count: 1 };
    dateAxis.renderer.labels.template.bent = true;
    dateAxis.renderer.labels.template.fontSize = "0.7em";
    // dateAxis.renderer.minGridDistance = 0;
    dateAxis.renderer.labels.template.radius = am4core.percent(10);
    dateAxis.adapter.add("getTooltipText", (text, target, key) => {
      return ">>> " + text + " <<<";
     });
    // dateAxis = am4core.color("#000");
    // const range = dateAxis.axisRanges.create();
    // range.axisFill.fill = am4core.color("#000");

    // chart.events.on("hit", (ev) => {
    //   alert(
    //     "Clicked on grid");
    // })
    // dateAxis.zoomable = false;
    // const updatedRange = chart.z
    // console.table(updatedRange);

    // Week numbers
    const dateAxis_week = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis_week.renderer.labels.template.horizontalCenter = "left";
    dateAxis_week.strictMinMax = false;
    dateAxis_week.renderer.labels.template.location = 0;
    dateAxis_week.renderer.grid.template.location = 0;

    // dateAxis_week.renderer.minLabelPosition = 0.001;
    // dateAxis_week.renderer.maxLabelPosition = 0.99;
    dateAxis_week.renderer.grid.template.strokeOpacity = 0.2;
    dateAxis_week.renderer.minGridDistance = 30;
    // dateAxis_week.renderer.labels.template.relativeRotation = 0;
    // dateAxis_week.renderer.labels.template.location = 0.5;
    dateAxis_week.dateFormats.setKey("week", "d");
    dateAxis_week.periodChangeDateFormats.setKey("week", "d");
    dateAxis_week.min = new Date(2018, 0, 1, 0, 0, 0).getTime();
    dateAxis_week.max = new Date(2018, 11, 31, 0, 0, 0).getTime();
    dateAxis_week.mouseEnabled = false;
    dateAxis_week.tooltip.disabled = false;
    dateAxis_week.baseInterval = { timeUnit: "day", count: 1 };
    dateAxis_week.renderer.labels.template.bent = true;
    dateAxis_week.renderer.labels.template.fontSize = "0.7em";
    // dateAxis_week.renderer.minGridDistance = 0;
    dateAxis_week.renderer.labels.template.radius = am4core.percent(4);
    // dateAxis_week.zoomable = false;

    // dateAxis_week = am4core.color("#000");
    // const range_week = dateAxis_week.axisRanges.create();
    // range_week.axisFill.fill = am4core.color("yellow");

    // const categoryRange = categoryAxis.axisRanges.create();
    // add month ranges
    for (let i = 0; i < 12; i++) {
      const range = dateAxis.axisRanges.create();
      range.date = new Date(2018, i, 0, 0, 0, 0);
      range.endDate = new Date(2018, 11, 31, 0, 0, 0);
      range.axisFill.radius = -28;
      range.axisFill.adapter.add("innerRadius", function (innerRadius, target) {
        return dateAxis.renderer.pixelRadius + 10;
      });
      range.strictMinMax = false;
      range.axisFill.fill = am4core.color("#fff");
      range.axisFill.stroke = am4core.color("#e2e2e2");
      range.grid.disabled = true;
      // range.label.text = chart.dateFormatter.language.translate(
      //   chart.dateFormatter.months[i]
      // );
      // range.label.bent = true;
      // range.label.radius = 10;
      // range.label.fontSize = 50;
      // range.label.paddingBottom = 5;
      // range.label.interactionsEnabled = false;
      // range.axisFill.interactionsEnabled = true;
      // range.axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      // range.axisFill.events.on("hit", function (event) {
      //   if (dateAxis.start == 0 && dateAxis.end == 1) {
      //     dateAxis.zoomToDates(
      //       event.target.dataItem.date,
      //       event.target.dataItem.endDate
      //     );
      //   } else {
      //     dateAxis.zoom({ start: 0, end: 1 });
      //   }
      // });
    }

    const dataEvents = [{
      "category": "Research & Development",
      "value": 3.5
    }, {
      "category": "Marketing",
      "value": 6
    }, {
      "category": "Distribution",
      "value": 6.5
    }];

    // const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.dataFields.value = "a";
    const eventSeries = chart.xAxes.push(new am4charts.DateAxis())
    eventSeries.data = dataEvents;
    // eventSeries.dataFields.valueY = "value";
    // eventSeries.dataFields.categoryX = "category";
    // eventSeries.columns.template.stroke = am4core.color("red");
    // eventSeries.renderer.tile.template.bent = true;
    // dateAxis_week.renderer.labels.template.bent = true;

    // eventSeries.name = "Sales";

    const series4 = chart.series.push(new am4charts.RadarColumnSeries());
    series4.name = "Series 4";
    series4.data = series4Data;
    series4.dataFields.openDateX = "startDate4";
    series4.dataFields.dateX = "endDate4";
    // series4.dataFields.valueY = "value";
    series4.dataFields.categoryY = "category";
    series4.columns.template.width = "90%";
    // series4
    // series4.logarithmic = true;
    // series4.dataFields.label.bent = true;
    series4.clustered = true;
    series4.stacked = false;
    series4.columns.template.fill = am4core.color("#a375a8");
    series4.columns.template.stroke = am4core.color("#a375a8");
    series4.columns.template.strokeWidth = 2;
    series4.columns.template.strokeOpacity = 1;
    series4.columns.template.fillOpacity = 9;
    // series4.columns.template.stroke = am4core.color("#000");
    // series4.columns.template.fill = "color";
    // series4.columns.template.stroke = "color";
    // series4.columns.template.configField = "config";
    // series4.columns.template.propertyFields.fill = "color";
    // series4.columns.template.propertyFields.stroke = "color";
    // series4.columns.template.propertyFields.fill = "color"
    console.log("pf", series4.columns.template);
    series4.columns.template.radarColumn.cornerRadius = 1;
    // series4.columns.template.height = "100%";
    series4.columns.template.tooltipText = "{category}: {openDateX} - {dateX}";
    series4.columns.template.events.on("hit", (ev) => {
      alert(
        "Clicked on " +
          ev.target.dataItem.categoryY +
          ": " +
          ev.target.dataItem.dateX
      );
    });
    // series4.columns.template.adapter
    // series4.invalidateData();
    series4.invalidateRawData();
    // const bullets = series4.bullets.push(new am4charts.LabelBullet());
    // bullets.label.text = "{name}";
    // bullets.label.rotation = 0;
    // bullets.label.truncate = true;
    // bullets.label.hideOversized = true;
    // bullets.id = "bullets";
    // console.log("bullet ZL", bullets); 

    // const range = series4.axisRanges;
    // console.log({range});
    // range.date = new Date(2018, i, 0, 0, 0, 0);
    // range.endDate = new Date(2018, 11, 31, 0, 0, 0);
    // range.axisFill.radius = -28;
    // range.axisFill.adapter.add("innerRadius", function (innerRadius, target) {
    //   return dateAxis.renderer.pixelRadius + 10;
    // });
    // range.strictMinMax = false;
    // range.axisFill.fill = am4core.color("#fff");
    // range.axisFill.stroke = am4core.color("#e2e2e2");
    // range.grid.disabled = true;

    // set zoom events
    // imageSeries.events.on("datavalidated", updateImageVisibility);
    // chart.events.on("zoomlevelchanged", updateImageVisibility);
    // bullets.events.on("ready", updateEventLabelVisibility);

    // function updateEventLabelVisibility(ev) {
      // const baseSprite = ev.target.baseSprite;
      // const series = baseSprite;

      // console.log({ baseSprite, bb: baseSprite.dataItem });
      // baseSprite.
      // series.bullets.each(function(label) {
        // console.log({label});
        // if (label.dataItem.dataContext.minZoomLevel) {
        //   console.log(label.dataItem.dataContext.minZoomLevel)
        //   if (label.dataItem.dataContext.minZoomLevel >= baseSprite.zoomLevel) {
            // label.hide();
          // }
          // else {
          //   label.show();
          // }
        // }
      // });
    // }
    // bullet.label.
    // bullet.label.disabled = true;
    // bullet.label.b
    // const series4Label = series4.createChild(am4core.Label);
    // series4Label.text = "{name}";
    // series4Label.horizontalCenter = "middle";
    // series4Label.verticalCenter = "middle";
    // series4Label.fontSize = "0.7em";
    // const hoverState4 = series4.columns.template.states.create("hover");
    // hoverState4.properties.fill = am4core.color("#e2e2e2");
    // hoverState4.properties.fillOpacity = 0.8;
    series4.zIndex = 1;
    // series4.columns.template

    // let range0101 = series4.axisRanges.push(am4core.Label)
    // range0101.date = new Date(2018, 0, 1);
    // range0101.label.text = "Jan 1st";

    const series4Line = series4.createChild(am4core.Sprite);
    series4Line.path = `M -75,-75 
    m -75,0 
    a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0`;
    series4Line.x = am4core.percent(0);
    series4Line.y = am4core.percent(0);
    series4Line.dx = 0;
    series4Line.fillOpacity = 0;
    series4Line.stroke = am4core.color("#A3320B");
    series4Line.strokeWidth = 2;
    series4Line.strokeOpacity = 0.5;
    series4Line.strokeDasharray = "5";
    series4Line.nonScalingStroke = true;

    const series4Label = series4.createChild(am4core.Label);
    series4Label.text = "Event A";
    series4Label.x = am4core.percent(0);
    series4Label.y = am4core.percent(0);
    series4Label.dx = 0;

    series4Label.path = series4Line.path;
    series4Label.locationOnPath = 0;


    // const series4Line = series4.createChild(am4core.Sprite);
    // series4Line.path = "M0,0 m-75,0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0";
    // series4Line.x = am4core.percent(0);
    // series4Line.y = am4core.percent(0);
    // series4Line.dx = 0;
    // series4Line.fillOpacity = 0;
    // series4Line.stroke = am4core.color("#A3320B");
    // series4Line.strokeWidth = 2;
    // series4Line.strokeOpacity = 0.5;
    // series4Line.strokeDasharray = "5";
    // series4Line.nonScalingStroke = true;

    // const series4Label = series4.createChild(am4core.Label);
    // series4Label.text = "series4";
    // series4Label.x = am4core.percent(-10);
    // series4Label.y = am4core.percent(30);
    // series4Label.dx = 0;
    // series4Label.path = series4Line.path;
    // series4Label.locationOnPath = 0;

    // const series4Back = chart.series.push(new am4charts.RadarColumnSeries());
    // series4Back.name = "Series 4 Back";
    // series4Back.data = series4BackData;
    // series4Back.dataFields.openDateX = "startDate4Back";
    // series4Back.dataFields.dateX = "endDate4Back";
    // series4Back.dataFields.categoryY = "category";
    // series4Back.columns.template.width = "100%";
    // series4Back.columns.template.fill = am4core.color("#c2b8c3");
    // series4Back.columns.template.stroke = am4core.color("#000");
    // series4Back.columns.template.strokeOpacity = 0.5;
    // series4Back.columns.template.strokeWidth = 0;
    // series4Back.clustered = false;
    // series4Back.stacked = false;
    // series4Back.zIndex = 0;
    // const hoverState4Back = series4Back.columns.template.states.create("hover");
    // hoverState4Back.properties.fill = am4core.color("white");
    // hoverState4Back.properties.fillOpacity = 0.5;
    // series4Back.invalidateRawData();


    const series42 = chart.series.push(new am4charts.RadarColumnSeries());
    series42.name = "Series 42";
    series42.data = series42Data;
    series42.dataFields.openDateX = "startDate42";
    series42.dataFields.dateX = "endDate42";
    // series42.dataFields.valueY = "value";
    series42.dataFields.categoryY = "category";
    series42.columns.template.width = "90%";
    // series42.logarithmic = true;
    // series42.dataFields.label.bent = true;
    series42.clustered = true;
    series42.stacked = false;
    series42.columns.template.fill = am4core.color("#a375a8");
    series42.columns.template.stroke = am4core.color("#a375a8");
    series42.columns.template.strokeWidth = 2;
    series42.columns.template.strokeOpacity = 1;
    series42.columns.template.fillOpacity = 9;
    // series42.columns.template.stroke = am4core.color("#000");
    // series42.propertyFields.fill = "color";
    // series42.columns.template.propertyFields.fill = "color";
    // series42.columns.template.propertyFields.stroke = "color";
    series42.columns.template.radarColumn.cornerRadius = 1;
    series42.columns.template.tooltipText = "{category}42: {openDateX} - {dateX}";
    series42.columns.template.events.on("hit", (ev) => {
      alert(
        "Clicked on " +
          ev.target.dataItem.categoryY +
          ": " +
          ev.target.dataItem.dateX
      );
    });
    // series42.invalidateData();
    series42.invalidateRawData();
    // Create a hover state
    // const hoverState42 = series42.columns.template.states.create("hover");
    // hoverState42.properties.fill = am4core.color("blue");
    // hoverState42.properties.fillOpacity = 0.8;
    series42.zIndex = 1;


    // Add a bullet
    // const label1 = series4.columns.template.createChild(am4core.Label);
    // label1.text = "{category}";
    // label1.align = "center";
    // label1.valign = "middle";
    // label1.zIndex = 10;
    // label1.strokeWidth = 0;

    // const series5 = chart.series.push(new am4charts.RadarColumnSeries());
    // series5.name = "Series 5";
    // series5.dataFields.openDateX = "startDate5";
    // series5.dataFields.dateX = "endDate5";
    // // series4.dataFields.valueY = "value";
    // series5.dataFields.categoryY = "category";
    // series5.columns.template.width = "90%";
    // // series5.logarithmic=true;
    // series5.data = series5Data;

    // // series4.dataFields.label.bent = true;
    // series5.clustered = false;
    // series5.stacked = false;
    // series5.columns.template.fill = am4core.color("#FCE8B7");
    // series5.columns.template.stroke = am4core.color("#FCE8B7");
    // series5.columns.template.strokeWidth = 2;
    // series5.columns.template.strokeOpacity = 1;
    // series5.columns.template.fillOpacity = 9;
    // // series5.columns.template.height = "100%";
    // // series5.columns.template.each ??
    // // const bullet = series5.bullets.push(new am4charts.LabelBullet());
    // // bullet.label.text = "{sliceId}ididididi";
    // // bullet.horizontalCenter = "middle";
    // // bullet.verticalCenter = "middle";
    // // bullet.locationY = 0.5;
    // // bullet.label

    // // series5.columns.template.fill = am4core.color("#FCE8B7");
    // // series5.columns.template.stroke = am4core.color("#000");
    // series5.columns.template.radarColumn.cornerRadius = 0;
    // // series5.columns.template.la
    // series5.columns.template.tooltipText = "{category}: {openDateX} - {dateX}";
    // series5.columns.template.events.on("hit", (ev) => {
    //   const id = ev.target.column.dataItem.dataContext.sliceId;
    //   // let slice = series5.slices.getIndex(0);
    //   console.log(series5.columns);
    //   console.log("id", id);

    //   // console.log({slice});
    //   // alert(
    //   //   "Clicked on " +
    //   //     ev.target.dataItem.categoryY +
    //   //     ": " +
    //   //     ev.target.dataItem.dateX
    //   // );
    //   // series5.data[id] = null;
    //   const selectedState = series5.columns.template.states.create("selected");
    //   console.log(selectedState);
    //   selectedState.properties.fill = am4core.color("red");
    //   // selectedState.properties.fillOpacity = 0.1;
    //   selectedState.properties.shiftRadius = 0;
    //   selectedState.properties.scale = 1;
    //   // selectedState.properties.hoverable = false;
    //   selectedState.properties.clickable = true;
    //   const col = series5.columns.getIndex(id);
    //   console.log(col);
    //   // if (col.clickable) {
    //     col.setState("selected");
    //   // } else {
    //   //   col.setState("default");
    //   // }
    // });

    // // bullet.propertyFields.rotation = 90;
    // // series5.zIndex = 1;
    // series5.invalidateData();
    // series5.invalidateRawData();
    // const hoverState5 = series5.columns.template.states.create("hover");
    // hoverState5.properties.fill = am4core.color("#e2e2e2");
    // hoverState5.properties.fillOpacity = 0.8;




    // chart.startAngle = -170;
    // chart.endAngle = -10;
    // chart.innerRadius = am4core.percent(50);

    // chart.seriesContainer.zIndex = 0;

    // chart.scrollbarX = new am4core.Scrollbar();
    // chart.scrollbarX.exportable = false;
    // chart.scrollbarY = new am4core.Scrollbar();
    // chart.scrollbarY.exportable = false;

    chart.cursor = new am4charts.RadarCursor();
    chart.cursor.innerRadius = am4core.percent(5);
    chart.cursor.lineY.disabled = true;
    // chart.cursor.
    // chart.zoomOutButton.disabled = true;
    // chart.interactionsEnabled = false;
    // chart.maskBullets = true;

    // console.log("maxZoomCount", chart.maxZoomCount);
    // console.log("maxZoomFactor", chart.maxZoomFactor);
    // // console.log("zoomFactor", chart.maxZoomCount);

    // chart.events.on("zoomended", (ev) => {
    //   console.log(chart.zoomLevel);

    // })
    // chart.cursor.disabled = true;
    chart.seriesContainer.events.on("hit", function(ev) {
      console.log("BaseSprite", ev.target.baseSprite);
    });

    const yearLabel = chart.radarContainer.createChild(am4core.Label);
    yearLabel.text = "category";
    yearLabel.fontSize = 30;
    yearLabel.horizontalCenter = "middle";
    yearLabel.verticalCenter = "middle";

    // console.log(chart);
    chartRef.current = chart;

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "900px", backgroundColor: "#f5f7fa" }}></div>;
}
export default App;
