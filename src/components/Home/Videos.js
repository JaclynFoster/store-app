import React from 'react'
import './Videos.css'

const Videos = () => {
  return (
    <div className="link-section">
      <h1>Helpful Links:</h1>
      <div className="links">
        <iframe
          controls
          src="https://www.youtube.com/embed/pdf8inDpp0k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />

        <iframe
          controls
          src="https://www.youtube.com/embed/1x29gSHza6U"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />

        <iframe
          controls
          src="https://www.youtube.com/embed/mjQ-o4iOIVA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </div>
  )
}

export default Videos

