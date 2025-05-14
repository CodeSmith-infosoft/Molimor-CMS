import React from 'react'
import { Table } from 'react-bootstrap'
import avatar from '@/assets/image/avatar-img.png'
import { FaCaretDown } from 'react-icons/fa'

const BestSellers = () => {
    return (
        <section className='best-sellers'>
            <div className='title'>
                Best Sellers
                <button>See All</button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th><div className='pro-menu'>Product <FaCaretDown /> </div></th>
                        <th>Customer</th>
                        <th><div className='pro-menu'>Total <FaCaretDown /> </div></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className='product'>
                                <img src={avatar} alt="avatar" />
                                <div className='product-title'>
                                    <h5>Handmade Pouch</h5>
                                    <p className='mb-0'>+3 other products</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="customer">
                                <h5>John Bushmill</h5>
                                <p className='mb-0'>Johnb@mail.com</p>
                            </div>
                        </td>
                        <td>
                            <div className="total">
                                <span>$121.00</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='product'>
                                <img src={avatar} alt="avatar" />
                                <div className='product-title'>
                                    <h5>Handmade Pouch</h5>
                                    <p className='mb-0'>+3 other products</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="customer">
                                <h5>John Bushmill</h5>
                                <p className='mb-0'>Johnb@mail.com</p>
                            </div>
                        </td>
                        <td>
                            <div className="total">
                                <span>$121.00</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='product'>
                                <img src={avatar} alt="avatar" />
                                <div className='product-title'>
                                    <h5>Handmade Pouch</h5>
                                    <p className='mb-0'>+3 other products</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="customer">
                                <h5>John Bushmill</h5>
                                <p className='mb-0'>Johnb@mail.com</p>
                            </div>
                        </td>
                        <td>
                            <div className="total">
                                <span>$121.00</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </section>
    )
}

export default BestSellers