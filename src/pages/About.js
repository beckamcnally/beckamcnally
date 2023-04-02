import personalPhoto from '../assets/profileImgs/goldFrame.png'
import './About.css'

function About() {
  return ( 
<article className="container-fluid">
   <div className="container-fluid">
     <figure className='figure'>
       <img src={personalPhoto} className='img-fluid ' alt='Myself and my dog Hiccup'/>
      </figure>
   
      <p>As a recent graduate of a coding boot camp, I am a self-motivated learner with a passion for technology and a background in customer service. Despite not having a traditional tech background, I am eager to continue learning and growing as a full stack web developer.</p> 
      <p>When I'm not coding, I'm usually outdoors with my furry companion, Hiccup - my dog is my constant source of inspiration and motivation. I love hiking, exploring new trails, and finding new adventures to share with my pup. In fact, he even has his own computer chair at my desk!</p>  
      <p>Through my varied work experiences and my dedication to learning new skills, I have developed a strong work ethic and a knack for problem-solving. I am excited to bring these skills to a new role as a full stack web developer, where I can continue to learn and grow while building innovative and user-friendly web applications.</p>
     </div>   
</article > 
);
};
 
export default About;