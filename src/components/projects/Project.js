import React from 'react';

function Project({ project }) {
  const { deployedSite, title, image, description } = project;
    
  return (
    <section>              
      <figure>
        <a href={deployedSite}>
          <img src={image} className="cardImg" alt={description}/>
          <h3>{title}</h3>
          <figcaption>{description}</figcaption>
        </a>
      </figure>
    </section>
  );
}

export default Project;
