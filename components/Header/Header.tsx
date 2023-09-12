'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from '../shared/Logo/Logo'
import MobileHeader from './Mobile/MobileHeader'

type Props = {}

const Header = (props: Props) => {
  const style = {
    active: `bg-primary text-white hover:bg-primary font-[600]`,
    base: `px-[24px] py-[44px]`,
    inactive: `hover:bg-primary_light font-[500]`,
  }
  const pathname = usePathname()

  return (
    <>
      <header className='hidden lg:flex px-[--root-margin] items-start justify-between bg-gray'>
        <div className={`w-[300px] h-[170px] flex items-center justify-center`}>
          <Logo />
        </div>
        <nav className={`flex items-center gap-[20px]`}>
          <Link
            href={`/`}
            className={`${style.base} ${
              pathname === '/' ? style.active : style.inactive
            }`}>
            Home
          </Link>
          <Link
            href={`/about`}
            className={`${style.base} ${
              pathname === '/about' ? style.active : style.inactive
            }`}>
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
        </nav>
      </header>

      <MobileHeader />
    </>
  )
}

export default Header
