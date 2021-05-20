// import { date } from "faker";
import TimelineButton from "atoms/TimelineButton";
import EditableTextField from "atoms/EditableTextField";

const generateData = (totalRows = 5) => {
  let rows = [];
  for (let i = 0; i < totalRows; i++) {
    const mainarea = `Mainarea ${i}`;
    const subarea = `Subarea ${i}`;
    const comment = `Comment ${i}`;
    const status = `Status ${i}`;
    const email = `email@email.com ${i}`;
    const link = `www.abc${i}.com`;
    const timelineDateTime = `Date ${i}`;
    const oppe = `Oppe ${i}`;

    const rowMainareaObj = {
      text: mainarea,
      component: <EditableTextField editableInputValue={mainarea} />,
      isVisible: false,
    };
    const rowSubareaObj = {
      text: subarea,
      component: <EditableTextField editableInputValue={subarea} />,
      isVisible: true,
    };
    const rowCommentObj = {
      text: comment,
      component: <EditableTextField editableInputValue={comment} />,
      isVisible: true,
    };
    const rowStatusObj = {
      text: status,
      component: <EditableTextField editableInputValue={status} />,
      isVisible: true,
    };
    const rowEmailObj = {
      text: email,
      component: <EditableTextField editableInputValue={email} />,
      isVisible: true,
    };
    const rowLinkObj = {
      text: link,
      component: <EditableTextField editableInputValue={link} />,
      isVisible: true,
    };
    const rowTimelineDateTimeObj = {
      text: timelineDateTime,
      component: <TimelineButton editableInputValue={timelineDateTime} />,
      isVisible: true,
    };
    const rowOppeObj = {
      text: oppe,
      component: <EditableTextField editableInputValue={oppe} />,
      isVisible: true,
    };

    rows.push({
      mainarea: rowMainareaObj,
      subarea: rowSubareaObj,
      comment: rowCommentObj,
      status: rowStatusObj,
      email: rowEmailObj,
      link: rowLinkObj,
      timelineDateTime: rowTimelineDateTimeObj,
      oppe: rowOppeObj,
      // "Tags": `Tags ${i}`,
      // "Initiative contact person": `ICP ${i}`,
      // "Aktor": `Aktor name ${i}`,
      // "Scenes": `Scene ${i}`,
      // "Id": i
    });
  }

  return {
    data: rows,
    columns: Object.keys(rows[0]),
  };
};

export default generateData;
