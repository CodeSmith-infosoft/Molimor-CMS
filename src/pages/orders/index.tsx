import PageTitle from '@/components/CommonComponents/PageTitle'
import Orders from '@/components/orders-components/Orders'
import React from 'react'

const OrdersPage = () => {
    return (
        <>
            <PageTitle title='Orders' button='Product' />
            <Orders />
        </>
    )
}

export default OrdersPage