import { groupColorList } from "configs/colorConfig";

function getMondayViewData() {
  let posts = [];
  for (let i = 0; i < 3; i++) {
    posts.push({
      postKey: i,
      mainarea: `main area ${i}`,
      subarea: `Sub Area ${i}`,
      totalItems: 3,
      groupColor: groupColorList[i],
      isGridOpen: i === 0 ? true : false,
    });
  }

  return posts;
}

export default getMondayViewData;
