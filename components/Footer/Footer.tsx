import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../shared/Logo/Logo'

type Props = {}

function Footer({}: Props) {
  const style = {
    link: `text-[14px] hover:text-primary active:scale-95 transition-transform ease-in cursor-pointer`,
  }
  return (
    <div className='relative w-screen bg-footer_bg'>
      <div className={`mx-[--root-margin] pt-[251px] pb-[48px]`}>
        <div className={`w-full flex justify-between`}>
          <div>
            <div
              className={`w-[88px] h-[65px] bg-white flex items-center justify-center`}>
              <Logo size='w-[135px] h-[115px]' />
            </div>
            <div
              className={`w-[315px] text-gray_5 text-[14px] leading-[120%] mt-[16px]`}>
              Welcome to OneDrug, where we&apos;re revolutionizing healthcare
              with cutting-edge smart technology solutions
            </div>
          </div>
          <div className={`flex gap-[61px]`}>
            <div className='text-gray'>
              <div className={`mb-[20px] text-[18px] font-[500]`}>
                QUICK LINKS
              </div>
              <div className={`flex flex-col items-center gap-[16px]`}>
                <div className={style.link}>ABOUT</div>
                <div className={style.link}>PRODUCTS</div>
                <div className={style.link}>CONTACT</div>
                <div className={style.link}>PRIVACY POLICY</div>
                <div className={style.link}>T&CS</div>
              </div>
            </div>

            <div className={`flex gap-[40px]`}>
              <Link
                href='#'
                className='active:scale-95 transition-transform ease-in'>
                <Image
                  alt='socials'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694326986/shared-assets/landing%20page/pic1_tqdnpy.svg'
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href='#'
                className='active:scale-95 transition-transform ease-in'>
                <Image
                  alt='socials'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694327000/shared-assets/landing%20page/pic1_j7dp5z.svg'
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href='#'
                className='active:scale-95 transition-transform ease-in'>
                <Image
                  alt='socials'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694327023/shared-assets/landing%20page/pic1_v7kueh.svg'
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href='#'
                className='active:scale-95 transition-transform ease-in'>
                <Image
                  alt='socials'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694327038/shared-assets/landing%20page/pic1_qzexnf.svg'
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className='my-[44px] w-full h-[2px] bg-gray_4' />

        <div className={`text-white`}>
          ©Copyright 2023 OneDrug Inc | All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
