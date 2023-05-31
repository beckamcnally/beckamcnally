import personalPhoto from '../assets/profileImgs/goldFrame.png'
import './About.css'
import Project from '../components/projects/ProjectCards'

function About() {
  return ( 
<article className="container-fluid">
  <div className="container-md" id='content-container'>
    <figure className='figure'>
       <img src={personalPhoto} className='img-fluid ' alt='Myself and my dog Hiccup'/>
    </figure>
    <div className="container-md">
      <p className="container-md">Prior to embarking on my coding boot camp journey, I had been working in sales and customer service, where I honed my interpersonal skills and learned the value of providing exceptional customer experiences. However, it was during the boot camp that I discovered the true potential of my creativity. Despite not considering myself particularly artistic, I had always yearned to engage in crafts. Coding presented itself as the perfect avenue for me to unleash my creativity, allowing me to bring my ideas to life.</p> 

      <p className="container-md">I have always been an avid learner, and the coding boot camp has reinforced my deep passion for continuous learning. This career field's ever-evolving nature provides me with constant changes and challenges, which I thrive on. With each new project, there is ample room for growth and discovery, and I wholeheartedly embrace the opportunity to expand my skills and knowledge.</p>  

      <p className="container-md">One aspect of the boot camp that had a profound impact on me was the emphasis on collaboration and effective communication. By working closely with my peers, I witnessed the power of collective intelligence in problem-solving. Through open discussions and sharing of ideas, we were able to tackle complex challenges with innovative solutions. This collaborative approach has shaped my problem-solving skills and reinforced the importance of effective communication in achieving successful outcomes.</p>

      
      <p className="container-md">When I'm not engrossed in coding, you'll often find me in the great outdoors, exploring new trails with my loyal companion, Hiccup. The tranquility of nature rejuvenates me and fuels my creativity, enabling me to approach my coding projects with a fresh perspective.</p>

      <p className="container-md">With a solid foundation in sales, customer service, and now coding, I am excited to transition into a new role as a full-stack web developer. I am eager to leverage my diverse experiences, combined with my dedication to continuous learning, to contribute to the creation of innovative and user-friendly web applications..</p>

    </div>  
  </div>   
  {/* <Project/> */}
</article > 
);
};
 
export default About;