import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageSliders = () => {
  return (
    <div className="container-fluid" style={{ marginTop: '100px', padding: 0 }}>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        
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
              src="https://img.freepik.com/free-photo/loving-caucasian-couple-holding-hands-close-up-wooden-background-romantic-love-relation-tender-touching_155003-36199.jpg?ga=GA1.1.898823599.1716876559"
              style={{ width: '100vw', height: '500px', borderRadius: '0' }}
              alt="Image 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/premium-photo/high-angle-view-bottles-table_1048944-18420738.jpg?ga=GA1.1.898823599.1716876559"
              style={{ width: '100vw', height: '500px', borderRadius: '0' }}
              alt="Image 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/pretty-male-vacation-people-guy_1153-2231.jpg?ga=GA1.1.898823599.1716876559"
              style={{ width: '100vw', height: '500px', borderRadius: '0' }}
              alt="Image 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/dark-tattooed-hand-designs-spooky-halloween-decoration-generated-by-ai_188544-45321.jpg?ga=GA1.1.898823599.1716876559"
              style={{ width: '100vw', height: '500px', borderRadius: '0' }}
              alt="Image 4"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/man-doing-tattoo-tattoo-salon_1157-24941.jpg?ga=GA1.1.898823599.1716876559"
              style={{ width: '100vw', height: '500px', borderRadius: '0' }}
              alt="Image 5"
            />
          </div>
        </div>

        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">
            
          </span>
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
