import React from 'react';
import './Home.css'
import personalPhoto from '../assets/selfpic.jpg'
import Project from '../components/projects/ProjectCards'


function Home (props) {

  return (
    <>
 
    <img src={personalPhoto} class='profilePic' alt='Myself and my dog Hiccup'/>

    </>

  )
}

export default Home;