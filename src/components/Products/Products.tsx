import { useEffect, useState } from "react";
import CommonTable from "../CommonComponents/CommonTable";
import { HiDotsVertical } from "react-icons/hi";
import { getAllProductsList } from "@/service/asyncStore/action/product";
import { OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { ProductDataType, ProductVariantType } from "@/types/productDataTypes";

const Products = () => {
  const [productData, setProductData] = useState<ProductDataType[]>([]);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 10,
    totalPages: 0,
    totalRecords: 0,
  });

  useEffect(() => {
    getAllProductsList({ page: pagination.page, limit: pagination.limit }).then(
      (res) => {
        setProductData(res.data.products);
        setPagination({
          page: res.data.page,
          limit: 10,
          totalPages: res.data.totalPages,
          totalRecords: res.data.totalRecords,
        });
      }
    );
  }, []);
  const columns = [
    {
      // title: <div className='d-flex align-items-center'><input className='input-box me-2' type="checkbox" />Products</div>,
      title: "Products",
      dataIndex: "title",
      key: "title",
      render: (value: string, data: ProductDataType) => (
        <>
          <div className="d-flex align-items-center">
            {/* <input className='input-box me-2' type="checkbox" /> */}
            <div className="product">
              <img
                src={import.meta.env.VITE_IMAGE_DOMAIN + data?.image}
                alt="avatar"
              />
              <div className="product-title">
                <h5 className="two-line-clamp">{value}</h5>
                <p className="mb-0 product-list-fade-color">
                  {data.subCategoryName}
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      cellClass: "product-list-fade-color",
      render: (value: string) => <p className="two-line-clamp">{value}</p>,
    },
    {
      title: "Sale",
      dataIndex: "salesCount",
      key: "salesCount",
      cellClass: "product-list-fade-color",
    },
    {
      title: "Inventory",
      dataIndex: "quantity",
      key: "quantity",
      cellClass: "product-list-fade-color",
    },
    {
      title: "Price",
      dataIndex: `variants`,
      key: "variants",
      cellClass: "product-list-fade-color",
      render: (value: ProductVariantType[]) => (
        <OverlayTrigger
          placement={"auto"}
          overlay={
            <Tooltip id="button-tooltip">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Weight</th>
                    <th>MRP</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {value?.map((variant, ind) => (
                    <tr key={ind}>
                      <td>{variant.weight}</td>
                      <td>{variant.mrp}</td>
                      <td>{variant.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tooltip>
          }
        >
          <span style={{ cursor: "pointer", textDecoration: "underline" }}>
            {value[0].price}
          </span>
        </OverlayTrigger>
      ),
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "_id",
      render: () => <HiDotsVertical />,
    },
  ];

  return (
    <section>
      <CommonTable
        header={columns}
        data={productData}
        isPagination
        limit={pagination.limit}
        page={pagination.page}
        totalPages={pagination.totalPages}
        totalRecords={pagination.totalRecords}
      />
    </section>
  );
};

export default Products;
