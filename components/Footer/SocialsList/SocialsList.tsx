import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function SocialsList({}: Props) {
  return (
    <div
      className={`flex gap-[40px] h-fit items-center w-full lg:w-fit justify-center lg:justify-start mt-[3rem] lg:mt-0`}>
      <Link
        href='https://www.facebook.com/people/OneDrug/100089842672293/?mibextid=LQQJ4d'
        target='_blank'
        className='active:scale-95 transition-transform ease-in'>
        <Image
          alt='facebook'
          src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694337309/shared-assets/landing%20page/pic1_nyhdg5.svg'
          width={32}
          height={32}
        />
      </Link>
      <Link
        href='https://ca.linkedin.com/company/onedrug'
        target='_blank'
        className='active:scale-95 transition-transform ease-in'>
        <Image
          alt='linkedin'
          src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694337324/shared-assets/landing%20page/pic1_vuzyx6.svg'
          width={32}
          height={32}
        />
      </Link>
      <Link
        href='https://twitter.com/OneDrug__'
        target='_blank'
        className='active:scale-95 transition-transform ease-in'>
        <Image
          alt='X'
          src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694337338/shared-assets/landing%20page/pic1_r49zjn.svg'
          width={32}
          height={32}
        />
      </Link>
      <Link
        href='https://www.instagram.com/onedrug6/'
        target='_blank'
        className='active:scale-95 transition-transform ease-in'>
        <Image
          alt='Instagram'
          src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694337351/shared-assets/landing%20page/pic1_an1wqa.svg'
          width={32}
          height={32}
        />
      </Link>
      <Link
        href='mailto:info@onedrug.co'
        target='_blank'
        className='active:scale-95 transition-transform ease-in'>
        <Image
          alt='Email'
          src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694393111/shared-assets/landing%20page/pic1_zvrynn.svg'
          width={27}
          height={33}
        />
      </Link>
    </div>
  )
}

export default SocialsList
