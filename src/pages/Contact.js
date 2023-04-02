import './Contact.css'
import resume from '../assets/BeckaMcNally.pdf'

function Contact() {
return (

<article id="contact" className='container-fluid'>
<h2 className='h2'>Contact Information</h2>
<a className='my-btn' href={resume} download> Download My Resume</a>
<a className='my-btn' href='mailto:beckamcnally@gmail.com'>Contact Me</a>
</article> 
);
};

export default Contact;