import React from 'react'
import CommonTable from '../CommonComponents/CommonTable'
import { HiDotsVertical } from 'react-icons/hi';
import avatar from '@/assets/image/avatar-img.png';
import { Value } from 'sass';

const Products = () => {
  const columns = [
    {
      title: <div className='d-flex align-items-center'><input className='input-box me-2' type="checkbox" />Products</div>,
      dataIndex: 'product',
      key: 'product',
      render: (value: any) => (
        <>
          <div className='d-flex align-items-center'>
            <input className='input-box me-2' type="checkbox" />
            <div className='product'>
              <img src={value.image} alt="avatar" />
              <div className='product-title'>
                <h5>{value.title}</h5>
                <p className='mb-0'>{value.additional}</p>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Sale',
      dataIndex: 'sale',
      key: 'sale',
    },
    {
      title: 'Inventory',
      dataIndex: 'inventory',
      key: 'inventory',
    },
    {
      title: 'Price',
      dataIndex: `price`,
      key: 'price',
      render: (value: number) => (
        <>${value}.00</>
      ),
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
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
    {
      "product": {
        "title": "Handmade Pouch",
        "additional": "+3 other products",
        "image": avatar
      },
      "description": "Lorem ipsum dolor sit amet consectetur. Elementum tincidunt leo.",
      "sale": "20",
      "inventory": 256,
      "price": 121
    },
  ]
  return (
    <section>
      <CommonTable header={columns} data={data}  isPagination/>
    </section>
  )
}

export default Products