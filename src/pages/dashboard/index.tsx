import React, { useState } from 'react';
import "flatpickr/dist/themes/material_green.css";
import { Icon } from '@iconify/react/dist/iconify.js';
import { FaCalendarAlt } from 'react-icons/fa';
import State from '@/components/dashboard-components/State';
import SalesGraph from '@/components/dashboard-components/SalesGraph';
import { Col, Row } from 'react-bootstrap';
import BestSellers from '@/components/dashboard-components/BestSellers';
import RecentOrders from '@/components/dashboard-components/RecentOrders';

const Dashboard = () => {
  const [date, setDate] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <section className='dashboard'>
        <div className='main-title'>
          <div>
            <h1>Welcome Back Jay</h1>
            <p>Lorem ipsum dolor sit amet, welcome back Jay</p>
          </div>
          <div className='date'>
            <div className='date-input'>
              <FaCalendarAlt size={20} />
              <button>
                <input type="date" value={date} onChange={handleDateChange} placeholder='Select Dates' />
              </button>
            </div>
            <p>
              <Icon icon='lucide:calendar-days' />{' '}
              {date ? date : "No date selected"}
            </p>
          </div>
        </div>
      </section>
      <State />
      <Row>
        <Col md={7}>
          <SalesGraph />
        </Col>
        <Col md={5}>
          <BestSellers />
        </Col>
      </Row>
      <RecentOrders />
    </>

  );
};

export default Dashboard;
