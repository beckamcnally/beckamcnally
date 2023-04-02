import './Contact.css'
import resume from '../assets/BeckaMcNally.pdf'

function Contact() {
return (

<article id="contact" className='container-fluid'>

<a className='my-btn btn' href={resume} download> Download My Resume</a>
<a className='my-btn btn' href='mailto:beckamcnally@gmail.com'>Contact Me</a>
</article> 
);
};

export default Contact;