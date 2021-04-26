export function getInitialRoundObj() {
  const initialRound = {
    name: "r0",
    data: [
      {
        key: "r0-purple",
        class: "purple-bar increaseBarWidth",
        x: 0,
        y: 0,
        h: 25,
        w: 100,
      },
      {
        key: "r0-blue",
        class: "blue-bar increaseBarWidth",
        x: 0,
        y: 50,
        h: 25,
        w: 100,
      },
      {
        key: "r0-green",
        class: "green-bar increaseBarWidth",
        x: 0,
        y: 100,
        h: 25,
        w: 100,
      },
      {
        key: "r0-yellow",
        class: "yellow-bar increaseBarWidth",
        x: 0,
        y: 150,
        h: 25,
        w: 100,
      },
      {
        key: "r0-orange",
        class: "orange-bar increaseBarWidth",
        x: 0,
        y: 200,
        h: 25,
        w: 100,
      },
      {
        key: "r0-pink",
        class: "pink-bar increaseBarWidth",
        x: 0,
        y: 250,
        h: 25,
        w: 100,
      },
    ],
  };
  return initialRound;
}

export function getAppConfig() {
  const initialRound = getInitialRoundObj();
  const appData = [
    initialRound,
    // {
    //   name: "r1",
    //   data: [
    //     {
    //       class: "purple-bar",
    //       x: 0,
    //       y: 0,
    //       w: 100,
    //     },
    //   ],
    // },
  ];

  return appData;
}
