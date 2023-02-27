import React, { useState, useEffect } from "react";
import "../stylesheets/simplePollCSS.css";

const SimplePoll = props => {
  const [vote1, setVote1] = useState(0);

  useEffect(() => {
    let pBar1 = document.getElementById("prg1");
    let pBar2 = document.getElementById("prg2");
    let pBar3 = document.getElementById("prg3");

    pBar1.addEventListener("click", function(e) {
      handleClick("prg1");
      console.log(JSON.stringify(e.target));
    });
    //   $('.prg1').bind('click', function (ev) {
    //     var $div = $(ev.target);
    //     var $display = $div.find('.display');

    //     var offset = $div.offset();
    //     var x = ev.clientX - offset.left;

    //     $('.progress').width(x);
    // });
  }, []);
  const handleClick = e => {
    let i = e;
    console.log("id is" + i);
    setVote1(vote1 + 1);
  };
  return (
    <>
      <fieldset>
        <legend>Which Operating System is on your system?</legend>
        <div className="pollBars">
          <div className="bar1">
            <progress
              className="prg"
              id="prg1"
              value={vote1}
              max="100"
              onClick={e => handleClick(e)}
            >
              32%
            </progress>
            <div className="floatOn">Windows</div>
          </div>
          <button id="prg1" onClick={e => handleClick(e)}>
            +10
          </button>
        </div>
        <br />
        <div className="pollBars">
          <div className="bar1">
            <progress className="prg" id="prg2" value="52" max="100">
              32%
            </progress>
            <div className="floatOn">Mac</div>
          </div>
        </div>
        <br />
        <div className="pollBars">
          <div className="bar1">
            <progress className="prg" id="prg3" value="82" max="100">
              32%
            </progress>
            <div className="floatOn">
              <b>Ubuntu</b>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
};
export default SimplePoll;
