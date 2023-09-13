import { Button } from '@/components/shared/Buttons/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import Picture from '../shared/Picture/Picture'
import Item from './Item/Item'

type Props = {}

function Products({}: Props) {
  const style = {
    section:
      'flex w-full flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-between gap-[44px] lg:gap-0',
    container: `flex flex-col justify-between`,
    img: `w-[310px] h-[292px] lg:w-[549px] lg:h-[611px]`,
    tag: `px-[10px] py-[14px] bg-primary_light text-primary text-[14px] h-fit w-fit leading-[120%] rounded-[5px]`,
    title: `mt-[15px] mb-[14px] lg:mb-[10px] w-[310px] lg:w-[515px] text-[24px] lg:text-[36px] font-[600]`,
    description: `text-gray_9 w-[310px] lg:w-[486px] text-[14px] lg:text-base`,
    btn: `mt-[1.4rem] lg:mt-0`,
  }
  return (
    <main className='w-screen px-[--root-margin] pt-[64px] lg:pt-[102px] flex flex-col items-center'>
      <section className={style.section}>
        <div className={style.container}>
          <div>
            <div className={style.tag}>Device</div>

            <div className={style.title}>
              Smart Point-of-Care Pharamacogenetic Test Device
            </div>

            <div className={style.description}>
              Introducing our breakthrough device that enables doctors to make
              informed treatment decisions by analyzing patients&apos; genetic
              profiles for clinically relevant drug processing proteins in
              real-time
            </div>

            <div
              className={`flex flex-col gap-[.6rem] lg:gap-[24px] mt-[1rem] lg:mt-[38px]`}>
              <Item text='Point of care.' />
              <Item text='Operational expertise not required.' />
              <Item text='Results available in 20 minutes.' />
              <Item text='Results stored in the cloud.' />
              <Item text='Laptop/smart phone as user interface.' />
            </div>
          </div>
          <Link
            href='mailto:probeit@onedrug.co'
            target='_blank'
            className={style.btn}>
            <Button>
              Learn more <GoArrowRight className='ml-[4px] text-[24px]' />
            </Button>
          </Link>
        </div>
        <div className={style.img}>
          <Image
            alt='Device'
            src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694393596/shared-assets/landing%20page/8f20d9460fc09617f54e6ccccc1d76a8_fje7tn.jpg'
            height={0}
            width={0}
            sizes='100%'
            className='w-full h-full object-cover rounded-[9px]'
          />
        </div>
      </section>

      <section
        className={`mt-[44px] lg:mt-[140px] mb-[240px] lg:mb-[355px] flex flex-col lg:flex-row gap-[44px] lg:gap-[67px]`}>
        <div className={style.img}>
          <Image
            alt='Application'
            src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694393608/shared-assets/landing%20page/200c6e40dfd7cf8e3cfa9623119f442f_cxcjj7.jpg'
            height={0}
            width={0}
            sizes='100%'
            className='w-full h-full object-cover rounded-[9px]'
          />
        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <div className={style.tag}>Application</div>

            <div className={style.title}>Smart Health App</div>

            <div className={style.description}>
              Our smart health app supports the implementation of precision
              medicine by providing doctors with comprehensive patient insights.
            </div>

            <div
              className={`flex flex-col gap-[.6rem] lg:gap-[20px] mt-[1rem] lg:mt-[23px]`}>
              <Item text='Telemedicine hub.' />
              <Item text='Medication intelligence nexus.' />
              <Item text='Precision patient management.' />
              <Item text='Unified health data repository.' />
              <Item text='Advanced interaction analytics' />
              <Item text='Global healthcare integration.' />
              <Item text='Enhanced pharmacovigilance.' />
              <Item text='Multilingual bridge.' />
            </div>
          </div>

          <Link
            href='mailto:onegen@onedrug.co'
            target='_blank'
            className={style.btn}>
            <Button>
              Learn more <GoArrowRight className='ml-[4px] text-[24px]' />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Products
