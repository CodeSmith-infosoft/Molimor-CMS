import { useEffect, useState } from "react";
import "flatpickr/dist/themes/material_green.css";
import State from "@/components/dashboard-components/State";
import SalesGraph from "@/components/dashboard-components/SalesGraph";
import { Col, Row } from "react-bootstrap";
import BestSellers from "@/components/dashboard-components/BestSellers";
import RecentOrders from "@/components/dashboard-components/RecentOrders";
import { DatePicker } from "rsuite";
import { getHomePageData } from "@/service/asyncStore/action/dashboard";
import { dashboardStatsType } from "@/types/dashboardTypes";

const Dashboard = () => {
  const [filter, setFilter] = useState<{
    startDate: null | Date;
    endDate: null | Date;
  }>({
    startDate: null,
    endDate: null,
  });
  const [dashboardData, setDashboardData] = useState<dashboardStatsType | null>(
    null
  );

  useEffect(() => {
    getHomePageData({
      startDate: filter.startDate,
      endDate: filter.endDate,
    }).then((res) => {
      if (res.success) {
        setDashboardData(res.data);
      }
    });
  }, [filter]);

  return (
    <>
      <section className="dashboard">
        <div className="main-title">
          <div>
            <h1>Welcome Back Jay</h1>
            <p>Lorem ipsum dolor sit amet, welcome back Jay</p>
          </div>
          <div className="date">
            <div className="d-flex gap-3">
              <div className="date-section">
                <label className="section-label">From : </label>
                <DatePicker
                  format="yyyy-MM-dd"
                  placeholder="Select Start Date"
                  placement="bottomStart"
                  value={filter.startDate}
                  onChange={(value) =>
                    setFilter((prev) => ({ ...prev, startDate: value }))
                  }
                  disabledDate={(date?: Date) => {
                    if (!date) return false;
                    return filter.endDate
                      ? date > new Date(filter.endDate)
                      : false;
                  }}
                />
              </div>
              <div className="date-section">
                <label className="section-label">To : </label>
                <DatePicker
                  format="yyyy-MM-dd"
                  placeholder="Select Start Date"
                  placement="bottomStart"
                  value={filter.endDate}
                  onChange={(value) =>
                    setFilter((prev) => ({ ...prev, endDate: value }))
                  }
                  disabledDate={(date?: Date) => {
                    if (!date) return false;
                    return filter.startDate
                      ? date < new Date(filter.startDate)
                      : false;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <State dashboardData={dashboardData} />
      <Row>
        <Col md={7}>
          <SalesGraph dashboardData={dashboardData} filter={filter} />
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
