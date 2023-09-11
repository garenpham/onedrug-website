import Picture from '@/components/shared/Picture/Picture'
import Image from 'next/image'
import React from 'react'

type Props = {}

function Gallery({}: Props) {
  return (
    <div className='flex items-center gap-[12px]'>
      <div className={`flex flex-col items-end gap-[12px]`}>
        <div className={`flex items-center gap-[23px]`}>
          <Image
            alt='icon'
            src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694399641/shared-assets/landing%20page/pic1_hjqxmy.svg'
            height={52}
            width={50}
            className='mt-[2rem]'
          />

          <div className={`w-[125px] h-[166px]`}>
            <Picture
              src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694399395/shared-assets/landing%20page/69fa157a5a4a4e9622028b2b1b6bdc9dfa5f2cdb_b0nakj.png'
              className='rounded-[10px]'
            />
          </div>
        </div>

        <div className={`w-[190px] h-[242px]`}>
          <Picture
            src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694399409/shared-assets/landing%20page/81cfb4647d0ce8bc8c7ecba878032d86_vr16x1.png'
            className='rounded-[10px] rounded-bl-[40px]'
          />
        </div>
      </div>

      <div className={`flex flex-col gap-[12px]`}>
        <div className={`w-[326px] h-[245px]`}>
          <Picture
            src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694312742/shared-assets/landing%20page/a91fee560b1323924e7595bc0451342e_kf2j9y.png'
            className='rounded-[10px] rounded-tr-[40px]'
          />
        </div>
        <div className={`flex gap-[12px]`}>
          <div className={`flex flex-col items-center gap-[12px]`}>
            <div className={`w-[190px] h-[126px]`}>
              <Picture
                src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694399430/shared-assets/landing%20page/a3a1450316d5a94be23392a7fae3553d_v0rlay.png'
                className='rounded-[10px]'
              />
            </div>

            <Image
              alt='icon'
              src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694399673/shared-assets/landing%20page/pic1_ogwnd4.svg'
              width={152}
              height={21}
            />
          </div>

          <div className={`w-[125px] h-[166px]`}>
            <Picture
              src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694399435/shared-assets/landing%20page/1bc3d41765f43d5bce66d2fa3ad06a99_mazob9.png'
              className='rounded-[10px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
