import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Style/seleteShow.css";

const theaters = [
  {
    name: "PVR Cinemas",
    shows: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
  },
  {
    name: "Inox",
    shows: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
  },
  {
    name: "Cinepolis",
    shows: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
  },
];

function SelectShow() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div className="App">
      <h1>Book My Show</h1>
      
      {/* Date Picker */}
      <div className="date-picker bg-white rounded p-1 flex-column justify-content-start">
        <span>Select Date:</span>
        <div className="d-flex flex-row mb-3">
            <div className="card m-2">
                <button className="btn btn-light fs-6">
                    12 Dec,  Thusday 
                </button>
            </div>
            <div className="card m-2">
                <button className="btn btn-light fs-6">
                    13 Dec,  Friday 
                </button>
            </div>
        </div>
      </div>

      {/* Theater List */}
      <div className="theaters">
        {theaters.map((theater, index) => (
          <div key={index} className="theater">
            <h2>{theater.name}</h2>
            <div className="showtimes">
              {theater.shows.map((time, idx) => (
                <button
                  key={idx}
                  className={`showtime ${
                    selectedShow === time ? "selected" : ""
                  }`}
                  onClick={() => setSelectedShow(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Show */}
      {selectedShow && (
        <div className="selected-show">
          <h3>
            You selected <b>{selectedShow}</b> on{" "}
            <b>{selectedDate.toDateString()}</b>
          </h3>
        </div>
      )}
    </div>
  );
}

export default SelectShow;
