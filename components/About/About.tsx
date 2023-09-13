import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollDownBtn from '../shared/Buttons/ScrollDownBtn'

type Props = {}

function About({}: Props) {
  const style = {
    title: `text-black_1 text-[36px] font-[600]`,
    sub: `text-[20px] text-gray_10 leading-[38px]`,
  }
  return (
    <main className='relative pt-[66px] pb-[116px] lg:pb-[150px] flex flex-col items-center'>
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

      <h1
        className={`text-center text-secondary font-[700] text-[24px] lg:text-[32px] z-10 uppercase`}>
        About Us
      </h1>

      <div
        className={`mt-[12px] mb-[57px] lg:mb-[141px] w-[360px] lg:w-[640px] text-[24px] lg:text-[30px] leading-[27px] font-[700] text-center z-10`}>
        We are focused on making personalized precision medicine possible across
        the globe
      </div>

      <div className={`w-screen flex flex-col items-center`}>
        <div
          className={`z-10 flex flex-col lg:flex-row items-center gap-[32px] lg:gap-[30px]`}>
          <div className={`w-[342px] lg:w-[500px] flex flex-col gap-[1rem]`}>
            <h2 className={style.title}>Our Vision</h2>
            <p className={style.sub}>
              Our vision is to lead the global transformation of healthcare by
              making personalized precision medicine accessible and impactful
              across every corner of the world.
            </p>
          </div>

          <Image
            alt='img'
            src={
              'https://res.cloudinary.com/dwqpulybv/image/upload/v1694404131/shared-assets/landing%20page/f28f8a1ba0f51442bf93d71af61df7e4b454c26d_shtd8u.jpg'
            }
            height={363}
            width={545}
            className='rounded-[26px] w-[349px] h-[232px] lg:w-[545px] lg:h-[363px]'
          />
        </div>

        <div
          className={`mt-[48px] lg:mt-[117px] mb-[47px] lg:mb-[91px] flex flex-col-reverse lg:flex-row items-center gap-[40px] lg:gap-[34px]`}>
          <div className={`relative`}>
            <Image
              alt='img'
              src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694404095/shared-assets/landing%20page/b317a6045115c45996f6ad480f044924_la7lup.png'
              width={0}
              height={0}
              sizes='100%'
              className='rounded-[26px] mt-[24px] object-cover lg:mt-0 w-[341px] h-[494px] lg:w-[529px] lg:h-[700px]'
            />
          </div>

          <div
            className={`w-[350px] lg:w-[572px] flex flex-col gap-[1rem] relative`}>
            <h2 className={style.title}>About the Founder</h2>
            <p className={style.sub}>
              Chukwunonso Nwabufo is the founder of OneDrug and a multiple
              award-winning pharmacologist with over six years&apos; experience
              in drug development across academia and the pharmaceutical
              industry. Chuk contributed to the development of Remdesivir and
              Lenacapavir approved for the treatment of COVID-19 and HIV
              respectively during his tenure at Gilead Sciences. He also
              contributed to the development of novel compounds under basic
              science research for the treatment and/or diagnosis of
              Parkinson&apos;s disease. Chuk has received 20 awards and
              recognitions worth more than C$200K in funding due to academic,
              research, and leadership accomplishments. Chuk is the author of 15
              peer-reviewed scientific papers and 11 industry-standard
              peer-reviewed reports in support of drug development programs.
            </p>

            <Link
              href='https://chukwunonsonwabufo.com/'
              target='_blank'
              className={`absolute flex items-center gap-[.7rem] -bottom-[2.4rem] lg:-bottom-[1.4rem] right-0 group cursor-pointer active:scale-95 transition-transform ease-in`}>
              <div className='text-[24px] text-primary group-hover:font-bold'>
                Read More
              </div>
              <ScrollDownBtn />
            </Link>
          </div>
        </div>

        <div
          className={`flex flex-col lg:flex-row items-center gap-[28px] lg:gap-[65px]`}>
          <div className={`w-[349px] lg:w-[500px] flex flex-col gap-[1rem]`}>
            <h2 className={style.title}>Our Mission</h2>
            <p className={style.sub}>
              Our mission is to pioneer innovative smart technology solutions
              that revolutionize healthcare by enabling personalized treatments.
            </p>
          </div>
          <Image
            alt='img'
            src={
              'https://res.cloudinary.com/dwqpulybv/image/upload/v1694410053/shared-assets/landing%20page/00108896d3f36297d04d0d2996f6a870_jnlik8.jpg'
            }
            height={363}
            width={545}
            className='rounded-[26px] w-[350px] h-[252px] lg:w-[545px] lg:h-[363px]'
          />
        </div>
      </div>
    </main>
  )
}

export default About
