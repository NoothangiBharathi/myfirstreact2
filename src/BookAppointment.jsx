

// src/AppointmentForm.js
import React, { useState } from 'react';

function BookAppointment(){
  // State variables for input fields
  const [userId, setUserId] = useState('');
  const [designId, setDesignId] = useState('');
  const [artistId, setArtistId] = useState('');
  const [date, setDate] = useState('');
  
  // State variables for handling success/error messages
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handling form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Creating an appointment object
    const appointment = {
      userId,
      designId,
      artistId,
      date
    };

    // Define the endpoint URL
    const endpoint = 'https://your-api-endpoint.com/appointments'; // Replace with your actual API endpoint

    try {
      // Send POST request using fetch
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointment),
      });

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        console.log('Appointment booked:', data);

        // Set success message
        setSuccessMessage('Appointment booked successfully!');
        
        // Reset the form after submission
        setUserId('');
        setDesignId('');
        setArtistId('');
        setDate('');
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        // Handle API errors (non-200 responses)
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'An error occurred, please try again.');
      }
    } catch (error) {
      // Catch network errors or unexpected issues
      console.error('Error:', error);
      setErrorMessage('Failed to book appointment. Please try again later.');
    }
  };

  return (
    <div className="appointment-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">User ID</label>
          <input
            type="number"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="designId">Design ID</label>
          <input
            type="number"
            id="designId"
            value={designId}
            onChange={(e) => setDesignId(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="artistId">Artist ID</label>
          <input
            type="number"
            id="artistId"
            value={artistId}
            onChange={(e) => setArtistId(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <button type="submit">Book Appointment</button>
      </form>

      {/* Success message display */}
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      {/* Error message display */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default BookAppointment;
