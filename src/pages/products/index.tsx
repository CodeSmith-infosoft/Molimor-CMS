import PageTitle from '@/components/CommonComponents/PageTitle'
import Products from '@/components/Products/Products'
import React from 'react'
import { BsDownload } from 'react-icons/bs'
import { FaCaretRight, FaPlus } from 'react-icons/fa'

const ProductsPage = () => {
    return (
        <>
            <PageTitle title='Products' button='Product' />
            <Products />
        </>
    )
}

export default ProductsPage