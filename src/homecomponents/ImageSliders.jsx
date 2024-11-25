import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageSliders = () => {
  useEffect(() => {
   
    window.$('#myCarousel').carousel({
      interval: 3000, 
      ride: 'carousel', 
    });
  }, []);

  return (
    <div className="container-fluid" style={{ marginTop: '50px', padding: 0 }}>
      <div
        id="myCarousel"
        className="carousel slide"
        style={{ position: 'relative' }}
      >
      
        <div
          className="fixed-heading"
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            zIndex: '10',
            textAlign: 'center',
            // fontFamily: 'Sacramento, cursive',

            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '3rem',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
          }}
        >
          Every Tattoo Tells a Story, What's Yours?

          <p
    style={{
      fontSize: '22px',
      marginTop: '20px',
      fontWeight: '400',
      color: 'white',
      fontFamily: 'Times New Roman, Times, serif',
      // textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
    }}
  >
  Tattoos are more than ink on skin; they are vivid expressions of who we are and the journeys we've taken. Each design carries a unique meaning, a memory, or a message that resonates deeply within us.
  </p>
          
        </div>
 







        <div
          className="button-container"
          style={{
            position: 'absolute',
            top: '75%', 
            left: '53%',
            transform: 'translate(-50%, -50%)',
            zIndex: '10',
            display: 'flex',
            gap: '20px', 
          }}
        >         
<button
  className="btn1"
  style={{
    padding: '10px 20px',
    backgroundColor: '#ff6b6b',
    border: 'none',
    color: 'white',
    borderRadius: '5px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    transform: 'scale(1)', 
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#ff4c4c';
    e.target.style.transform = 'scale(1.1)'; 
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '#ff6b6b';
    e.target.style.transform = 'scale(1)'; 
  }}
>
  Book Now
</button>

<button
  className="btn2"
  style={{
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    border: 'none',
    color: 'white',
    borderRadius: '5px',
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    transform: 'scale(1)', 
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#3e8e41';
    e.target.style.transform = 'scale(1.1)'; 
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '#4caf50';
    e.target.style.transform = 'scale(1)'; 
  }}
>
  About Our Studio
</button>
        </div>




  
        
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>

      
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              // src="https://img.freepik.com/premium-photo/hyperrealistic-portrait-tattoo-enthusiast-showcasing-inked-designs_1204896-59444.jpg?ga=GA1.1.898823599.1716876559&semt=ais_hybrid"
              src="https://img.freepik.com/free-photo/young-adult-artist-tattooing-with-creativity-skill-generated-by-ai_188544-44607.jpg?t=st=1731756805~exp=1731760405~hmac=7077f3f1da92d8ffa63a961788ebdafbf2960dae5169e2cbc554586df3ecdd8e&w=1060"

              // src='https://img.freepik.com/free-photo/talented-girl-is-sketching-digital-tablet-while-sitting-her-cozy-studio_613910-11488.jpg?ga=GA1.1.898823599.1716876559&semt=ais_hybrid'
              // src="https://th.bing.com/th/id/OIP.alkEJhEYPc3eXFJoyjNPkgHaHa?w=207&h=206&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              style={{ width: '100vw', height: '500px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 1"
            />


            {/* <h1 className="carousel-caption" style={{ fontFamily: 'Sacramento, cursive', fontSize: '90px', marginBottom: '180px' }}>
//               "Every tattoo tells a story, what's yours?"
//             </h1> */}
          </div>
          <div className="carousel-item">
            <img
              // src="https://img.freepik.com/free-photo/young-adult-artist-tattooing-with-creativity-skill-generated-by-ai_188544-44607.jpg?t=st=1731756805~exp=1731760405~hmac=7077f3f1da92d8ffa63a961788ebdafbf2960dae5169e2cbc554586df3ecdd8e&w=1060"
              src='https://lh3.googleusercontent.com/6UKI7NSZBhTQavaoiqi7ZFZgHyHh7VtjfqUzCAefcyKnVfFoLocsOKuiccuLjHcUc6AybOVuWlQiGQy3yZ9bXEI6G38KNyHwVlQXR22Tq5QlgrtCzCi-UnzI4pNI79dCK8Zl4gfDZzgELWQ9tUSTkRZ5A2uJ'

              style={{ width: '100vw', height: '500px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 2"
            />
            {/* <h1 className="carousel-caption" style={{ fontFamily: 'Sacramento, cursive', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
//               "Your Beliefs, Forever in Ink"
//             </h1> */}
          </div>
          <div className="carousel-item">
            <img
             
             src='https://cdn.prod.website-files.com/63627969e697b61273d5987b/638f845e36558e8bfe68e916_thumbnail-5-blog-tattooist-template-p-500.jpg'
             // src="https://img.freepik.com/premium-photo/photo-cyberpunk-geometric-patterns-wings-shape-chest-tattoo-black-white-only-straight-shapes_1118791-12059.jpg?ga=GA1.1.898823599.1716876559&semt=ais_hybrid"
              style={{ width: '100vw', height: '500px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 3"
            />


            {/* <h1 className="carousel-caption" style={{ fontFamily: 'Sacramento, cursive', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
//               "Let your spirit soar as high as an eagle’s wings."
//             </h1> */}


          </div>
          <div className="carousel-item">
            <img

            src='https://cdn.prod.website-files.com/63627969e697b61273d5987b/638fa1d1c5808530eda529a0_image-3-gallery-portfolio-tattooist-template-p-800.jpg'
              // src="https://img.freepik.com/free-photo/dark-tattooed-hand-designs-spooky-halloween-decoration-generated-by-ai_188544-45321.jpg?ga=GA1.1.898823599.1716876559"
              style={{ width: '100vw', height: '500px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 4"
            />

          {/* <h1 className="carousel-caption" style={{ fontFamily: 'Sacramento, cursive', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
//               "Embrace the Darkness: Tattoos that Haunt"
//             </h1> */}



          </div>
          <div className="carousel-item">
            <img
              // src="https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24941.jpg?ga=GA1.1.898823599.1716876559"
            //  src="https://img.freepik.com/free-photo/hands-playing-rock-paper-scissors_53876-148190.jpg?ga=GA1.1.898823599.1716876559&semt=ais_hybrid"
            src="https://cdn.prod.website-files.com/63627969e697b61273d5987b/638f8402a8b011d274d6068d_thumbnail-2-blog-tattooist-template-p-500.jpg" 


              style={{ width: '100vw', height: '500px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 5"
            />


             {/* <h1 className="carousel-caption" style={{ fontFamily: 'Sacramento, cursive', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
//               "Crafting Timeless Art"
//             </h1> */}

          </div>
        </div>

        
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
};

export default ImageSliders; 


