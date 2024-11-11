// import React, { useState } from 'react';

// function FormEvents() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   // Handle change event for form fields
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle submit event
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent page reload
//     alert(`Name: ${formData.name}, Email: ${formData.email}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormEvents;
