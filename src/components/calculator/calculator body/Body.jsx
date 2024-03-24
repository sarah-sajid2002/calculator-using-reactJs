import CalcButtons from "../calc buttons/CalcButtons";
import CalcScreen from "../calculator screen/CalcScreen";
import HeaderStrip from "../header strip/HeaderStrip";
import SinButton from "../sin buttons/SinButton";
import styles from "./Body.module.css";
function Body() {
  return (
    <div className={styles.bodyDiv}>
      <HeaderStrip />
      <CalcScreen />
      <div className={styles.mainButtonDiv}>
        <CalcButtons />
        <SinButton />
      </div>
    </div>
  );
}

export default Body;
