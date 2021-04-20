const instructionsContent = {
  1: {
    title: <strong>{`Ballots are counted.`}</strong>,
    first: `If a candidate gets more than 50% of first choice votes, they win. Otherwise, ballots are counted in rounds until 2 candidates remain.`,
    second: `Click “Start” to see how ballots are counted round by round.`,
  },
  2: {
    title: <strong>{`Round 1`}</strong>,
    first: <strong>{`Only your vote for your 1st choice is counted.`}</strong>,
    second: `If a candidate gets more than 50% of the votes, they win!`,
    third: `If none of the candidates secure a majority, the election goes to Round 2.`,
  },
  3: {
    title: <strong>{`Round 2`}</strong>,
    first: `The candidate with the fewest votes is eliminated.`,
    second: `Ballots for that candiate are counted for the voter’s next choice.`,
    third: `No candidate has reached more than 50% of the votes to win, continue to Round 3.`,
    fourth: (
      <strong>{`If your candidate has not been eliminated, your first choice still holds.`}</strong>
    ),
  },
  4: {
    title: <strong>{`Round 3`}</strong>,
    first: `The candidate with the fewest votes is eliminated.`,
    second: `Ballots for the eliminated candiate are counted for the voter’s next choice.`,
    third: `Still no majority, continue on to Round 4.`,
    fourth: (
      <strong>{`If your first choice candidate has been eliminated, your second choice vote is now counted.`}</strong>
    ),
  },
  5: {
    title: <strong>{`Round 4`}</strong>,
    first: `Still no majority. The candidate with the fewest votes is eliminated.`,
    second: `Those ballots are counted for the voter’s next choice. Still no winner. Move to Round 5.`,
    third: (
      <strong>{`If your 2nd choice candidate has been eliminated, your 3rd choice vote is counted.`}</strong>
    ),
    fourth: (
      <strong>{`If your 3rd choice has also been eliminated, your 4th choice vote is now counted. `}</strong>
    ),
  },
  6: {
    title: <strong>{`Round 5`}</strong>,
    first: `The candidate with the fewest votes is eliminated. 2 candidates remain.`,
    second: `Votes are counted for the voter’s next choice, and a majority is reached!`,
    third: <strong>{`The race is now over. A winner is declared!`}</strong>,
  },
};
export default instructionsContent;
