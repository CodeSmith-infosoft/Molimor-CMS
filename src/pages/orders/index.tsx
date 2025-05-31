import PageTitle from '@/components/CommonComponents/PageTitle'
import Orders from '@/components/orders-components/Orders'


const OrdersPage = () => {
    return (
        <>
            <PageTitle title='Orders' button='Product' />
            <Orders />
        </>
    )
}

export default OrdersPage