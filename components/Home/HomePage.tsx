import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import OurProducts from './OurProducts/OurProducts'
import Welcome from './Welcome/Welcome'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <main>
      <Welcome />
      <AboutUs />
      <OurProducts />
    </main>
  )
}

export default HomePage
