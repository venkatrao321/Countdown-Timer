import { useState } from "react";
import "./App.css";
import CountDownSection from "./components/CountDownSection/CountDownSection";
const currentDateTime = () => {
  var currentDateTime = new Date();
  var year = currentDateTime.getFullYear();
  var month = (currentDateTime.getMonth() + 1).toString().padStart(2, "0"); // Month starts from 0
  var day = currentDateTime.getDate().toString().padStart(2, "0");
  var hours = currentDateTime.getHours().toString().padStart(2, "0");
  var minutes = currentDateTime.getMinutes().toString().padStart(2, "0");
  // Format the date and time
  var formattedDateTime =
    year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + 0 ;
  return formattedDateTime;
};
const diffInDays = (selectedTime) => {
  const date1 = new Date(currentDateTime());
  const date2 = new Date(selectedTime);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [alerts,setAlerts]=useState({
    text:"",
    color:''
  })
  const onChangeDateTime = (e) => {
    console.log(e.target.value);
    if (diffInDays(e) > 100) {
      setAlerts({text:"Selected time is more than 100days",color:"red"});
      setSelectedDate("");
      setDateTime("");
    } else if (new Date(e.target.value).getTime() < new Date().getTime()) {
      setAlerts({text:"Selected time is more than current time",color:"red"});
      setSelectedDate("");
      setDateTime("");
    } else{ 
      setAlerts({text:"",color:""});
      setSelectedDate(e.target.value);
    }
  };
  const startTimer = () => {
    if(selectedDate)
    setDateTime(selectedDate);
    else{
      setDateTime("")
    }
  };
  return (
    <>
      <h1 id="title">CountDown Timer</h1>
      <input
        className="inputboxselect"
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        value={selectedDate}
        min={currentDateTime()}
        onChange={onChangeDateTime}
      />
      <CountDownSection countDownDate={dateTime} setAlerts={setAlerts}></CountDownSection>
      <button className="button-71" role="button" onClick={startTimer}>Start timer</button>
      <h5 className={alerts.color}>{alerts.text}</h5>
    </>
  );
}

export default App;
