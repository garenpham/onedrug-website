import { Button } from '@/components/shared/Buttons/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

type Props = {}

function AboutUs({}: Props) {
  return (
    <div
      id='aboutus'
      className='flex justify-center py-[40px] lg:py-[100px] bg-gray_2'>
      <div
        className={`flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[80px]`}>
        <div
          className={`relative w-[323px] h-[306px] lg:w-[413px] lg:h-[392px]`}>
          <div
            className={`w-[288px] h-[267px] lg:w-[368px] lg:h-[344px] bg-slate-400 relative z-10`}>
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
            className={`absolute bg-primary_light w-[288px] h-[267px] lg:w-[368px] lg:h-[344px] right-0 bottom-0 z-0`}
          />
          <div
            className={`absolute w-[66px] h-[66px] lg:w-[84px] lg:h-[84px] bg-gray rounded-full flex items-center justify-center bottom-0 left-0 z-20`}>
            <Image
              alt='gene icon'
              src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694320172/shared-assets/landing%20page/pic1_pq6twb.svg'
              height={48}
              width={48}
              className='w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]'
            />
          </div>
        </div>

        <div>
          <div className={`font-[500] text-secondary text-[13px] lg:text-base`}>
            ABOUT US
          </div>
          <div
            className={`my-[8px] lg:my-[12px] text-[18px] lg:text-[24px] font-[600] w-[281px] lg:w-[360px] leading-[120%]`}>
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
            className={`mt-[28px] mb-[12px] text-gray_4 text-[14px] lg:text-[18px] w-[318px] lg:w-[473px] leading-[120%]`}>
            OneDrug is a pioneering biotechnology startup focused on advancing
            precision medicine for better patient outcomes.
          </div>
          <div
            className={`mb-[20px] text-gray_4 text-[14px] lg:text-[18px] w-[318px] lg:w-[473px] leading-[120%]`}>
            We help the global healthcare by developing smart technologies for
            the rapid identification of patients that will not respond well to
            drugs due to genetic defects in clinically relevant drug processing
            proteins.
          </div>
          <Link href='/about'>
            <Button>
              Learn more{' '}
              <GoArrowRight className='ml-[4px] text-[16px] lg:text-[24px]' />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
