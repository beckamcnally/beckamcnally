import React, { useState } from 'react';

function Project({ project }) {
  const { deployedSite, title, image, description, githubRepo } = project;

  const [activeIndex, setActiveIndex] = useState(0)
  return (
 
      <figure  className="imgContainer d-flex m-2">
        <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        {image.map((image, idx) => (
          <button
            type="button"
            key={idx}
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={idx}
            className={idx === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {image.map((image, idx) => (
          <div className={`carousel-item ${idx === activeIndex ? "active" : ""}`} key={idx}>
            <img src={image} className="d-block w-100" alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        onClick={() => setActiveIndex(activeIndex === 0 ? image.length - 1 : activeIndex - 1)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        onClick={() => setActiveIndex(activeIndex === image.length - 1 ? 0 : activeIndex + 1)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

          
          <a href={deployedSite}><h3 className="projectTitle">{title}</h3></a>
          <figcaption>{description}</figcaption>
        
      </figure>
  );
}

export default Project;
