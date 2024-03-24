import styles from "./HeaderStrip.module.css";
function HeaderStrip() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let AmPm = "";

  let day = date.getDay();
  function tellDay(day) {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  }
  function tellAmPm(AmPm) {
    if (hour > 12) {
      AmPm = "Pm";
      return AmPm;
    } else {
      AmPm = "AM";
      return AmPm;
    }
  }
  return (
    <>
      <div className={styles.headerDiv}>
        <span className={styles.time}>
          {hour > 12 ? hour - 12 : hour}:{minute < 10 ? `0${minute}` : minute}
          {`  ${tellAmPm(AmPm)}`}
          {AmPm}
        </span>
        <span className={styles.wifi}>📶</span>
        <span className={styles.day}>{tellDay(day)}</span>
        <span className={styles.battery}>🔋</span>
      </div>
    </>
  );
}

export default HeaderStrip;
