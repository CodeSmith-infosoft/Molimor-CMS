import React from 'react'
import { Nav, NavItem, NavLink, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { FaExchangeAlt, FaSearch } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi';
import CommonTable from '../CommonComponents/CommonTable';
import avatar from '@/assets/image/avatar-img.png';

const Orders = () => {
    const columns = [
        {
            // title: 'Order ID',
            title: <div className='d-flex align-items-center'><input className='input-box me-2' type="checkbox" />Order ID</div>,
            dataIndex: 'orderId',
            key: 'orderId',
            render: (value: any) => (
                <>
                    <div className='d-flex align-items-center'>
                        <input className='input-box me-2' type="checkbox" />
                    </div>
                </>
            )
        },
        {
            title: 'Products',
            dataIndex: 'product',
            key: 'product',
            render: (value: any) => (
                <>
                    {/* <div className='d-flex align-items-center'>
                        <input className='input-box me-2' type="checkbox" /> */}
                    <div className='product'>
                        <img src={value.image} alt="avatar" />
                        <div className='product-title'>
                            <h5>{value.title}</h5>
                            <p className='mb-0'>{value.additional}</p>
                        </div>
                    </div>
                    {/* </div> */}
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
        <section className='order'>
            <TabContainer defaultActiveKey='all'>
                <div className='order-categories'>
                    <Nav>
                        <NavItem>
                            <NavLink eventKey='all'>All Status</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='pending'>Pending</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='processing'>Processing</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='shipped'>Shipped</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='delivered'>Delivered</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='cancelled'>Cancelled</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey='rejected'>Rejected</NavLink>
                        </NavItem>
                    </Nav>

                    <div className='last-serach'>
                        <div className='search-box'>
                            <FaSearch className='search-icon' />
                            <input type="search" placeholder='Search orders. . .' />
                        </div>
                        <button className='d-flex align-items-center'><FaExchangeAlt />change status</button>
                    </div>
                </div>
                <TabContent>
                    <TabPane eventKey='all'>

                        <CommonTable header={columns} data={data} isPagination />
                    </TabPane>
                    <TabPane eventKey='pending'>Pending content</TabPane>
                    <TabPane eventKey='processing'>Processing content</TabPane>
                    <TabPane eventKey='shipped'>Shipped content</TabPane>
                    <TabPane eventKey='delivered'>Delivered content</TabPane>
                    <TabPane eventKey='cancelled'>Cancelled content</TabPane>
                    <TabPane eventKey='rejected'>Rejected content</TabPane>
                </TabContent>
            </TabContainer>
        </section>
    )
}

export default Orders
