

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageSliders = () => {
  return (
    <div className="container-fluid" style={{ marginTop: '50px', padding: 0 }}>
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="2000" 
      >
        
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
              src="https://img.freepik.com/premium-photo/hyperrealistic-portrait-tattoo-enthusiast-showcasing-inked-designs_1204896-59444.jpg?ga=GA1.1.898823599.1716876559&semt=ais_hybrid"
              style={{ width: '100vw', height: '500px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 1"
            />
            <h1 className="carousel-caption" style={{ fontFamily: 'Sacramento, cursive', fontSize: '90px', marginBottom: '180px' }}>
              "Every tattoo tells a story, what's yours?"
            </h1>
          </div>

          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/young-adult-artist-tattooing-with-creativity-skill-generated-by-ai_188544-44607.jpg?t=st=1731756805~exp=1731760405~hmac=7077f3f1da92d8ffa63a961788ebdafbf2960dae5169e2cbc554586df3ecdd8e&w=1060"
              style={{ width: '100vw', height: '500px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 2"
            />
            <h1 className="carousel-caption" style={{ fontFamily: 'Sacramento, cursive', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
              "Your Beliefs, Forever in Ink"
            </h1>
          </div>

          <div className="carousel-item">
            <img
              src="https://img.freepik.com/premium-photo/photo-cyberpunk-geometric-patterns-wings-shape-chest-tattoo-black-white-only-straight-shapes_1118791-12059.jpg?ga=GA1.1.898823599.1716876559&semt=ais_hybrid"
              style={{ width: '100vw', height: '500px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 3"
            />
            <h1 className="carousel-caption" style={{ fontFamily: 'Sacramento, cursive', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
              "Let your spirit soar as high as an eagle’s wings."
            </h1>
          </div>

          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/dark-tattooed-hand-designs-spooky-halloween-decoration-generated-by-ai_188544-45321.jpg?ga=GA1.1.898823599.1716876559"
              style={{ width: '100vw', height: '500px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 4"
            />
            <h1 className="carousel-caption" style={{ fontFamily: 'Sacramento, cursive', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
              "Embrace the Darkness: Tattoos that Haunt"
            </h1>
          </div>

          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24941.jpg?ga=GA1.1.898823599.1716876559"
              style={{ width: '100vw', height: '500px', borderRadius: '0', opacity: '0.85' }}
              alt="Image 5"
            />
            <h1 className="carousel-caption" style={{ fontFamily: 'Sacramento, cursive', fontSize: '90px', marginBottom: '180px', textAlign: 'center' }}>
              "Crafting Timeless Art"
            </h1>
          </div>
        </div>

        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>

        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>

      </div>
    </div>
  );
};

export default ImageSliders;
