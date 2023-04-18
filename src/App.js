import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import yellow from './Assets/yellow.avif';
import Red from './Assets/Red.avif';
import Black from './Assets/Black.jpg';
import White from './Assets/White.png';
import Green from './Assets/Green.png';

function App() {
  const [readMore, setReadmore] = useState(false);
  const [readMoreText, setReadMoreText] = useState(false);
  const [ColorTitle, setColorTitle] = useState("Yellow");
  const [Counter, setCounter] = useState(500);
  const [YellowData, setYellowData] = useState(10);
  const [RedData, setRedData] = useState(10);
  const [BlackData, setBlackData] = useState(10);
  const [WhiteData, setWhiteData] = useState(10);
  const [GreenData, setGreenData] = useState(10);
  let data = (Counter/5000)*100
 
  const ReadmoreHandler = () => {
    setReadmore(!readMore);
    setReadMoreText(!readMoreText)
  }

  const YellowHandler = () => {
    setColorTitle("Yellow")
  }
  const RedHandler = () => {
    setColorTitle("Red")
  }
  const BlackHandler = () => {
    setColorTitle("Black")
  }
  const WhiteHandler = () => {
    setColorTitle("White")
  }
  const GreenHandler = () => {
    setColorTitle("Green")
  }

  const IncHandler = ()=>{
    if(Counter === 500) {
      setCounter(1000)
    }else if(Counter === 1000){
       setCounter(1500)
    }else if(Counter === 1500){
      setCounter(2000)
   }else if(Counter === 2000){
    setCounter(5000)
 }   
  }

  const DecHandler = ()=>{
    if(Counter === 5000){
      setCounter(2000)
    }else if(Counter === 2000){
      setCounter(1500)
    }else if(Counter === 1500){
      setCounter(1000)
    }else if(Counter === 1000){
      setCounter(500)
    }
  }
    
  const VoteSubmitHandler = ()=>{
        if(ColorTitle === "Yellow"){
          setYellowData(data)
        }
        else if(ColorTitle === "Red"){
          setRedData(data)
        }
        else if(ColorTitle === "Black"){
          setBlackData(data)
        }
        else if(ColorTitle === "White"){
          setWhiteData(data)
        }
        else if(ColorTitle === "Green"){
          setGreenData(data)
          console.log(data)
        }
  }

  return (
    <div className="App">
      <div className='main'>
        <h2>WHICH OUTFIT SHALL I WEAR NEXT?</h2>
        <p>
          My next concert in berlin is totally sold out!
          You have now the change to win 2 of
          those super rare concer{!readMore && <span>...</span>}
          {readMore &&
            <span>{" "}
              My next concert in berlin is totally sold out!
              You have now the change to win 2 of those super rare concer
            </span>
          }
        </p>
        <button onClick={ReadmoreHandler}>
          <h3>
            {!readMoreText ? "read more" : "read less"}
          </h3>
        </button>
        <div>
          <div
            className={`${ColorTitle === "Yellow" ? "selected" : "Card_Wraper"
              }`}
            onClick={YellowHandler}>
            <Card image={yellow} Title={"YELLOW"} ColorPer={YellowData}/>
          </div>
          <br />
          <div
            className={`${ColorTitle === "Red" ? "selected" : "Card_Wraper"
              }`}
            onClick={RedHandler}>
            <Card image={Red} Title={"RED"} ColorPer={RedData}/>
          </div>
          <br />
          <div
            className={`${ColorTitle === "Black" ? "selected" : "Card_Wraper"
              }`}
            onClick={BlackHandler}>
            <Card image={Black} Title={"BLACK"} ColorPer={BlackData}/>
          </div>
          <br />
          <div
            className={`${ColorTitle === "White" ? "selected" : "Card_Wraper"
              }`}
            onClick={WhiteHandler}>
            <Card image={White} Title={"WHITE"} ColorPer={WhiteData}/>
          </div>
          <br />
          <div
            className={`${ColorTitle === "Green" ? "selected" : "Card_Wraper"
              }`}
            onClick={GreenHandler}>
            <Card image={Green} Title={"GREEN"} ColorPer={GreenData}/>
          </div>
          <br />
        </div>
        <div className='Inc_Dec_Wrap'>
          <h2>{ColorTitle} Dress</h2>
          <div className='Inc_Dec'>
            <button className='Inc' onClick={DecHandler}>-</button>
            <div className='Vote_Data'>
              <p>Vote Interest</p>
              <h5>
                {Counter}
              </h5>
            </div>
            <button className='Dec' onClick={IncHandler}>+</button>
          </div>
          <button onClick={VoteSubmitHandler} className='Vote_Button'>Vote</button>
          <p className='Tip_Content'>Tip: Use your Energy to boost your opinion</p>
        </div>
      </div>
    </div>
  );
}

export default App;
