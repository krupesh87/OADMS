import React from 'react'
import './vedio.css'
import ReactPlayer from 'react-player/lazy'
export default function Vedio() {
    return (
        <>
        <br/>
        
          <div className="d-flex v1 justify-content-center align-items-center mt-5">
          <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        
          top="80%"
        />
              </div>  
        </>
    )
}
