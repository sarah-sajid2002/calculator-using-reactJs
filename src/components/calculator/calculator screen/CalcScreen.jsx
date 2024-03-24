import styles from "./CalcScreen.module.css";

function CalcScreen() {
  return (
    <div className={styles.CalcScreen}>
      <div className={styles.calculaionScreen}>calculation screen</div>
      <div className={styles.answerScreen}>answer screen</div>
    </div>
  );
}

export default CalcScreen;
