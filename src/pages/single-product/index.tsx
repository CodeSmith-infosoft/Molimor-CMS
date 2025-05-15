import PageTitle from '@/components/CommonComponents/PageTitle'
import SingleProduct from '@/components/single-product/SingleProduct'
import React from 'react'

const SingleProductPage = () => {
  return (
    <>
    <PageTitle title='Add single products' subTitle='products' cancelBtn/>
    <SingleProduct />
    </>
  )
}

export default SingleProductPage