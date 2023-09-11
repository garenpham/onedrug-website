import Image from 'next/image'
import React from 'react'

type Props = {
  src: string
  alt?: string
  className?: string
}

function Picture({ src, alt = 'image', className }: Props) {
  return (
    <Image
      alt={alt}
      src={src}
      height={0}
      width={0}
      sizes='100%'
      className={`w-full h-full object-cover ${className}`}
    />
  )
}

export default Picture
