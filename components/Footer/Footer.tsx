'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from '../shared/Logo/Logo'

type Props = {}

const FooterMobile = () => {
  return <footer></footer>
}

function Footer({}: Props) {
  const pathname = usePathname()

  if (pathname === '/contact') {
    return <FooterMobile />
  }

  const style = {
    link: `text-[14px] hover:text-primary active:scale-95 transition-transform ease-in cursor-pointer`,
  }
  return (
    <footer className='relative w-screen bg-footer_bg'>
      <div className={`absolute w-screen flex justify-center -top-[128.5px]`}>
        <div
          className={`px-[254px] py-[47px] bg-primary text-white rounded-[20px] flex flex-col items-center text-center`}>
          <div
            className={`w-[631px] mb-[32px] text-[36px] font-[600] leading-[120%]`}>
            Get in touch with us to learn more about how OneDrug is reshaping
            the future of healthcare
          </div>

          <Link
            href='/contact'
            className={`px-[51px] py-[15px] rounded-[3px] border border-white w-fit text-[18px] font-[500] cursor-pointer active:scale-95 transition-transform ease-in`}>
            Contact us
          </Link>
        </div>
      </div>
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
    </footer>
  )
}

export default Footer
