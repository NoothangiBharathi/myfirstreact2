// import React, { useState } from 'react';
// import axios from 'axios';

// const BookAppointment1 = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!name || !email || !date || !time) {
//       setMessage('All fields are required!');
//       return;
//     }

//     const successMessage = `Appointment successfully booked for ${name} on ${date} at ${time}`;

//     try {
//       // Send the success message to the backend (Twilio SMS API)
//       await axios.post('http://localhost:5000/send-sms', {
//         message: successMessage,
//       });

//       // Set message state to show on the UI
//       setMessage(successMessage);

//       // Reset form after submission
//       setName('');
//       setEmail('');
//       setDate('');
//       setTime('');
//     } catch (error) {
//       console.error('Error sending SMS:', error);
//       setMessage('There was an error sending the SMS.');
//     }
//   };

//   return (
//     <div className="appointment-booking">
//       <h2>Book an Appointment</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div>
//           <label>Date:</label>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Time:</label>
//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Book Appointment</button>
//       </form>

//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default BookAppointment1;































import React, { useState } from 'react';
import axios from 'axios';

const BookAppointment1 = () => {
  const [userId, setUserId] = useState('');
  const [designId, setDesignId] = useState('');
  const [artistId, setArtistId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userId || !designId || !artistId || !date || !time) {
      setMessage('All fields are required!');
      return;
    }

    const successMessage = `Appointment successfully booked for User ID: ${userId}, Design ID: ${designId}, Artist ID: ${artistId} on ${date} at ${time}`;

    try {
      // Send the success message to the backend (Twilio SMS API)
      await axios.post('http://localhost:5000/send-sms', {
        message: successMessage,
      });

      // Set message state to show on the UI
      setMessage(successMessage);

      // Reset form after submission
      setUserId('');
      setDesignId('');
      setArtistId('');
      setDate('');
      setTime('');
    } catch (error) {
      console.error('Error sending SMS:', error);
      setMessage('There was an error sending the SMS.');
    }
  };

  return (
    <div className="appointment-booking container mt-5">
      <h2 className="text-center">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
        <div className="mb-3">
          <label className="form-label">User ID:</label>
          <input
            type="number"
            className="form-control"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your user ID"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Design ID:</label>
          <input
            type="number"
            className="form-control"
            value={designId}
            onChange={(e) => setDesignId(e.target.value)}
            placeholder="Enter the design ID"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Artist ID:</label>
          <input
            type="number"
            className="form-control"
            value={artistId}
            onChange={(e) => setArtistId(e.target.value)}
            placeholder="Enter the artist ID"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Time:</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Book Appointment
        </button>
      </form>

      {message && <p className="mt-3 text-center text-success">{message}</p>}
    </div>
  );
};

export default BookAppointment1;
