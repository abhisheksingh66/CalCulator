import React from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
const App = () => {

const [calval,setcalval] = useState('')

const buttonClick=(buttonText)=>{

  if(buttonText==='c'){
setcalval('')
  }else if(buttonText ==='='){
    const result=eval(calval)
    setcalval(result)
  }else{
    const newDis=calval+buttonText
    setcalval(newDis)
  }

}

  return (
    <div className={styles.calculator}>
      <Display calval={calval} />
      <ButtonContainer buttonClick={buttonClick}/>
    </div>
  );
};

export default App;
