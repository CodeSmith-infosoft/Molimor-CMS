import React from 'react'
import avatar from '@/assets/image/avatar-img.png'
import { Table } from 'react-bootstrap'
import { HiDotsVertical } from 'react-icons/hi'

const RecentOrders = () => {
    return (
        <section className='recent-orders'>
            <h2 className='mb-0'>Recent Orders</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className='pro-id'>302012</div></td>
                        <td>
                            <div className='product'>
                                <img src={avatar} alt="avatar" />
                                <div className='product-title'>
                                    <h5>Handmade Pouch</h5>
                                    <p className='mb-0'>+3 other products</p>
                                </div>
                            </div>
                        </td>
                        <td>John Bushmill</td>
                        <td>29 Dec 2022</td>
                        <td>$121.00</td>
                        <td><div className='pro-payment'>Paid</div></td>
                        <td><div className='status' style={{ backgroundColor: '#FFF0EA', color: '#F86624' }}>Processing</div></td>
                        <td><HiDotsVertical /> </td>
                    </tr>
                    <tr>
                        <td><div className='pro-id'>302012</div></td>
                        <td>
                            <div className='product'>
                                <img src={avatar} alt="avatar" />
                                <div className='product-title'>
                                    <h5>Handmade Pouch</h5>
                                    <p className='mb-0'>+3 other products</p>
                                </div>
                            </div>
                        </td>
                        <td>John Bushmill</td>
                        <td>29 Dec 2022</td>
                        <td>$121.00</td>
                        <td><div className='pro-payment'>Paid</div></td>
                        <td><div className='status' style={{ backgroundColor: '#E9FAF7', color: '#1A9882' }}>Delivered</div></td>
                        <td><HiDotsVertical /> </td>
                    </tr>
                    <tr>
                        <td><div className='pro-id'>302012</div></td>
                        <td>
                            <div className='product'>
                                <img src={avatar} alt="avatar" />
                                <div className='product-title'>
                                    <h5>Handmade Pouch</h5>
                                    <p className='mb-0'>+3 other products</p>
                                </div>
                            </div>
                        </td>
                        <td>John Bushmill</td>
                        <td>29 Dec 2022</td>
                        <td>$121.00</td>
                        <td><div className='pro-payment'>Paid</div></td>
                        <td><div className='status' style={{ backgroundColor: '#FEECEE', color: '#EB3D4D' }}>Cancelled</div></td>
                        <td><HiDotsVertical /> </td>
                    </tr>
                    <tr>
                        <td><div className='pro-id'>302012</div></td>
                        <td>
                            <div className='product'>
                                <img src={avatar} alt="avatar" />
                                <div className='product-title'>
                                    <h5>Handmade Pouch</h5>
                                    <p className='mb-0'>+3 other products</p>
                                </div>
                            </div>
                        </td>
                        <td>John Bushmill</td>
                        <td>29 Dec 2022</td>
                        <td>$121.00</td>
                        <td><div className='pro-payment'>Paid</div></td>
                        <td><div className='status' style={{ backgroundColor: '#EAF8FF', color: '#2BB2FE' }}>Pending</div></td>
                        <td><HiDotsVertical /> </td>
                    </tr>
                    <tr>
                        <td><div className='pro-id'>302012</div></td>
                        <td>
                            <div className='product'>
                                <img src={avatar} alt="avatar" />
                                <div className='product-title'>
                                    <h5>Handmade Pouch</h5>
                                    <p className='mb-0'>+3 other products</p>
                                </div>
                            </div>
                        </td>
                        <td>John Bushmill</td>
                        <td>29 Dec 2022</td>
                        <td>$121.00</td>
                        <td><div className='pro-payment'>Paid</div></td>
                        <td><div className='status' style={{ backgroundColor: '#FFF0EA', color: '#F86624' }}>Processing</div></td>
                        <td><HiDotsVertical /> </td>
                    </tr>
                </tbody>
            </Table>
        </section>
    )
}

export default RecentOrders