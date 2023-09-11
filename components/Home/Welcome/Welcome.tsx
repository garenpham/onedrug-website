import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowDown } from 'react-icons/hi'
import Gallery from './Gallery/Gallery'

type Props = {}

const Welcome = (props: Props) => {
  return (
    <section className='px-[--root-margin] py-[100px] flex items-center justify-between relative'>
      <div>
        <div
          className={`px-[10px] py-[17px] w-fit text-primary bg-primary_light text-[14px] font-[500] rounded-[5px] leading-[120%]`}>
          WORKING TOGETHER WITH MEDICINE
        </div>
        <div
          className={`w-[459px] mt-[12px] mb-[20px] text-[36px] font-[600] `}>
          Enabling Worldwide Access to Personalized Precision{' '}
          <span className={`text-primary`}>Medicine</span>
        </div>
        <div
          className={`mb-[32px] w-[414px] text-gray_1 text-[18px] leading-[120%]`}>
          Welcome to OneDrug, where we&apos;re revolutionizing healthcare with
          cutting-edge smart technology solutions
        </div>
      </div>

      <Gallery/>
      <Link
        href='/#about'
        className={`absolute bottom-0 left-[50%] h-[40px] w-[24px] rounded-[100px] bg-primary_light text-primary flex items-center justify-center border border-transparent hover:border-primary cursor-pointer active:scale-95 transition-transform ease-in`}>
        <HiArrowDown />
      </Link>
    </section>
  )
}

export default Welcome
