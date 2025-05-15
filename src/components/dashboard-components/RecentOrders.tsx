import avatar from '@/assets/image/avatar-img.png'
import { Table } from 'react-bootstrap'
import { HiDotsVertical } from 'react-icons/hi'
import { render } from 'sass';
import CommonTable from '../CommonComponents/CommonTable';

interface DataType {
    orderId: string;
    product: string;
    customer: string;
    date: string;
    total: number;
    payment: string;
    status: string;
}

const RecentOrders = () => {
    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
            render: (value: any) => (
                <div className='product'>
                    <img src={value.image} alt="avatar" />
                    <div className='product-title'>
                        <h5>{value.title}</h5>
                        <p className='mb-0'>{value.additional}</p>
                    </div>
                </div>
            )
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (value: any) => `$${value.toFixed(2)}`,
        },
        {
            title: 'Payment',
            dataIndex: 'payment',
            key: 'payment',
            render: (value: any) => <div className='pro-payment'>Paid</div>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: any) => {
                let color = { backgroundColor: '#FFF0EA', color: '#F86624' };
                return <div className='status' style={color}>Processing</div>
            },
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
            "orderId": "302012",
            "product": {
                "title": "Handmade Pouch",
                "additional": "+3 other products",
                "image": "avatar"
            },
            "customer": "John Bushmill",
            "date": "29 Dec 2022",
            "total": 121.00,
            "payment": "",
            "status": "",
            "statusStyle": {}
        },
        {
            "orderId": "302012",
            "product": {
                "title": "Handmade Pouch",
                "additional": "+3 other products",
                "image": "avatar"
            },
            "customer": "John Bushmill",
            "date": "29 Dec 2022",
            "total": 121.00,
            "payment": "Paid",
            "status": "Delivered",
            "statusStyle": {
                "backgroundColor": "#E9FAF7",
                "color": "#1A9882"
            }
        },
        {
            "orderId": "302012",
            "product": {
                "title": "Handmade Pouch",
                "additional": "+3 other products",
                "image": "avatar"
            },
            "customer": "John Bushmill",
            "date": "29 Dec 2022",
            "total": 121.00,
            "payment": "Paid",
            "status": "Cancelled",
            "statusStyle": {
                "backgroundColor": "#FEECEE",
                "color": "#EB3D4D"
            }
        },
        {
            "orderId": "302012",
            "product": {
                "title": "Handmade Pouch",
                "additional": "+3 other products",
                "image": "avatar"
            },
            "customer": "John Bushmill",
            "date": "29 Dec 2022",
            "total": 121.00,
            "payment": "Paid",
            "status": "Pending",
            "statusStyle": {
                "backgroundColor": "#EAF8FF",
                "color": "#2BB2FE"
            }
        },
        {
            "orderId": "302012",
            "product": {
                "title": "Handmade Pouch",
                "additional": "+3 other products",
                "image": "avatar"
            },
            "customer": "John Bushmill",
            "date": "29 Dec 2022",
            "total": 121.00,
            "payment": "Paid",
            "status": "Processing",
            "statusStyle": {
                "backgroundColor": "#FFF0EA",
                "color": "#F86624"
            }
        }
    ]


    return (
        <section className='recent-orders'>
            <h2 className='mb-0'>Recent Orders</h2>
            <CommonTable header={columns} data={data} />
            {/* <Table>
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

                        </td>
                        <td>John Bushmill</td>
                        <td>29 Dec 2022</td>
                        <td>$121.00</td>
                        <td></td>
                        <td></td>
                        <td> </td>
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
            </Table> */}
        </section>
    )
}

export default RecentOrders