'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from '../shared/Logo/Logo'

type Props = {}

function Footer({}: Props) {
  const pathname = usePathname()

  const isCardRemoved = pathname === '/contact' || pathname === '/about'

  const style = {
    link: `text-[14px] hover:text-primary active:scale-95 transition-transform ease-in cursor-pointer`,
  }
  return (
    <footer className='relative w-screen bg-primary_light'>
      {!isCardRemoved && (
        <div
          className={`absolute w-screen flex justify-center -top-[128.5px] text-white`}>
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
          isCardRemoved ? 'pt-[111px]' : 'pt-[251px]'
        } pb-[48px]`}>
        <div className={`w-full flex justify-between`}>
          <div className=''>
            <div
              className={`w-[300px] h-[150px] flex items-center justify-center`}>
              <Logo />
            </div>
            <div className={`w-[315px] text-[14px] leading-[120%] mt-[24px]`}>
              Welcome to OneDrug, where we&apos;re revolutionizing healthcare
              with cutting-edge smart technology solutions
            </div>
          </div>
          <div className={`flex gap-[61px]`}>
            <div className=''>
              <div className={`mb-[20px] text-[18px] font-[500]`}>
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

            <div className={`flex gap-[40px] h-fit items-center`}>
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
          </div>
        </div>

        <div className='my-[44px] w-full h-[2px] bg-gray_4' />

        <div className={``}>
          ©Copyright 2023 OneDrug Inc. | All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
