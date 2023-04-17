import React from 'react';
import './Video.css';


function Video () {
  return (
    <>
      <h1>Видео уроки</h1>
      <div className='video__iframes'>
        <div className="video__iframe">
          <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/Fhu5cu864ag"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
          <h3>6 State Mistakes Every Junior React Developer Makes</h3>
        </div>
        <div className="video__iframe">
          <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/-4fyyyQjsz8"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
          <h3>How to Improve Performance in React with Code Splitting</h3>
        </div>
        <div className="video__iframe">
          <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/hQRPsKzpo34"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
          <h3>Введение в React Hooks: useState</h3>
        </div>
        <div className="video__iframe">
          <iframe width="560" height="315"
                  src="https://www.youtube.com/embed/R8rmfD9Y5-c"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
          <h3>8 Must Know JavaScript Array Methods</h3>
        </div>
      </div>
    </>

  )
}

export default Video;