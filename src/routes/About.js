import React from 'react'
import Layout from '../components/Layout/Layout'
import family from '../images/familypic.jpeg'
import ronald from '../images/ronald.jpeg'
import scenery from '../images/lakeLife.jpeg'
import hardwork from '../images/hardwork.jpeg'
import '../components/About/About.css'

const About = () => {
  return (
    <Layout>
      <div className="about-flex">
        <div className="picture-section">
          <div className="picture-align-content">
            <img className="about-pic" src={family} />
            <label className="about-label">
              It all started with a family...
            </label>
          </div>
          <div className="picture-align-content">
            <img className="about-pic" src={hardwork} />
            <label className="about-label">A little hardwork...</label>
          </div>
          <div className="picture-align-content">
            <img className="about-pic" src={ronald} />
            <label className="about-label">
              Ronald touching our hearts....
            </label>
          </div>
          <div className="picture-align-content">
            <img className="about-pic" src={scenery} />
            <label className="about-label">And a change of scenery...</label>
          </div>
        </div>

        <div className="paragraph-section">
          <h1 className="h1About">A Little About The Farm...</h1>
          <div className="pGrid">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
              vel elit scelerisque mauris pellentesque pulvinar pellentesque.
              Aliquam ut porttitor leo a diam sollicitudin. Non diam phasellus
              vestibulum lorem sed. Sit amet aliquam id diam maecenas ultricies
              mi eget mauris. Viverra orci sagittis eu volutpat odio. Cursus
              mattis molestie a iaculis at erat pellentesque. Nulla facilisi
              morbi tempus iaculis urna id volutpat. Maecenas sed enim ut sem
              viverra aliquet eget. Id donec ultrices tincidunt arcu non sodales
              neque sodales ut. Nullam eget felis eget nunc lobortis mattis
              aliquam faucibus purus. Volutpat sed cras ornare arcu dui vivamus
              arcu. Enim nec dui nunc mattis enim ut. Sed viverra tellus in hac
              habitasse platea dictumst vestibulum. Blandit libero volutpat sed
              cras ornare. Leo vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim. Interdum velit euismod in pellentesque massa
              placerat duis. Quis blandit turpis cursus in hac habitasse platea
              dictumst. Aliquet bibendum enim facilisis gravida neque. Elit
              pellentesque habitant morbi tristique senectus et netus et.
              Euismod lacinia at quis risus sed vulputate odio. Nunc consequat
              interdum varius sit amet mattis vulputate. Id consectetur purus ut
              faucibus pulvinar. Faucibus turpis in eu mi bibendum neque
              egestas. Vitae nunc sed velit dignissim sodales ut. Et ultrices
              neque ornare aenean euismod elementum. Duis ut diam quam nulla
              porttitor. Ornare arcu dui vivamus arcu felis bibendum. Dolor sit
              amet consectetur adipiscing elit. Elementum sagittis vitae et leo.
              Sit amet consectetur adipiscing elit duis. Quam id leo in vitae
              turpis massa. Morbi tristique senectus et netus. Convallis
              convallis tellus id interdum velit. A iaculis at erat pellentesque
              adipiscing commodo. Morbi tristique senectus et netus et. Magna
              eget est lorem ipsum dolor sit. Sit amet facilisis magna etiam
              tempor orci eu. Nisl vel pretium lectus quam id leo in vitae.
              Sapien eget mi proin sed libero enim sed faucibus. Magna sit amet
              purus gravida quis blandit turpis cursus. Consectetur adipiscing
              elit pellentesque habitant morbi tristique. Morbi blandit cursus
              risus at. Nec feugiat nisl pretium fusce id velit. Nunc sed
              blandit libero volutpat sed. Habitasse platea dictumst vestibulum
              rhoncus.{' '}
            </p>

            <p>
              Imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
              Turpis egestas sed tempus urna et pharetra pharetra. Egestas sed
              tempus urna et pharetra pharetra massa. Turpis massa tincidunt dui
              ut ornare lectus sit. Vivamus arcu felis bibendum ut tristique et
              egestas quis. Et malesuada fames ac turpis egestas maecenas. In
              massa tempor nec feugiat nisl pretium fusce. Consectetur
              adipiscing elit ut aliquam purus sit amet luctus. Egestas tellus
              rutrum tellus pellentesque eu tincidunt tortor. Egestas maecenas
              pharetra convallis posuere morbi leo urna. Faucibus ornare
              suspendisse sed nisi lacus. Phasellus vestibulum lorem sed risus
              ultricies tristique nulla aliquet. Ligula ullamcorper malesuada
              proin libero nunc consequat interdum. Lobortis feugiat vivamus at
              augue eget arcu dictum varius. Maecenas pharetra convallis posuere
              morbi leo urna molestie at. Mi in nulla posuere sollicitudin
              aliquam ultrices. Pharetra magna ac placerat vestibulum lectus
              mauris ultrices eros in. Rutrum tellus pellentesque eu tincidunt
              tortor aliquam. Risus nullam eget felis eget nunc lobortis. Vel
              risus commodo viverra maecenas accumsan. Ut diam quam nulla
              porttitor massa id. Mattis nunc sed blandit libero volutpat. A
              iaculis at erat pellentesque. Aliquet sagittis id consectetur
              purus. Et tortor at risus viverra adipiscing at in tellus. Sed
              augue lacus viverra vitae congue. Tristique senectus et netus et
              malesuada fames. Bibendum at varius vel pharetra. Lorem ipsum
              dolor sit amet consectetur adipiscing elit ut. Molestie nunc non
              blandit massa enim nec dui nunc.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About



