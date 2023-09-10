import { Button } from '@/components/shared/Buttons/Button'
import Image from 'next/image'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

type Props = {}

function AboutUs({}: Props) {
  return (
    <div id='about' className='flex justify-center py-[100px] bg-gray_2'>
      <div className={`flex items-center gap-[80px]`}>
        <div className={`relative w-[413px] h-[392px]`}>
          <div className={`w-[368px] h-[344px] bg-slate-400 relative z-10`}>
            <Image
              alt='about us'
              src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694319582/shared-assets/landing%20page/6f2639076cb928fdbc7bcf5b5818f3ab_i5qxib.png'
              height={0}
              width={0}
              sizes='100%'
              className='object-cover h-full w-full'
            />
          </div>
          <div
            className={`absolute bg-primary_light w-[368px] h-[344px] right-0 bottom-0 z-0`}
          />
          <div
            className={`absolute w-[84px] h-[84px] bg-gray rounded-full flex items-center justify-center bottom-0 left-0 z-20`}>
            <Image
              alt='gene icon'
              src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694320172/shared-assets/landing%20page/pic1_pq6twb.svg'
              height={48}
              width={48}
            />
          </div>
        </div>

        <div>
          <div className={`font-[500] text-secondary`}>ABOUT US</div>
          <div
            className={`my-[12px] text-[24px] font-[600] w-[360px] leading-[120%]`}>
            We are focused on making personalized precision medicine possible
            across the globe
          </div>
          <Image
            alt='icon'
            src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694321842/shared-assets/landing%20page/pic1_gecdjz.svg'
            height={9}
            width={93}
          />
          <div
            className={`mt-[28px] mb-[12px] text-gray_4 text-[18px] w-[473px] leading-[120%]`}>
            OneDrug is a pioneering biotechnology startup focused on advancing
            precision medicine for better patient outcomes.
          </div>
          <div
            className={`mb-[20px] text-gray_4 text-[18px] w-[473px] leading-[120%]`}>
            We help the global healthcare by developing smart technologies for
            the rapid identification of patients that will not respond well to
            drugs due to genetic defects in clinically relevant drug processing
            proteins.
          </div>
          <Button>
            Learn more <GoArrowRight className='ml-[4px] text-[24px]' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
