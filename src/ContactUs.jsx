// import React from 'react'

// const ContactUs = () => {
//   return (
//     <div>
        
//         <div>
//         <img style={{height:'500px', width:'100vw', marginTop:'50px'}} src="https://img.freepik.com/free-photo/woman-checking-time-from-her-phone_53876-129658.jpg?ga=GA1.1.898823599.1716876559" alt="" />

//         <h1 className='heading' style={{marginTop:'-250px', marginLeft:'20px'}}>CONTACT US</h1>
//         <p className='paragraph' style={{marginLeft:'20px'}}>Have questions or need support? Contact our team for assistance with our <br/> software solutions. We’re here to help you succeed</p>
//         </div>


//         <div className='input-fields' style={{marginTop:'170px'}}>
//             <label htmlFor="">Name:</label> <br/>
//             <input type="text" name='name' placeholder='Your Name' required />
//             <br/>
//             <label htmlFor="">Email</label> <br/>
//             <input type="text" name='email' placeholder='Your Email' required />
//             <br/>
//             <label htmlFor="">Phone</label><br/>
//             <input type="number" name='Phone' placeholder='Your Number' required /><br/>
//             <label htmlFor=""> Leave us a message</label> <br/>
//             <input type="text" name='message' placeholder='Your Message'  required/>
//         </div>




//     </div>




//   )
// }

// export default ContactUs













import React from 'react'

const ContactUs = () => {
  return (
    <div>
      {/* Banner image */}
      <div>
        <img 
          style={{ height: '500px', width: '100vw', marginTop: '50px' }} 
          src="https://img.freepik.com/free-photo/woman-checking-time-from-her-phone_53876-129658.jpg?ga=GA1.1.898823599.1716876559" 
          alt="Contact Us Banner" 
        />
        <h1 className="heading" style={{ marginTop: '-250px', marginLeft: '20px',color:'white' }}>
          CONTACT US
        </h1>
        <p className="paragraph" style={{ marginLeft: '20px',color:'white',fontSize:'17px' }}>
          Have questions or need support? Contact our team for assistance with our <br />
          software solutions. We’re here to help you succeed
        </p>
      </div>

      {/* Contact Form */}
      <div className="container" style={{ marginTop: '180px' }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-fields">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-control" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-control" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone:</label>
                  <input 
                    type="number" 
                    id="phone" 
                    className="form-control" 
                    placeholder="Your Number" 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Leave us a message:</label>
                  <textarea 
                    id="message" 
                    className="form-control" 
                    placeholder="Your Message" 
                    rows="4" 
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-primary w-250">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Get in touch */}
      <div>
        <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Get in touch</h2>
      </div>

      {/* Social Media Icons */}
      <div style={{ textAlign: 'center', marginTop: '25px' }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fab fa-facebook-f" style={{ fontSize: '30px', color: '#3b5998' }}></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fab fa-twitter" style={{ fontSize: '30px', color: '#1da1f2' }}></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fab fa-linkedin-in" style={{ fontSize: '30px', color: '#0077b5' }}></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fab fa-instagram" style={{ fontSize: '30px', color: '#e1306c' }}></i>
        </a>
      </div>

      {/* Location */}
      <div className="container mt-5">
        <div className="row justify-content-between" >
          {/* Location Column */}
          <div 
            className="col-md-4 text-center mb-4" 
            style={{
              border: '1px solid #ddd', 
              padding: '20px', 
              marginTop: '30px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow
              borderRadius: '8px',
              marginLeft:'-40px' // Optional for rounded corners
            }}
          >
            <i className="fas fa-map-marker-alt" style={{ fontSize: '35px', color: '#007bff' }}></i>
            <h3 className="mt-3">Our Location</h3>
            <p className="mt-2" style={{ fontSize: '16px' }}>
              1-98/9/65, Jai Hind Gandhi Rd, VIP Hills,<br />
              Jaihind Enclave, Madhapur, Hyderabad,<br />
              Telangana -50008.
            </p>
          </div>

          {/* Phone Column */}
          <div 
            className="col-md-4 text-center mb-4" 
            style={{
              border: '1px solid #ddd', 
              padding: '20px', 
              marginTop: '30px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow
              borderRadius: '8px', // Optional for rounded corners
              marginLeft:'0px'
            }}
          >
            <i className="fas fa-phone-alt" style={{ fontSize: '35px', color: '#007bff' }}></i>
            <h3 className="mt-3">Call Us On</h3>
            <p className="mt-2" style={{ fontSize: '16px' }}>
              040-31653936
            </p>
          </div>

          {/* Email Column */}
          <div 
            className="col-md-4 text-center mb-4" 
            style={{
              border: '1px solid #ddd', 
              padding: '20px', 
              marginTop: '30px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow
              borderRadius: '8px' // Optional for rounded corners
            }}
          >
            <i className="fas fa-envelope" style={{ fontSize: '35px', color: '#007bff' }}></i>
            <h3 className="mt-3">Email Us</h3>
            <p className="mt-2" style={{ fontSize: '16px' }}>
              info@cinereoustechnologies.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
