import React, { useState } from 'react';
import './App.css';

function BookAppointment() {
  const [formData, setFormData] = useState({
    userId: '',
    designId: '',
    artistId: '',
    date: '',
    time: ''
  });

  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.userId || !formData.designId || !formData.artistId || !formData.date || !formData.time) {
      alert("Please fill in all fields!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://your-api-endpoint.com/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }

      const responseData = await response.json();

      setConfirmation({
        userId: formData.userId,
        designId: formData.designId,
        artistId: formData.artistId,
        date: formData.date,
        time: formData.time,
      });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h1 className="text-center mb-4">Booking</h1>

          {!confirmation ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="userId">User ID:</label>
                <input
                  type="number"
                  id="userId"
                  name="userId"
                  className="form-control"
                  value={formData.userId}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="designId">Design ID:</label>
                <input
                  type="number"
                  id="designId"
                  name="designId"
                  className="form-control"
                  value={formData.designId}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="artistId">Artist ID:</label>
                <input
                  type="number"
                  id="artistId"
                  name="artistId"
                  className="form-control"
                  value={formData.artistId}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="time">Time:</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="form-control"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? 'Booking...' : 'Book Appointment'}
              </button>

              {error && <p className="text-danger mt-3">{error}</p>}
            </form>
          ) : (
            <div className="confirmation mt-4 p-4 border rounded bg-light">
              <h5 className="text-center" style={{ fontSize: '15px' }}>Appointment Confirmed</h5>
              <p><strong>User ID:</strong> {confirmation.userId}</p>
              <p><strong>Design ID:</strong> {confirmation.designId}</p>
              <p><strong>Artist ID:</strong> {confirmation.artistId}</p>
              <p><strong>Date:</strong> {confirmation.date}</p>
              <p><strong>Time:</strong> {confirmation.time}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;



























