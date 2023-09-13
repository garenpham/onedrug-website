'use client'

import { useWindowSize } from '@/utils/useWindowSize'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from '../shared/Logo/Logo'
import SocialsList from './SocialsList/SocialsList'

type Props = {}

function Footer({}: Props) {
  const pathname = usePathname()
  const isCardRemoved = pathname === '/contact' || pathname === '/about'

  const { width } = useWindowSize()
  const isMobile = (width as number) < 1024

  const style = {
    link: `text-[12px] lg:text-[14px] hover:text-primary active:scale-95 transition-transform ease-in cursor-pointer`,
  }
  return (
    <footer className='relative w-screen bg-primary_light'>
      {!isCardRemoved && (
        <div
          className={`absolute w-screen flex justify-center -top-[145px] lg:-top-[128.5px] text-white`}>
          <div
            className={`w-[337px] py-[2rem] lg:w-[1000px] lg:py-[47px] bg-gray_4  rounded-[20px] flex flex-col items-center text-center`}>
            <div
              className={`w-[300px] lg:w-[631px] mb-[32px] text-[20px] lg:text-[36px] font-[600] leading-[120%]`}>
              Get in touch with us to learn more about how OneDrug is reshaping
              the future of healthcare
            </div>

            <Link
              href='/contact'
              className={`px-[51px] py-[15px] rounded-[3px] border border-white w-fit text-[13px] lg:text-[18px] font-[500] cursor-pointer active:scale-95 transition-transform ease-in`}>
              Contact us
            </Link>
          </div>
        </div>
      )}

      <div
        className={`mx-[--root-margin] ${
          isCardRemoved ? 'pt-[111px]' : 'pt-[146px] lg:pt-[251px]'
        } pb-[48px]`}>
        <div
          className={`w-full flex items-center lg:items-start justify-between`}>
          <div className=''>
            <div className={`lg:w-[300px] lg:h-[170px] flex items-center`}>
              <Logo />
            </div>

            <div
              className={`w-[151px] lg:w-[315px] text-[12px] lg:text-[14px] leading-[120%] mt-[24px]`}>
              Welcome to OneDrug, where we&apos;re revolutionizing healthcare
              with cutting-edge smart technology solutions
            </div>
          </div>
          <div className={`lg:flex lg:gap-[61px]`}>
            <div className=''>
              <div
                className={`mb-[20px] text-[14px] lg:text-[18px] font-[500]`}>
                QUICK LINKS
              </div>
              <div className={`flex flex-col items-center gap-[16px]`}>
                <Link href='/about' className={style.link}>
                  ABOUT
                </Link>
                <Link href='/products' className={style.link}>
                  PRODUCTS
                </Link>
                <Link href='/contact' className={style.link}>
                  CONTACT
                </Link>
              </div>
            </div>

            {!isMobile && <SocialsList />}
          </div>
        </div>

        {isMobile && <SocialsList />}

        <div className='my-[32px] lg:my-[44px] w-full h-[2px] bg-gray_4' />

        <div className={`text-center text-[12px] lg:text-start lg:text-base`}>
          ©Copyright 2023 OneDrug Inc. | All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
