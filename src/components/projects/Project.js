import React from 'react';

function Project({ project }) {
  const { deployedSite, title, image, description } = project;
    
  return (
    <section>              
      <figure>
        <a href={deployedSite} id="imgContainer">
          <img src={image} className="cardImg" alt={description}/>
          <h3>{title}</h3>
          </a>
          <figcaption>{description}</figcaption>
        
      </figure>
    </section>
  );
}

export default Project;
