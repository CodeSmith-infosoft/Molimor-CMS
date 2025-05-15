import React from 'react'
import CommonTable from '../CommonComponents/CommonTable'

import avatar from '@/assets/image/avatar-img.png';
import { HiDotsVertical } from 'react-icons/hi';
import { Button, Modal } from 'react-bootstrap';

type Categoriestype = {
  openCategories: boolean
  handleCategories: () => void
}

const Categories = ({ openCategories, handleCategories }: Categoriestype) => {
  console.log(openCategories)
  const columns = [
    {
      title: 'Category Name',
      dataIndex: 'product',
      key: 'product',
      render: (value: any) => (
        <>
          <div className='product'>
            <img src={value.image} alt="avatar" />
            <div className='product-title'>
              <h5>{value.title}</h5>
            </div>
          </div>
        </>
      )
    },
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'itemn',
    },
    {
      title: 'Sold',
      dataIndex: 'sold',
      key: 'sold',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Add',
      dataIndex: `add`,
      key: 'add',
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: '_id',
      render: () => (
        <HiDotsVertical />
      ),
    },
  ];

  const data = [
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "item": 15,
      "sold": "20,000",
      "stock": 256,
      "add": '29 Dec 2024'
    },
  ]
  return (
    <section className='categories'>
      <CommonTable header={columns} data={data} />

      <Modal
        show={openCategories}
        onHide={handleCategories}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body>
          <h2>Add Category</h2>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCategories}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  )
}

export default Categories