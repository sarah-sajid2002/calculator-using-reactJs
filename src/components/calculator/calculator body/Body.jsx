import { useState } from "react";
import CalcButtons from "../calc buttons/CalcButtons";
import CalcScreen from "../calculator screen/CalcScreen";
import HeaderStrip from "../header strip/HeaderStrip";
import styles from "./Body.module.css";

function Body() {
  let [calcScreenVal, setCalacScreenVal] = useState("");
  let [ansScreenVal, setAnsScreenVal] = useState("Answer!");
  function handleOnClickNormalButton(buttonName, event) {
    event.stopPropagation();
    if (buttonName === "CE") {
      let newVAlue = calcScreenVal.substring(0, calcScreenVal.length - 1);
      setCalacScreenVal(newVAlue);
    } else if (buttonName === "C") {
      setCalacScreenVal("");
      setAnsScreenVal("Answer!");
    } else if (buttonName === "=") {
      let result;
      try {
        result = eval(calcScreenVal);
        console.log("answer:", result);
      } catch (error) {
        result = "Error";
      }
      setAnsScreenVal(result);
    } else {
      let newVAl = calcScreenVal + buttonName;
      setCalacScreenVal(newVAl);
    }
    console.log(buttonName);
  }
  return (
    <div className={styles.bodyDiv}>
      <HeaderStrip />
      <CalcScreen calcScreenVal={calcScreenVal} ansScreenVal={ansScreenVal} />
      <div className={styles.mainButtonDiv}>
        <CalcButtons handleOnClick={handleOnClickNormalButton} />
      </div>
    </div>
  );
}

export default Body;
