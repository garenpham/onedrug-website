'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from '../shared/Logo/Logo'

type Props = {}

const Nav = (props: Props) => {
  const style = {
    active: `bg-primary text-white hover:bg-primary font-[600]`,
    base: `px-[24px] py-[44px]`,
    inactive: `hover:bg-primary_light font-[500]`,
  }
  const pathname = usePathname()

  return (
    <div className='px-[--root-margin] flex items-start justify-between bg-gray'>
      <div className={`w-[300px] h-[150px] flex items-center justify-center`}>
        <Logo />
      </div>
      <div className={`flex items-center gap-[20px]`}>
        <Link
          href={`/`}
          className={`${style.base} ${
            pathname === '/' ? style.active : style.inactive
          }`}>
          Home
        </Link>
        <Link href={`/#about`} className={`${style.base} ${style.inactive}`}>
          About
        </Link>
        <Link
          href={`/products`}
          className={`${style.base} ${
            pathname === '/products' ? style.active : style.inactive
          }`}>
          Products
        </Link>
        <Link
          href={`/contact`}
          className={`${style.base} ${
            pathname === '/contact' ? style.active : style.inactive
          }`}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Nav
