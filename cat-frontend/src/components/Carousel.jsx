import React from 'react';

const Carousel = ({images}) => {
  return (
    <div>
      <div className="carousel w-full">
        {images?.map((image, index) => (
          <div id="slide1" className="carousel-item relative w-full" key={index}>
            <img
              src={image}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;