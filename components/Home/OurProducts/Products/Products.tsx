import React from 'react'
import Product from './Product/Product'

type Props = {}

function Products({}: Props) {
  return (
    <div className='w-[1207px] h-[428px] flex items-center justify-center gap-[20px] bg-gray_4 rounded-xl'>
      <Product
        src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694393596/shared-assets/landing%20page/8f20d9460fc09617f54e6ccccc1d76a8_fje7tn.jpg'
        title='Smart Point-of-Care Pharmacogenetic Test Device'
        description="Introducing our breakthrough device that enables doctors to make informed treatment decisions by analyzing patients' genetic profiles for clinically relevant drug processing proteins in real-time"
        email={'probeit@onedrug.co'}
      />
      <Product
        src='https://res.cloudinary.com/dwqpulybv/image/upload/v1694393608/shared-assets/landing%20page/200c6e40dfd7cf8e3cfa9623119f442f_cxcjj7.jpg'
        title='Smart Health App'
        description='Our smart health app supports the implementation of precision medicine by providing doctors with comprehensive patient insights'
        email={'onegen@onedrug.co'}
      />
    </div>
  )
}

export default Products
