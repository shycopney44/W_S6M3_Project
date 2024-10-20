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
    // fetchPhoto()
    setApod({
      "date": "2024-10-20",
      "explanation": "Is our universe haunted?  It might look that way on this dark matter map.  The gravity of unseen dark matter is the leading explanation for why galaxies rotate so fast, why galaxies orbit clusters so fast, why gravitational lenses so strongly deflect light, and why visible matter is distributed as it is both in the local universe and on the cosmic microwave background.  The featured image from the American Museum of Natural History's Hayden Planetarium Space Show Dark Universe highlights one exa...",
      "hdurl": "https://apod.nasa.gov/apod/image/2410/DarkMatter_KipacAmnh_1200.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Dark Matter in a Simulated Universe",
      "url": "https://apod.nasa.gov/apod/image/2410/DarkMatter_KipacAmnh_960.jpg"
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
