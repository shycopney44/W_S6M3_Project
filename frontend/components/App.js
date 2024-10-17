import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    //fetchPhoto()
    setApod({
      "date": "2024-10-17",
      "explanation": "NASA's Europa Clipper is now headed toward an ocean world beyond Earth. The large spacecraft is tucked into the payload fairing atop the Falcon Heavy rocket in this photo, taken at Kennedy Space Center the day before the mission's successful October 14 launch. Europa Clipper's interplanetary voyage will first take it to Mars, then back to Earth, and then on to Jupiter on gravity assist trajectories that will allow it to enter orbit around Jupiter in April 2030. Once orbiting Jupiter, the spacecr...",
      "hdurl": "https://apod.nasa.gov/apod/image/2410/EuropaComet_cooper3.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Clipper and the Comet",
      "url": "https://apod.nasa.gov/apod/image/2410/EuropaComet_cooper3.jpg"
    })
  }, [])

  if (!apod) return 'Fetching Photo of the Day...'
 return (
   <section>
    <Card
      title={apod.title}
      text={apod.explanation}
      imageURL={apod.url}
      date={apod.date}
      />
   </section>
  )
}

export default App
