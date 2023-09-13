import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

type Props = {
  src: string
  title: string
  description: string
  email: string
}

function Product({ src, title, description, email }: Props) {
  return (
    <div className='flex flex-col lg:flex-row gap-[16px] lg:gap-[20px] items-center lg:items-start'>
      <div className={`h-[184px] w-[233px] lg:h-[380px] lg:w-[265px]`}>
        <Image
          alt='Product Image'
          src={src}
          height={0}
          width={0}
          sizes='100%'
          className='object-cover w-full h-full rounded-[12px]'
        />
      </div>
      <div className='flex flex-col items-center text-center'>
        <div
          className={`w-[206px] lg:w-[277px] text-gray lg:text-[20px] font-[500] lg:mt-[36px] leading-[120%]`}>
          {title}
        </div>
        <div
          className={`my-[12px] lg:my-[20px] w-[227px] lg:w-[276px] text-[13px] lg:text-base text-gray_8`}>
          {description}
        </div>

        <Link
          href={`mailto:${email}`}
          target='_blank'
          className={`text-primary text-[13px] lg:text-[18px] font-[500] flex items-center gap-[4px] hover:text-white active:scale-95 transition-transform ease-in`}>
          Learn more <GoArrowRight className='text-[16px] lg:text-[24px]' />
        </Link>
      </div>
    </div>
  )
}

export default Product
