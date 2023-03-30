import './Contact.css'
import resume from '../assets/BeckaMcNally.pdf'

function Contact() {
return (

<article id="contact">
<h2 className="section-title">Contact Information</h2>
<a href={resume} download> Click here to download resume.</a>


    <ul>
        <li><a href="mailto:beckamcnally@gmail.com">beckamcnally@gmail.com</a></li>
        <li><a href="https://github.com/beckamcnally">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/becka-mcnally-21520670">LinkedIn</a></li>
    </ul>
</article> 
);
};

export default Contact;