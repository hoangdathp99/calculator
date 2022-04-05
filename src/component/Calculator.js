import { useEffect, useState } from "react";
import React from "react";
import CalculatorTitle from "./CalculatorTitle";
import OutputScreen from "./outputScreen";
import OutputScreenRow from "./OutputScreenRow";
import Button from "./Button";
import "../css/Calculator.scss";
// import StopWatch from "./StopWatch";
function Calculator() {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  const handleClick = (event) => {
    var value = event.target.value;
    if (value == "x") {
      value = "*";
    }
    console.log(value);
    switch (value) {
      case "=": {
        if (question !== "") {
          var ans = "";
          try {
            ans = eval(question);
          } catch (err) {
            setAnswer("Math Error");
          }
          if (ans === undefined) {
            setAnswer("Math Error");
          } else {
            setAnswer(ans);
            setQuestion(question);
          }
          break;
        }
      }
      case "Clear": {
        setQuestion("");
        setAnswer("");
        break;
      }
      case "Delete": {
        var str = question;
        str = str.substr(0, str.length - 1);
        setQuestion(str);
        break;
      }

      default: {
        console.log(value);
        setQuestion((question) => question + value);
        break;
      }
    }
  };
  return (
    <div className="frame">
      <CalculatorTitle title="Calculator" />
      <div className="mainCalc">
        <OutputScreen question={question} answer={answer} />
        <div className="button-row">
          <Button
            className="btnaction"
            lable={"Clear"}
            handleClick={handleClick}
          />
          <Button
            className="btnaction"
            lable={"Delete"}
            handleClick={handleClick}
          />
        </div>
        <div className="button-row">
          <Button className="numbers" lable={"7"} handleClick={handleClick} />
          <Button className="numbers" lable={"8"} handleClick={handleClick} />
          <Button className="numbers" lable={"9"} handleClick={handleClick} />
          <Button className="numbers" lable={"+"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button className="numbers" lable={"4"} handleClick={handleClick} />
          <Button className="numbers" lable={"5"} handleClick={handleClick} />
          <Button className="numbers" lable={"6"} handleClick={handleClick} />
          <Button className="numbers" lable={"-"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button className="numbers" lable={"1"} handleClick={handleClick} />
          <Button className="numbers" lable={"2"} handleClick={handleClick} />
          <Button className="numbers" lable={"3"} handleClick={handleClick} />
          <Button className="numbers" lable={"x"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button className="numbers" lable={"0"} handleClick={handleClick} />
          <Button className="numbers" lable={"."} handleClick={handleClick} />
          <Button className="numbers" lable={"/"} handleClick={handleClick} />
          <Button className="numbers" lable={"="} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
