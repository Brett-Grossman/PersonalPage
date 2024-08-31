import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import shipShowroomVideo from './videos/ShipShowroom.mp4';
import realGhostTorVideo from './videos/RealGhostTor.mp4';
import face from './Images/face.jpg';

function App() {

  const appStyle = {
    fontFamily: "'Times New Roman', Times, serif",
    
    
  };

  return (
    <div style={{
      backgroundColor: 'orange',
      paddingBottom: '40px',
      ...appStyle
      }}>
      <div className='container shadow-lg border border-dark' style={{
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: '1px',
        ...appStyle
        }}>
          <div className='header' style={{appStyle}}>
            <h1>Welcome to my page!</h1>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <p className='fs-2'>Who am I?</p>
            <img src={face}
            alt='headshot'
            width="200px"
            height="200px"
            className='shadow-lg mb-3'
            />
            <p><strong>Full Stack Developer</strong> Javascript | Java | Python | HTML | CSS | Bootstrap</p>
            <p>Please feel free to email me at grossmanbrettj@gmail.com</p>
            <a href='https://www.linkedin.com/in/brettjgrossman/' target="_blank" rel="noopener noreferrer">My Linkedin page</a>
            <a href='https://github.com/Brett-Grossman' target="_blank" rel="noopener noreferrer">My github</a>
            <p className='text-center col-lg-7'>
              My name is Brett Grossman and I was born and raised in the northwest suburbs of Chicago, Illinois.
              I graduated with a bachelor of arts degree for enviornmental sciences from Lake Forest College, 
              but I always had a love for technology. Instead of pursuing a job related to my degree I instead attended an
              online coding bootcamp from Colorado Technical Institute where I got my certification in full-stack web development.
              Although I learned Python, Java, and Javascript I feel most comfortable using JS and MERN subcomponents.
              In my free time I mostly on my computer playing games or playing with my 11 year-old silver lab named Cali.

            </p>
          </div>
          <div>
            <p className='fs-2'>Here are some projects I have made!</p>
              <a href='https://github.com/Brett-Grossman/Real-Ghosts-Tor' target="_blank" rel="noopener noreferrer">Real-Ghost-Tor Github</a>
                <p className='col-md-5'>
                  This group project was a part of my final show of skill for the Bootcamp I was in. It hosts a ton of features
                  that took some to time to piece together that would resemble a real home listing website. 
                  Two of the biggest features are the filters box that allows specified search results of a data table and
                  the ability to have a personal account with its own suite of features as well.
                </p>

                  <video width="600" controls>
                    <source src={realGhostTorVideo} type="video/mp4" />
                  </video>

          </div>
          <div>
            <a href='https://github.com/Brett-Grossman/ShipShowRoom' target="_blank" rel="noopener noreferrer">Ship Showroom Github</a>
              <p className='col-md-5'>
                This Javascript application was used as an anonymous forum that allowed anyone to make posts about 
                their favorite spaceships from the game StarCitizen. it featured full CRUD capabilities and image link 
                recognition.
              </p>
              <video width="600" controls>
                <source src={shipShowroomVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
      </div>
    </div>
  )
}

export default App;