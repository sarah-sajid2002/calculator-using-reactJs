import styles from "./SinButton.module.css";

function SinButton() {
  let sinButtons = [
    ["inv", "Rad", "Sin"],
    ["Cos", "Tan", "%"],
    ["In", "Log", "!"],
    ["^", "pi", "e"],
    ["(", ")", "sq"],
  ];

  return (
    <div
      className={`${styles.sinButtons} container text-center`}
      style={{ width: "50%" }}
    >
      {sinButtons.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((button, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className={`${styles.sinButtonsButton} col-4`}
            >
              {button}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SinButton;
