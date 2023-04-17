import React from 'react';
import "./Interview.css"

import { useEffect } from 'react'
import {
  electronData,
  getSec,
} from './electron-data';



function Electron () {

  useEffect(() => {
    console.count("useEffect Electron Component")
  }, [])

  function videoFrame (frame) {

    function createTimeline (timing) {
      const timeArr = Object.keys(timing)
      return timeArr.map((time) => {
        // const hrefLink = `${frame.link}&start=${getSec(time)}`

        return (
          <li key={time}>
            <a href={`${frame.link}?rel=0&autolay=1&start=${getSec(time)}`} target={frame.frameName}>{time}</a> {timing[time]}
          </li>
        )
      })
    }

    return (
      <>
        {/*// <section className="interview__frame-container">*/}
        <div className="interview__iframe-video">
          <iframe width="560" height="315"
            src={frame.link}
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            name={frame.frameName}>
          </iframe>
          <h3>{frame.title}</h3>
        </div>
        <div className='interview__frame-about'>
          <h4>Исходники тут:
            <a href={frame.gitLink}
               target='_blank'
               rel="noreferrer"> {frame.gitLink}</a>
            <br/>
            Ссылка на YouTube:
            <a href={frame.linkYouTube}
               target='_blank'
               rel="noreferrer"> {frame.linkYouTube}</a>
            <br/>
             Timeline:
              <ol className='interview__frame-about_wrap'>
                {frame?.timing ? createTimeline(frame.timing) : ""}
              </ol>
          </h4>
        </div>
        {/*// </section>*/}
      </>


    )
  }

  return (
    <>
      <h1>Видео Интервью</h1>
      <main className='interview__iframes'>
        {electronData.map(item => {
          return (
            <section className="interview__frame-container" key={item}>
              {videoFrame(item)}
            </section>
          )
          })
        }
      </main>
    </>
  )
}

export default Electron;
