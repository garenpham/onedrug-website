'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  className?: string
}

const Logo = ({ className }: Props) => {
  return (
    <>
      <Link
        href='/'
        className={`active:scale-95 transition-transform ease-in h-[110px] w-[148px] flex lg:hidden items-center justify-center ${className}`}>
        <Image
          alt='OneDrug Logo'
          src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694305454/shared-assets/landing%20page/4f29499dfdd8f4879a0b407183b6ef20_n6hvjz.png'
          height={0}
          width={0}
          sizes='100%'
          className={`w-[170%] h-[170%] object-cover`}
        />
      </Link>

      <Link
        href='/'
        className={`hidden lg:flex active:scale-95 transition-transform ease-in ${className}`}>
        <Image
          alt='OneDrug Logo'
          src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694305454/shared-assets/landing%20page/4f29499dfdd8f4879a0b407183b6ef20_n6hvjz.png'
          height={300}
          width={300}
        />
      </Link>
    </>
  )
}

export default Logo
