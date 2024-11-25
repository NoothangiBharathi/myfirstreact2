// // App.js
// import React, { useState } from "react";

// function RescheduleAppointment() {
//   // Initialize state to store current appointment and new time selected by user
//   const [appointment, setAppointment] = useState({
//     name: "John Doe",
//     date: "2024-11-25",
//     time: "10:00 AM",
//   });

//   const [newDate, setNewDate] = useState(appointment.date);
//   const [newTime, setNewTime] = useState(appointment.time);

//   // Handle change for date
//   const handleDateChange = (event) => {
//     setNewDate(event.target.value);
//   };

//   // Handle change for time
//   const handleTimeChange = (event) => {
//     setNewTime(event.target.value);
//   };

//   // Handle rescheduling the appointment
//   const handleReschedule = () => {
//     setAppointment({
//       name: appointment.name,
//       date: newDate,
//       time: newTime,
//     });

//     // Optionally, make an API call to save the rescheduled appointment to a database
//     console.log(`Appointment rescheduled to ${newDate} at ${newTime}`);
//   };

//   return (
//     <div className="App">
//       <h1>Reschedule Appointment</h1>
//       <div>
//         <p>
//           <strong>Current Appointment</strong>:
//           <br />
//           Name: {appointment.name}
//           <br />
//           Date: {appointment.date}
//           <br />
//           Time: {appointment.time}
//         </p>

//         <h3>Choose a new date and time</h3>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <label>
//             New Date:
//             <input
//               type="date"
//               value={newDate}
//               onChange={handleDateChange}
//             />
//           </label>
//           <br />
//           <label>
//             New Time:
//             <input
//               type="time"
//               value={newTime}
//               onChange={handleTimeChange}
//             />
//           </label>
//           <br />
//           <button type="button" onClick={handleReschedule}>
//             Reschedule Appointment
//           </button>
//         </form>

//         <div>
//           <h3>Updated Appointment</h3>
//           <p>
//             New Date: {appointment.date}
//             <br />
//             New Time: {appointment.time}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RescheduleAppointment;









// import React, { useState } from "react";

// function RescheduleAppointment() {
//   // Initialize state to store current appointment and new time selected by user
//   const [appointment, setAppointment] = useState({
//     name: "",
//     date: "",
//     time: "",
//     reason: "", // Add reason for rescheduling
//   });

//   const [newName, setNewName] = useState(appointment.name); // State for name input
//   const [newDate, setNewDate] = useState(appointment.date); // State for date input
//   const [newTime, setNewTime] = useState(appointment.time); // State for time input
//   const [newReason, setNewReason] = useState(""); // State for reason input
//   const [confirmationMessage, setConfirmationMessage] = useState(""); // Confirmation message after rescheduling

//   // Handle change for name
//   const handleNameChange = (event) => {
//     setNewName(event.target.value);
//   };

//   // Handle change for date
//   const handleDateChange = (event) => {
//     setNewDate(event.target.value);
//   };

//   // Handle change for time
//   const handleTimeChange = (event) => {
//     setNewTime(event.target.value);
//   };

//   // Handle change for reason
//   const handleReasonChange = (event) => {
//     setNewReason(event.target.value);
//   };

//   // Handle rescheduling the appointment
//   const handleReschedule = () => {
//     if (newReason === "") {
//       alert("Please provide a reason for rescheduling.");
//       return;
//     }

//     // Update the appointment state with the new values
//     setAppointment({
//       name: newName,
//       date: newDate,
//       time: newTime,
//       reason: newReason,
//     });

//     // Set confirmation message
//     setConfirmationMessage(`Appointment rescheduled for ${newName} on ${newDate} at ${newTime} for the following reason: "${newReason}"`);

//     // Optionally, make an API call to save the rescheduled appointment to a database
//     console.log(`Appointment rescheduled for ${newName} on ${newDate} at ${newTime} for reason: ${newReason}`);
//   };

//   return (
//     <div className="App">
//       <h1>Reschedule Appointment</h1>
//       <div>
//         <p>
//           <strong>Current Appointment</strong>:
//           <br />
//           Name: {appointment.name}
//           <br />
//           Date: {appointment.date}
//           <br />
//           Time: {appointment.time}
//           <br />
//           Reason: {appointment.reason || "No reason provided"}
//         </p>

//         <h3>Choose a new name, date, time, and provide a reason for rescheduling</h3>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={newName}
//               onChange={handleNameChange}
//               placeholder="Enter your name"
//             />
//           </label>
//           <br />
//           <label>
//             New Date:
//             <input type="date" value={newDate} onChange={handleDateChange} />
//           </label>
//           <br />
//           <label>
//             New Time:
//             <input type="time" value={newTime} onChange={handleTimeChange} />
//           </label>
//           <br />
//           <label>
//             Reason for Rescheduling:
//             <textarea
//               value={newReason}
//               onChange={handleReasonChange}
//               placeholder="Enter reason for rescheduling"
//             />
//           </label>
//           <br />
//           <button type="button" onClick={handleReschedule}>
//             Reschedule Appointment
//           </button>
//         </form>

