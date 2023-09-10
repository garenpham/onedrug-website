import React from 'react'
import Product from './Product/Product'

type Props = {}

function Products({}: Props) {
  return (
    <div className='w-[1207px] h-[428px] flex items-center justify-center gap-[20px] bg-gray_4 rounded-xl'>
      <Product
        src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694323760/shared-assets/landing%20page/f4e172a83414baeccace5f71cdd78d525f3161fa_bnb6yc.png'
        title='Smart Point-of-Care Pharmacogenetic Test Device'
        description="Introducing our breakthrough device that enables doctors to make informed treatment decisions by analyzing patients' genetic profiles for clinically relevant drug processing proteins in real-time"
        email={'probeit@onedrug.co'}
      />
      <Product
        src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694323530/shared-assets/landing%20page/281e0d62ad0178adc58758096382707a_pwkipj.jpg'
        title='Smart Health App'
        description='Our smart health app supports the implementation of precision medicine by providing doctors with comprehensive patient insights'
        email={'onegen@onedrug.co'}
      />
    </div>
  )
}

export default Products
