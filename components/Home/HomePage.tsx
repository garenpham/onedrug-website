import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import Welcome from './Welcome/Welcome'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <>
      <Welcome />
      <AboutUs />
    </>
  )
}

export default HomePage
