import Image from 'next/image'
import React from 'react'

type Props = {
  height: number
  width: number
}

const Logo = ({ height, width }: Props) => {
  return (
    <Image
      alt='OneDrug Logo'
      src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694305454/shared-assets/landing%20page/4f29499dfdd8f4879a0b407183b6ef20_n6hvjz.png'
      height={height}
      width={width}
    />
  )
}

export default Logo
