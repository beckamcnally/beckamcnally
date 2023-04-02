import React from 'react';

function Project({ project }) {
  const { deployedSite, title, image, description } = project;
    
  return (
    <section className='container-fluid'>              
      <figure>
        <a href={deployedSite} className="imgContainer">
          <img src={image} className="cardImg" alt={description}/>
          <h3 className="projectTitle">{title}</h3>
          </a>
          <figcaption>{description}</figcaption>
        
      </figure>
    </section>
  );
}

export default Project;
