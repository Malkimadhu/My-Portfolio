import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import 'animate.css';


const Home = () => {
  return (
    <div>
      <div className='home'>

      </div>

    
    <section className="section animate__animated animate__fadeIn animate__slower" id='home'>
      
        <div className="home__container container grid">
          
            <div className="home__content grid">
              
                <Social />

                {/* <div className="home__img"></div> */}

                <Data />
            </div>
            <ScrollDown />
        </div>
    </section>
    </div>
  )
}


export default Home
