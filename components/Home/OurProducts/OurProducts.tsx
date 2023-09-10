import Image from 'next/image'
import React from 'react'
import Products from './Products/Products'

type Props = {}

function OurProducts({}: Props) {
  return (
    <div className='pt-[100px] pb-[229px] flex flex-col items-center'>
      <div className={`font-[500] text-secondary`}>OUR PRODUCTS</div>
      <div
        className={`my-[12px] font-[600] text-[24px] w-[334px] text-center leading-[120%]`}>
        A Startup Focused on Advancing Precision Medicine
      </div>
      <Image
        alt='icon'
        src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694321842/shared-assets/landing%20page/pic1_gecdjz.svg'
        height={9}
        width={93}
        className='mb-[38px]'
      />
      <Products />
    </div>
  )
}

export default OurProducts
