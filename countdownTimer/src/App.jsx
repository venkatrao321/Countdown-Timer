import { useState } from "react";
import "./App.css";

function currentDateTime() {
  var currentDateTime = new Date();
  var year = currentDateTime.getFullYear();
  var month = (currentDateTime.getMonth() + 1).toString().padStart(2, "0"); // Month starts from 0
  var day = currentDateTime.getDate().toString().padStart(2, "0");
  var hours = currentDateTime.getHours().toString().padStart(2, "0");
  var minutes = currentDateTime.getMinutes().toString().padStart(2, "0");
  // Format the date and time
  var formattedDateTime =
    year + "-" + month + "-" + day + "T" + hours + ":" + minutes;
  return formattedDateTime;
}
function diffInDays(selectedTime) {
  const date1 = new Date(currentDateTime());
  const date2 = new Date(selectedTime);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
function App() {
  const [count, setCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const onChangeDateTime = (e) => {
    console.log(e.target.value);
    if (diffInDays(e.target.value) > 100) {
      alert("Selected time is more than 100days");
      setSelectedDate("");
    } else setSelectedDate(e.target.value);
  };

  return (
    <>
      <label className="inputboxselect">Countdown Timer</label>
      <input
        className="inputboxselect"
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        value={selectedDate}
        min={currentDateTime()}
        onChange={onChangeDateTime}
      />
    </>
  );
}

export default App;
