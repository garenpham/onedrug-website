import Picture from '@/components/shared/Picture/Picture'
import React from 'react'

type Props = {
  text: string
}

function Item({ text }: Props) {
  return (
    <div
      className={`flex items-center gap-[10px] lg:gap-[24px] text-[14px] lg:text-base`}>
      <div className={`w-[.8rem] h-[.8rem] lg:w-[16px] lg:h-[16px]`}>
        <Picture src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg' />
      </div>
      {text}
    </div>
  )
}

export default Item
