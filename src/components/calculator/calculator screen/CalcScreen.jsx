import styles from "./CalcScreen.module.css";

function CalcScreen({ calcScreenVal, ansScreenVal }) {
  return (
    <div className={styles.CalcScreen}>
      <div className={styles.calculaionScreen}>{calcScreenVal}</div>
      <div className={styles.answerScreen}>{ansScreenVal}</div>
    </div>
  );
}

export default CalcScreen;
