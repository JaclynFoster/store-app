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
              Well, life as an animal farmer has been quite the wild ride, but I
              wouldn't have it any other way. Starting out, it was just me and a
              couple of chickens in my backyard. But with dedication, hard work,
              and a passion for animal welfare, I managed to turn my small
              venture into a thriving animal farming business. I made sure to
              provide my animals with a comfortable and sustainable environment,
              focusing on their well-being above all else. I sought out ways to
              continuously improve their living conditions, implementing
              innovative practices and technology to enhance their quality of
              life. Through word-of-mouth and positive customer feedback, my
              business started to grow. Along the way, I faced countless
              challenges, from extreme weather conditions to fluctuating market
              demands. However, with resilience and a touch of creativity, I
              overcame those hurdles and built a brand that people trust and
              respect. It's incredibly rewarding to know that my hard work and
              passion have contributed to the local community.
            </p>

            <p>
              Oh, Ronald the duck! He's more than just a web-footed friend to
              me. Ronald came into my life during a particularly gloomy period.
              His vibrant feathers and playful quacks brought so much joy and
              laughter. Through his gentle presence, Ronald taught me to
              appreciate the beauty of nature and to nurture a deep love and
              respect for all animals. The bond I formed with Ronald, it was
              something extraordinary. His little webbed feet waddling beside me
              as we explored the park, his quick splashes in the pond, it felt
              like a magical connection. Ronald awakened a compassion within me
              that I didn't know I had. I started feeding the ducks at the local
              pond, volunteering at animal shelters, and even advocating for
              wildlife conservation. However, life can be heartbreakingly
              unpredictable.The loss of Ronald left a profound void in my heart.
              I grieved for him, feeling the weight of his absence and the
              impact he had on my life. But from that pain, something
              extraordinary happened. Losing Ronald made me even more determined
              to make a difference in the lives of animals. Ronald is the
              embodiment of resilience and adaptability. Watching him gracefully
              glide on the water, I couldn't help but draw parallels to building
              an online business. Like Ronald, I learned to navigate through the
              murky and ever-changing digital landscape, constantly adjusting my
              strategies to stay afloat. His unwavering determination and
              ability to connect with others inspired me to cultivate meaningful
              relationships with my customers and build a community around my
              online venture. Ronald taught me that, just like a duck takes to
              water, I could embrace the challenges and ride the waves of
              entrepreneurship. So, yes, Ronald truly changed me. He opened my
              eyes to the beauty of nature, ignited my compassion for animals,
              and taught me that even the smallest creatures can make the
              biggest impact. He will forever hold a special place in my heart,
              and his legacy lives on through the work I do
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About




