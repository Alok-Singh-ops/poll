import React, { useState, useEffect } from "react";
import Polls from "react-polls";
import "../stylesheets/reactPollCSS.css";
const pollQuestion1 = "Is react-polls useful?";
const pollAnswers1 = [
  { option: "Yes", votes: 24 },
  { option: "No", votes: 3 },
  { option: "I don't know", votes: 1 }
];
const pollStyles1 = {
  questionSeparator: true,
  questionSeparatorWidth: "question",
  questionBold: true,
  questionColor: "#303030",
  align: "center",
  theme: "purple"
};

const pollQuestion2 = "What framework do you prefer?";
const pollAnswers2 = [
  { option: "React", votes: 5 },
  { option: "Vue", votes: 2 },
  { option: "Angular", votes: 1 }
];
const pollStyles2 = {
  questionSeparator: false,
  questionSeparatorWidth: "question",
  questionBold: false,
  questionColor: "#4F70D6",
  align: "center",
  theme: "blue"
};

const ReactPollComponnet = () => {
  const [pollAns1, setPollAns1] = useState([...pollAnswers1]);
  const [pollAns2, setPollAns2] = useState([...pollAnswers2]);

  const handleVote = (voteAnswer, pollAnswers, pollNumber) => {
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++;

      console.log(answer);
      return answer;
    });

    if (pollNumber === 1) {
      setPollAns1(newPollAnswers);
    } else {
      setPollAns2(newPollAnswers);
    }
  };

  useEffect(() => {
    autoAddVotes(pollAns1, 1);
    autoAddVotes(pollAns2, 2);
  }, [pollAns1, pollAns2]);

  const autoAddVotes = (pollAnswers, pollNumber) => {
    setTimeout(() => {
      const choseAnswer = parseInt(Math.random() * 2, 10);
      handleVote(pollAnswers[choseAnswer].option, pollAnswers, pollNumber);
      autoAddVotes(pollAnswers, pollNumber);
    }, Math.random() * 5000);
  };
  return (
    <>
      <h1 className="name">react-polls</h1>
      <main className="main">
        <div>
          <Polls
            question={pollQuestion1}
            answers={pollAns1}
            onVote={voteAnswer => handleVote(voteAnswer, pollAns1, 1)}
            customStyles={pollStyles1}
            noStorage
          />
        </div>
        <div>
          <Polls
            question={pollQuestion2}
            answers={pollAns2}
            onVote={voteAnswer => handleVote(voteAnswer, pollAns2, 2)}
            customStyles={pollStyles2}
            noStorage
          />
        </div>
      </main>
    </>
  );
};
export default ReactPollComponnet;
