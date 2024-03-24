import styles from "./Calculator.module.css";
import Body from "../../components/calculator/calculator body/Body";
function Calculator() {
  return (
    <>
      <div className={styles.mainDiv}>
        <Body />
      </div>
    </>
  );
}

export default Calculator;
