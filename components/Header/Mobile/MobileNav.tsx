import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  isOpen: boolean
  setCloseFn: () => void
}

function MobileNav({ isOpen, setCloseFn }: Props) {
  const pathname = usePathname()

  const style = {
    menu: `px-[22px] py-[11px] font-[500] text-gray_1 cursor-pointer active:bg-primary_light active:text-primary_1 active:scale-95 transition-transform ease-in`,
    active: `bg-primary_light text-primary_1`,
  }
  return (
    <div
      className={`${isOpen ? 'flex' : 'hidden'} mt-[20px] flex-col gap-[16px]`}>
      <Link
        href='/'
        onClick={() => setCloseFn()}
        className={`${style.menu} ${pathname === '/' && style.active}`}>
        Home
      </Link>
      <Link
        href='/about'
        onClick={() => setCloseFn()}
        className={`${style.menu} ${pathname === '/about' && style.active}`}>
        About
      </Link>
      <Link
        href='/products'
        onClick={() => setCloseFn()}
        className={`${style.menu} ${pathname === '/products' && style.active}`}>
        Products
      </Link>
      <Link
        href='/contact'
        onClick={() => setCloseFn()}
        className={`${style.menu} ${pathname === '/contact' && style.active}`}>
        Contact
      </Link>
    </div>
  )
}

export default MobileNav