//         {confirmationMessage && (
//           <div style={{ marginTop: "20px", color: "green" }}>
//             <h3>Confirmation:</h3>
//             <p>{confirmationMessage}</p>
//           </div>
//         )}

//         <div>
//           <h3>Updated Appointment</h3>
//           <p>
//             New Name: {appointment.name}
//             <br />
//             New Date: {appointment.date}
//             <br />
//             New Time: {appointment.time}
//             <br />
//             Reason: {appointment.reason || "No reason provided"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RescheduleAppointment;

















import React, { useState, useEffect } from "react";

function RescheduleAppointment() {
  // Initialize state to store current appointment and new time selected by user
  const [appointment, setAppointment] = useState({
    name: "",
    date: "",
    time: "",
    reason: "", // Add reason for rescheduling
  });

  const [newName, setNewName] = useState(""); // State for name input
  const [newDate, setNewDate] = useState(""); // State for date input
  const [newTime, setNewTime] = useState(""); // State for time input
  const [newReason, setNewReason] = useState(""); // State for reason input
  const [confirmationMessage, setConfirmationMessage] = useState(""); // Confirmation message after rescheduling

  // Fetch current appointment data when the component mounts
  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch("https://api.example.com/appointments/123");
        if (response.ok) {
          const data = await response.json();
          setAppointment(data);  // Set the fetched data into the appointment state
          setNewName(data.name);
          setNewDate(data.date);
          setNewTime(data.time);
          setNewReason(data.reason || "");  // Initialize reason if available
        } else {
          console.error("Failed to fetch appointment data");
        }
      } catch (error) {
        console.error("Error fetching appointment:", error);
      }
    };

    fetchAppointmentData();
  }, []);

  // Handle change for name
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // Handle change for date
  const handleDateChange = (event) => {
    setNewDate(event.target.value);
  };

  // Handle change for time
  const handleTimeChange = (event) => {
    setNewTime(event.target.value);
  };

  // Handle change for reason
  const handleReasonChange = (event) => {
    setNewReason(event.target.value);
  };

  // Handle rescheduling the appointment
  const handleReschedule = async () => {
    if (newReason === "") {
      alert("Please provide a reason for rescheduling.");
      return;
    }

    // Update the appointment state with the new values
    const updatedAppointment = {
      name: newName,
      date: newDate,
      time: newTime,
      reason: newReason,
    };

    try {
      // Send the updated appointment to the server (Replace the URL with the actual endpoint)
      const response = await fetch("https://api.example.com/appointments/123", {
        method: "PUT",  // or "PATCH" if you want to partially update
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAppointment),
      });

      if (response.ok) {
        const data = await response.json();
        setAppointment(data); // Update state with the rescheduled appointment
        setConfirmationMessage(`Appointment rescheduled for ${newName} on ${newDate} at ${newTime} for the following reason: "${newReason}"`);
        console.log("Appointment rescheduled:", data);
      } else {
        console.error("Failed to reschedule appointment");
      }
    } catch (error) {
      console.error("Error rescheduling appointment:", error);
    }
  };

  return (
    <div className="App">
      <h1>Reschedule Appointment</h1>
      <div>
        <p>
          <strong>Current Appointment</strong>:
          <br />
          Name: {appointment.name}
          <br />
          Date: {appointment.date}
          <br />
          Time: {appointment.time}
          <br />
          Reason: {appointment.reason || "No reason provided"}
        </p>

        <h3>Choose a new name, date, time, and provide a reason for rescheduling</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Name:
            <input
              type="text"
              value={newName}
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
          </label>
          <br />
          <label>
            New Date:
            <input type="date" value={newDate} onChange={handleDateChange} />
          </label>
          <br />
          <label>
            New Time:
            <input type="time" value={newTime} onChange={handleTimeChange} />
          </label>
          <br />
          <label>
            Reason for Rescheduling:
            <textarea
              value={newReason}
              onChange={handleReasonChange}
              placeholder="Enter reason for rescheduling"
            />
          </label>
          <br />
          <button type="button" onClick={handleReschedule}>
            Reschedule Appointment
          </button>
        </form>

        {confirmationMessage && (
          <div style={{ marginTop: "20px", color: "green" }}>
            <h3>Confirmation:</h3>
            <p>{confirmationMessage}</p>
          </div>
        )}

        <div>
          <h3>Updated Appointment</h3>
          <p>
            New Name: {appointment.name}
            <br />
            New Date: {appointment.date}
            <br />
            New Time: {appointment.time}
            <br />
            Reason: {appointment.reason || "No reason provided"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RescheduleAppointment;
