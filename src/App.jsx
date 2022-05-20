import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import image from './images/image.png'
import Footer from './Footer'

function App() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    // Apply theme to UI and save
    window.localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('theme', theme)
  }, [theme])

  const handleChange = (value) => {
    setTheme(value)
  }

  return (
    <>
      <Navbar handleChange={handleChange} />
      <div className='hero'>
        <div className='container'>
          <h2 className='py-10'>Welcome to React Themes</h2>
          <button className='btn'>Hover Me</button>
        </div>
      </div>
      <div className='main'>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            magni? Nisi reiciendis provident cumque sunt a quia, vero fugit
            officia! Dicta, sapiente magnam dolorum soluta officia officiis
            harum iure illum! Incidunt sequi vel, error voluptatum eum
            voluptatem. Facere, optio deleniti tempora explicabo nobis
            necessitatibus accusamus quae recusandae qui laudantium sequi? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Atque cupiditate
            eius deleniti non laboriosam minus magni provident, ex unde ad
            tenetur fugiat dolorum suscipit inventore! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Veniam, fugiat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium asperiores eos a obcaecati suscipit, minus animi
            doloribus, nobis nam corrupti velit voluptates officia praesentium
            temporibus adipisci, sequi cupiditate. Ullam eaque aut quasi qui
            reiciendis dolorum ad perferendis nemo. Fugiat placeat asperiores
            repellendus fuga doloribus aperiam rerum nam eum voluptatum facilis
            dolorem magni, dolor hic facere eligendi quo tenetur, ad officiis
            voluptas maiores laboriosam soluta assumenda? Deserunt minus odio
            nihil quibusdam velit, aliquam iusto tempora ipsam repellendus quod
            veniam rem dolorum commodi delectus dignissimos rerum sapiente
            laboriosam molestiae officia optio earum. Aperiam impedit voluptatem
            sapiente maiores quibusdam officiis illum dignissimos est. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Corrupti debitis
            exercitationem rerum quo eveniet nemo corporis. Est molestiae
            quisquam laudantium. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ex aut iste explicabo officia minima, maiores
            dolorem repellat ab amet tenetur.
          </p>
          <img src={image} className='img' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
