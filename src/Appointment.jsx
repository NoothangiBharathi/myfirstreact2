import React, { useState, useEffect } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });
  const [selectedId, setSelectedId] = useState(null);

  // Fetch appointments from the server
  useEffect(() => {
    fetch('/api/appointments')
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Book a new appointment
  const bookAppointment = () => {
    fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newAppointment) => {
        setAppointments([...appointments, newAppointment]);
        setFormData({ name: '', date: '', time: '' });
      })
      .catch((err) => console.error(err));
  };

  // Reschedule an appointment
  const rescheduleAppointment = () => {
    fetch(`/api/appointments/${selectedId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((updatedAppointment) => {
        setAppointments(
          appointments.map((appt) =>
            appt.id === selectedId ? updatedAppointment : appt
          )
        );
        setSelectedId(null);
        setFormData({ name: '', date: '', time: '' });
      })
      .catch((err) => console.error(err));
  };

  // Cancel an appointment
  const cancelAppointment = (id) => {
    fetch(`/api/appointments/${id}`, { method: 'DELETE' })
      .then(() => {
        setAppointments(appointments.filter((appt) => appt.id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            {appt.name} - {appt.date} at {appt.time}
            <button onClick={() => cancelAppointment(appt.id)}>Cancel</button>
            <button onClick={() => setSelectedId(appt.id)}>Reschedule</button>
          </li>
        ))}
      </ul>

      <h2>{selectedId ? 'Reschedule Appointment' : 'Book Appointment'}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <button onClick={selectedId ? rescheduleAppointment : bookAppointment}>
        {selectedId ? 'Reschedule' : 'Book'}
      </button>
    </div>
  );
};

export default Appointments;
