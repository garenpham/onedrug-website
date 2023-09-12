'use client'

import Logo from '@/components/shared/Logo/Logo'
import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav'

type Props = {}

function MobileHeader({}: Props) {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const setCloseFn = () => {
    setIsOpen(false)
  }

  const style = {
    icon: `active:scale-95 transition-transform ease-in`,
  }
  return (
    <header className='block lg:hidden mt-[14px] w-screen'>
      <div className={`flex px-[20px] items-center justify-between w-full`}>
        <Logo className='' />
        <Image
          alt='menu icon'
          src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694464994/shared-assets/landing%20page/pic1_uv9tt7.svg'
          height={34}
          width={34}
          onClick={() => handleClick()}
          className={`${isOpen ? 'hidden' : 'block'} ${style.icon}`}
        />
        <Image
          alt='menu icon'
          src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694465748/shared-assets/landing%20page/pic1_sqvyag.svg'
          height={34}
          width={34}
          onClick={() => handleClick()}
          className={`${!isOpen ? 'hidden' : 'block'} ${style.icon}`}
        />
      </div>

      <MobileNav isOpen={isOpen} setCloseFn={setCloseFn} />
    </header>
  )
}

export default MobileHeader
