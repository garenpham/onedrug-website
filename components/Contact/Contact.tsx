'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../shared/Buttons/Button'

type Props = {}

function Contact({}: Props) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  const style = {
    label: `text-gray_7 font-[600] mb-[5px] w-[310px] lg:w-fit`,
    input: `w-[310px] lg:w-[482px] h-[52px] border border-gray_5 rounded-[8px] outline-none px-[20px] py-[12px] mb-[15px] lg:mb-[18px] focus:border-primary`,
  }
  return (
    <main className='relative pt-[66px] pb-[61px] lg:pb-[100px] flex flex-col items-center'>
      <div className={`absolute w-screen h-[240px] lg:h-[493px] top-0`}>
        <Image
          alt='background'
          src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694330290/shared-assets/landing%20page/map-base_1_kp9e6x.svg'
          height={0}
          width={0}
          sizes='100%'
          className='w-full h-full object-cover'
        />
      </div>

      <div
        className={`text-center text-secondary font-[700] text-[24px] lg:text-[32px] z-10 uppercase`}>
        Contact Us
      </div>

      <div
        className={`mt-[12px] mb-[37px] lg:mb-[141px] w-[330px] lg:w-[640px] text-[14px] lg:text-[24px] leading-[27px] text-gray_6 text-center z-10`}>
        Get in touch with us to learn more about how OneDrug is reshaping the
        future of healthcare
      </div>

      <div className={`flex items-center flex-col lg:flex-row relative z-10`}>
        <div className={`w-[310px] h-[372px] lg:w-[570px] lg:h-[620px]`}>
          <Image
            alt='image'
            src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694330633/shared-assets/landing%20page/a13116884acf6d658737a77c98619e79_it2oeb.jpg'
            height={0}
            width={0}
            sizes='100%'
            className='w-full h-full object-cover rounded-[10px]'
          />
        </div>

        <div
          className={`px-[45px] pt-[37px] lg:pb-[49px] w-[310px] lg:w-[571px] bg-white`}>
          <div className={`text-[24px] lg:text-[32px] font-[700] text-center`}>
            Get in touch
          </div>

          <form
            action='#'
            id='contactus'
            className='mb-[1rem] mt-[1rem] lg:mb-[46px] lg:mt-[48px] flex flex-col items-center lg:items-baseline'>
            <label htmlFor='name' className={style.label}>
              Name
            </label>
            <input
              id='name'
              type='text'
              className={style.input}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <label htmlFor='email' className={style.label}>
              Email Address
            </label>
            <input
              id='email'
              type='email'
              className={style.input}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <label htmlFor='message' className={style.label}>
              Message
            </label>
            <textarea
              id='message'
              className={`${style.input} !h-[122px] resize-none`}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </form>

          <Link
            href={`mailto:info@onedrug.co?subject=Inquiry by ${formData.name}&body=${formData.message}`}
            className='w-full flex justify-center'>
            <Button
              form='contactus'
              size={'none'}
              className='w-[310px] lg:w-full h-[52px]'>
              Send
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Contact
