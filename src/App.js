import React from "react";
import "./styles.css";

import Form from "./components/Form";
import MyFunctionalReactPoll from "./components/MyFunctionalReactPoll";
import SimplePoll from "./components/SimplePoll";
import ReactPollComponnet from "./components/react-poll-vote";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/*<MyFunctionalReactPoll />
      <SimplePoll />*/}
      <ReactPollComponnet />
    </div>
  );
}
