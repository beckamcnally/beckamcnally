import './Contact.css'
import resume from '../assets/Becka_McNally.pdf'

function Contact() {
return (

<article id="contact" className='container-fluid d-grid gap-2 col-6 mx-auto'>

<a className='my-btn btn btn-outline-secondary' href={resume} download> Download My Resume</a>
<a className='my-btn btn btn-outline-secondary' href='mailto:beckamcnally@gmail.com'>Contact Me</a>

</article> 
);
};

export default Contact;