import { Button } from '@/components/shared/Buttons/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

type Props = {}

function Products({}: Props) {
  return (
    <section className='w-screen px-[--root-margin] pt-[102px] flex flex-col items-center'>
      <div className='flex w-full justify-between'>
        <div className='flex flex-col justify-between'>
          <div>
            <div
              className={`px-[10px] py-[14px] bg-primary_light text-primary text-[14px] h-fit w-fit leading-[120%] rounded-[5px]`}>
              Device
            </div>

            <div
              className={`mt-[15px] mb-[10px] w-[515px] text-[36px] font-[600]`}>
              Smart Point-of-Care Pharamacogenetic Test Device
            </div>

            <div className={`text-gray_9 w-[486px]`}>
              Introducing our breakthrough device that enables doctors to make
              informed treatment decisions by analyzing patients&apos; genetic
              profiles for clinically relevant drug processing proteins in
              real-time
            </div>

            <div className={`flex flex-col gap-[24px] mt-[38px]`}>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Point of care.
              </div>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Operational expertise not required.
              </div>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Results available in 20 minutes.
              </div>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Results stored in the cloud.
              </div>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Laptop/smart phone as user interface.
              </div>
            </div>
          </div>
          <Link href='mailto:probeit@onedrug.co' target='_blank'>
            <Button>
              Learn more <GoArrowRight className='ml-[4px] text-[24px]' />
            </Button>
          </Link>
        </div>
        <div className={`w-[549px] h-[611px]`}>
          <Image
            alt='Device'
            src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694393596/shared-assets/landing%20page/8f20d9460fc09617f54e6ccccc1d76a8_fje7tn.jpg'
            height={0}
            width={0}
            sizes='100%'
            className='w-full h-full object-cover rounded-[9px]'
          />
        </div>
      </div>

      <div className={`mt-[140px] mb-[355px] flex gap-[67px]`}>
        <div className={`w-[549px] h-[611px]`}>
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
            <div
              className={`px-[10px] py-[14px] bg-primary_light text-primary text-[14px] h-fit w-fit leading-[120%] rounded-[5px]`}>
              Application
            </div>

            <div
              className={`mt-[15px] mb-[10px] w-[515px] text-[36px] font-[600]`}>
              Smart Health App
            </div>

            <div className={`text-gray_9 w-[486px]`}>
              Our smart health app supports the implementation of precision
              medicine by providing doctors with comprehensive patient insights.
            </div>

            <div className={`flex flex-col gap-[20px] mt-[23px]`}>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Telemedicine hub.
              </div>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Medication intelligence nexus.
              </div>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Precision patient management.
              </div>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Unified health data repository.
              </div>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Advanced interaction analytics
              </div>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Global healthcare integration.
              </div>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Enhanced pharmacovigilance.
              </div>
              <div className={`flex items-center gap-[24px]`}>
                <Image
                  alt='dot icon'
                  src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694334654/shared-assets/landing%20page/radio_button_checked_24px_hcainq.svg'
                  height={16}
                  width={16}
                />
                Multilingual bridge.
              </div>
            </div>
          </div>

          <Link href='mailto:onegen@onedrug.co' target='_blank'>
            <Button>
              Learn more <GoArrowRight className='ml-[4px] text-[24px]' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products
