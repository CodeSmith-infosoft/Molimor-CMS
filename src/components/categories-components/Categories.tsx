import { categoryListType } from "@/types/categoryTypes";
import CommonTable from "../CommonComponents/CommonTable";

import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { HiDotsVertical } from "react-icons/hi";

type Categoriestype = {
  openCategories: boolean;
  handleCategories: () => void;
};

const Categories = ({ openCategories, handleCategories }: Categoriestype) => {
  const [isActive, setIsActive] = useState(false);
  const [categoryList, setCategoryList] = useState<categoryListType[]>([]);
  const columns = [
    {
      title: "Category Name",
      dataIndex: "product",
      key: "product",
      headerClass: "th-font",
      render: (value: any) => (
        <>
          <div className="product">
            <img src={value.image} alt="avatar" />
            <div className="product-title">
              <h5>{value.title}</h5>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Item",
      dataIndex: "item",
      key: "itemn",
    },
    {
      title: "Sold",
      dataIndex: "sold",
      key: "sold",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Add",
      dataIndex: `add`,
      key: "add",
    },
    {
      title: "Active",
      key: "active",
      dataIndex: "active",
      render: () => (
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            checked={isActive}
            onChange={() => setIsActive(!isActive)}
            className="red-toggle"
          />
        </Form>
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
    <section className="categories">
      <CommonTable header={columns} data={categoryList} />

      <Modal
        show={openCategories}
        onHide={handleCategories}
        size="lg"
        className="custom-modal-dialog"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h2>Add Category</h2>
          <p>Category Name</p>
          <input type="text" placeholder="Green Tea" />
          <p>Image</p>
          <div className="img-upload">
            <input type="file" />
          </div>
          <div className="btn-common">
            <button className="btn-cencal" onClick={handleCategories}>
              Cancel
            </button>
            <button className="me-0 btn-add">Add Category</button>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Categories;
