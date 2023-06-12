import React from 'react'
import './Videos.css'

const Videos = () => {
  return (
    <div className="link-section">
      <h1>Helpful Links:</h1>
      <div class="links">
        <iframe
          width="350"
          height="300"
          src="https://www.youtube.com/embed/pdf8inDpp0k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <iframe
          width="350"
          height="300"
          src="https://www.youtube.com/embed/1x29gSHza6U"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <iframe
          width="350"
          height="300"
          src="https://www.youtube.com/embed/mjQ-o4iOIVA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </div>
  )
}


export default Videos
