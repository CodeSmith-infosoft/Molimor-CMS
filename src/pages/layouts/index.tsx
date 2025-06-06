import logo from "@/assets/image/logo.png";
import { MainContext } from "@/context/mainContext";
import { getCategoryList } from "@/service/asyncStore/action/category";
import { categoryListType } from "@/types/categoryTypes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode, useContext, useEffect, useState } from "react";
import {
  Collapse,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { BsBoxes } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  FaAngleDown,
  FaAngleUp,
  FaChevronDown,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { MdAddLocationAlt, MdDashboard, MdSubscriptions } from "react-icons/md";
import { PiCourtBasketballFill } from "react-icons/pi";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { TfiLayoutSliderAlt } from "react-icons/tfi";

type LayoutProps = {
  children: ReactNode;
};

const Layouts = ({ children }: LayoutProps) => {
  const { categoryChange }: any = useContext(MainContext);
  const { id } = useParams();
  const location = useLocation();
  const { pathname } = location;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState<categoryListType[]>([]);
  
  useEffect(() => {
    getCategoryList({}).then((res) => {
      if (res.success) {
        setCategoryList(res.data);
      }
    });
  }, [categoryChange]);

  const handleCategories = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="layout">
        <div className="sidebar">
          <div className="app-menu h-100">
            <div className="menu-logo">
              <img src={logo} alt={logo} />
            </div>
            <div className="meun-items">
              <ul>
                <li className={pathname === "/" ? "active-menu" : ""}>
                  <Link to="/">
                    <MdDashboard size={32} /> Dashboard
                  </Link>{" "}
                </li>
                <li className={pathname === "/product" ? "active-menu" : ""}>
                  <div className="d-flex align-items-center menu-items">
                    <Link to="/product">
                      <BsBoxes size={32} /> Products
                    </Link>{" "}
                    <span>
                      {open ? (
                        <FaAngleUp size={18} />
                      ) : (
                        <FaAngleDown size={18} />
                      )}{" "}
                    </span>
                  </div>
                </li>
                <li className={pathname === "/categories" ? "active-menu" : ""}>
                  <div className="d-flex align-items-center menu-items">
                    <Link to="/categories" onClick={handleCategories}>
                      <Icon icon="line-md:list-3-filled" width={32} />{" "}
                      Categories
                    </Link>{" "}
                    <span>
                      {open ? (
                        <FaAngleUp size={18} />
                      ) : (
                        <FaAngleDown size={18} />
                      )}{" "}
                    </span>
                  </div>
                  <Collapse in={open}>
                    <div className="drop-items">
                      {/* <div className="add-category">
                        <FaPlus /> Add Categories
                      </div> */}
                      {categoryList.length ? (
                        categoryList.map((category) => (
                          <label
                            className={`category-checkbox ${
                              id === category._id ? "active" : ""
                            }`}
                            onClick={() =>
                              navigate(`/sub-categories/${category._id}`)
                            }
                          >
                            <label className="custom-checkbox-label">
                              <input
                                type="checkbox"
                                checked={id === category._id}
                                readOnly
                              />
                              <span className="custom-checkbox-box"></span>
                            </label>

                            {category.name}
                          </label>
                        ))
                      ) : (
                        <></>
                      )}
                    </div>
                  </Collapse>
                </li>
                <li className={(pathname === "/orders" || pathname.split('/')[1] === 'order') ? "active-menu" : ""}>
                  <Link to="/orders">
                    <CgProfile size={32} /> Orders
                  </Link>{" "}
                </li>
                <li className={(pathname === "/users" || pathname.split('/')[1] === 'user') ? "active-menu" : ""}>
                  <Link to="/users">
                    <CgProfile size={32} /> Customers
                  </Link>{" "}
                </li>
                <li className={(pathname === "/coupons" || pathname.split('/')[1] === 'coupon') ? "active-menu" : ""}>
                  <Link to="/coupons">
                    <PiCourtBasketballFill size={32} /> Coupons
                  </Link>{" "}
                </li>
                <li className={pathname === "/market-place" ? "active-menu" : ""}>
                  <Link to="/market-place">
                    <MdAddLocationAlt size={32} /> Market Place
                  </Link>{" "}
                </li>
                <li className={pathname === "/social-media" ? "active-menu" : ""}>
                  <Link to="/social-media">
                    <FaInstagram size={32} /> Social Media
                  </Link>{" "}
                </li>
                <li className={pathname === "/home-banner" ? "active-menu" : ""}>
                  <Link to="home-banner">
                    <TfiLayoutSliderAlt size={32} /> Home Banner
                  </Link>{" "}
                </li>
                <li>
                  <Link to="">
                    <MdSubscriptions size={32} /> Subscription
                  </Link>{" "}
                </li>
              </ul>
              <div className="logout-btn">
                <button onClick={handleLogout}>
                  <IoLogOutSharp size={32} />
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
        <Container className="main-content">
          <div className="top-bar">
            <div className="search-box me-3">
              <FaSearch className="search-icon" />
              <input type="search" placeholder="Search for something" />
            </div>
            <div className="notification me-3">
              <IoMdNotificationsOutline size={25} />
            </div>
            <div className="profile-dropodwn">
              <Dropdown>
                <DropdownToggle>
                  <div className="dropdown-img">
                    {/* <img src={avatarImg} alt="avatarImg"  width={48} height={48}/> */}
                    <span>R</span>
                  </div>
                  <span>Randhir kumar</span>
                  <FaChevronDown />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Name: Randhir kumar</DropdownItem>
                  <DropdownItem>Email: randhir@gmail.com</DropdownItem>
                  <DropdownItem>Id: #522444</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          <div className="children">{children}</div>
        </Container>
      </div>
    </>
  );
};

export default Layouts;
