export type ProductDataType = {
    title: string;
    description: string;
    variants: ProductVariantType[],
    image: string;
    salesCount: number;
    subCategoryName: string;
    quantity: number;
    _id: string;
}

export type ProductVariantType = {
    weight: string;
    price: number;
    mrp: number;
    discountPrice?: number;
    startSaleOn?: string;
    endSaleOn?: string;
    saleStatus?: boolean
}

export type getProductType = {
    page: number;
    limit: number;
}