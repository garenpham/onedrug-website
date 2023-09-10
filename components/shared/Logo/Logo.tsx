import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {

}

const Logo = ({}: Props) => {
  return (
    <Link href='/' className={`active:scale-95 transition-transform ease-in`}>
      <Image
        alt='OneDrug Logo'
        src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694305454/shared-assets/landing%20page/4f29499dfdd8f4879a0b407183b6ef20_n6hvjz.png'
        height={300}
        width={300}
      />
    </Link>
  )
}

export default Logo
