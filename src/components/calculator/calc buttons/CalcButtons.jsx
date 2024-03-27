import styles from "./CalcButtons.module.css";

function CalcButtons({ handleOnClick }) {
  let buttonsData = [
    ["CE", "C", "**", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    [".", "0", "="],
  ];

  return (
    <div className={`${styles.CalcButtons}  container text-center`}>
      {buttonsData.map((row, indexI) => (
        <div key={indexI} className="row">
          {row.map((button, indexJ) => (
            <button
              onClick={(e) => handleOnClick(button, e)}
              key={`${indexI}-${indexJ}`}
              className={`${styles.simpleButton} ${getButtonClass(
                button
              )} ${CYellowButton(button)}`}
            >
              {button}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

// Function to determine the column class for each button
function getButtonClass(button) {
  if (button === "=") {
    return "col-6"; // Element '=' take up 4 columns
  } else {
    return "col-3"; // All other elements take up 2 columns
  }
}

function CYellowButton(button) {
  if (button === "C") {
    return "CYellowButton";
  } else {
    return;
  }
}

export default CalcButtons;
