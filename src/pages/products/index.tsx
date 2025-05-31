import PageTitle from '@/components/CommonComponents/PageTitle'
import Products from '@/components/Products/Products'

const ProductsPage = () => {
    return (
        <>
            <PageTitle title='Products' button='Product'  path="/add-product" />
            <Products />
        </>
    )
}

export default ProductsPage