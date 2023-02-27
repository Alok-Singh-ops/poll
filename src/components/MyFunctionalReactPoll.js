import React, { useState } from "react";
import { Radio } from "semantic-ui-react";
import styled from "styled-components";
import ReactPoll from "@termoxin/react-poll";

const Controls = styled.div`
  display: flex;
  flex-flow: column nowrap;
  * {
    margin-top: 5px;
  }
`;

const poll = [
  {
    id: 1,
    type: "radio",
    text: "What is render method in React library?",
    correctAnswer: "It's a function that render a React Element.",
    answers: [
      { id: 1, text: "It's a function for multiple numbers." },
      { id: 2, text: "It's a function that render a React Element." },
      { id: 3, text: "I don't know." }
    ]
  },
  {
    id: 2,
    type: "checkbox",
    text: "Choose fruits in this list.",
    correctAnswer: ["Apple", "Orange"],
    answers: [
      { id: 1, text: "Apple" },
      { id: 2, text: "Orange" },
      { id: 3, text: "Eggplant" }
    ]
  },
  {
    id: 3,
    type: "checkbox",
    text: "What are the most popular languages for web?",
    correctAnswer: ["JavaScript", "PHP"],
    answers: [
      { id: 1, text: "JavaScript" },
      { id: 2, text: "Perl" },
      { id: 3, text: "PHP" },
      { id: 4, text: "Go" },
      { id: 5, text: "Dart" }
    ]
  },
  {
    id: 4,
    type: "fill",
    text: "What is the one of the most important thing in our life?",
    correctAnswer: "The opportunity to live"
  },
  {
    id: 5,
    type: "fill",
    text: "What is founder's name of Microsoft?",
    correctAnswer: "Bill"
  },
  {
    id: 6,
    type: "radio",
    text: "What is color that attracts people?",
    correctAnswer: "blue",
    answers: [
      { id: 1, text: "blue" },
      { id: 2, text: "green" },
      { id: 3, text: "dark" }
    ]
  }
];

const MyFunctionalReactPoll = () => {
  const [type, setType] = useState("arrows");
  const [logs, setLogs] = useState(false);

  const handleToggle = (_, { checked }) => {
    if (checked) {
      setType("arrows");
    } else {
      setType("list");
    }
  };

  const handleLogsToggle = (_, { checked }) => {
    if (checked) {
      setLogs(true);
    } else {
      setLogs(false);
    }
  };

  const { Poll, Logs } = ReactPoll;

  return (
    <div className="App">
      <Poll questions={poll} type={type} name="General questions" />
      {logs ? <Logs /> : ""}
    </div>
  );
};

export default MyFunctionalReactPoll;