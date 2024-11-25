// import React, { useState } from 'react';

// const CancelAppointment = () => {
//   // State to track the status of the appointment
//   const [isCancelled, setIsCancelled] = useState(false);

//   // Function to handle the cancellation
//   const cancelAppointment = () => {
//     // Update the state to show that the appointment is cancelled
//     setIsCancelled(true);
//     // Here, you can add further actions such as calling an API to cancel the appointment.
//     console.log("Appointment has been cancelled.");
//   };

//   return (
//     <div>
//       <h1>Appointment Details</h1>
//       <p>Your appointment is scheduled for: <strong>Monday, 11 AM</strong></p>
      
//       {!isCancelled ? (
//         <div>
//           <button onClick={cancelAppointment} style={{ padding: '10px', backgroundColor: 'red', color: 'white' }}>
//             Cancel Appointment
//           </button>
//         </div>
//       ) : (
//         <div>
//           <p>Your appointment has been cancelled.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CancelAppointment;






















import React, { useState } from 'react';

const CancelAppointment = () => {
  // State to track the status of the appointment
  const [isCancelled, setIsCancelled] = useState(false);

  // State to track the appointment date
  const [appointmentDate, setAppointmentDate] = useState("");

  // Function to handle the cancellation
  const cancelAppointment = () => {
    // Update the state to show that the appointment is cancelled
    setIsCancelled(true);
    // Here, you can add further actions such as calling an API to cancel the appointment.
    console.log("Appointment has been cancelled.");
  };

  // Function to handle date input change
  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  return (
    <div>
      <h1>Appointment Details</h1>
      
      {/* Input field to select the appointment date */}
      <label htmlFor="appointmentDate">Select your appointment date: </label>
      <input 
        type="date" 
        id="appointmentDate" 
        value={appointmentDate} 
        onChange={handleDateChange} 
        style={{ padding: '5px', margin: '10px 0' }}
      />

      {appointmentDate && (
        <p>Your appointment is scheduled for: <strong>{appointmentDate}</strong></p>
      )}

      {!isCancelled ? (
        <div>
          <button onClick={cancelAppointment} style={{ padding: '10px', backgroundColor: 'red', color: 'white' }}>
            Cancel Appointment
          </button>
        </div>
      ) : (
        <div>
          <p>Your appointment has been cancelled.</p>
        </div>
      )}
    </div>
  );
};

export default CancelAppointment;
