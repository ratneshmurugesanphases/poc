export const statusColors = {};
export const groupColorList = ["palegoldenrod", "palevioletred", "peachpuff"];
const podioStatusColors = {
  clear: "#D3E6CE", //clear - green
  notDone: "#F5EDB8", //not done - yellow
  cancelled: "#F5C4C3", //cancelled - red
  uncertain: "#FFCAB3", //uncertain - orange
  followUp: "#D5D5D5", //follow-up - grey
};
export function getPodioStatusColors() {
  return podioStatusColors;
}
