import Image from 'next/image'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

type Props = {
  src: string
  title: string
  description: string
}

function Product({ src, title, description }: Props) {
  return (
    <div className='flex gap-[20px]'>
      <div className={`h-[380px] w-[265px]`}>
        <Image
          alt='Product Image'
          src={src}
          height={0}
          width={0}
          sizes='100%'
          className='object-cover w-full h-full rounded-[12px]'
        />
      </div>
      <div>
        <div
          className={`w-[277px] text-gray text-[20px] font-[500] mt-[36px] leading-[120%]`}>
          {title}
        </div>
        <div className={`my-[20px] w-[276px] text-gray_8`}>{description}</div>

        <button
          className={`text-primary text-[18px] font-[500] flex items-center gap-[4px] hover:text-white active:scale-95 transition-transform ease-in`}>
          Learn more <GoArrowRight className='text-[24px]' />
        </button>
      </div>
    </div>
  )
}

export default Product
