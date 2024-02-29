import React from "react";
import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({buttonClick}) => {
  let buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((names,i) => {
        return <button className={styles.button} key={i} onClick={()=>buttonClick(names)}>{names}</button>;
      })}
    </div>
  );
};

export default ButtonContainer;
