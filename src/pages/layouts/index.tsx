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
import { BsBoxes, BsFillBox2HeartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  FaAngleDown,
  FaAngleUp,
  FaChevronDown,
  FaMedal,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { LuFileQuestion } from "react-icons/lu";
import { MdAddLocationAlt, MdDashboard, MdSubscriptions } from "react-icons/md";
import { PiCourtBasketballFill } from "react-icons/pi";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

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
                <li className={pathname === "/" ? "active" : ""}>
                  <Link to="/">
                    <MdDashboard size={32} /> Dashboard
                  </Link>{" "}
                </li>
                <li className={pathname === "/product" ? "active" : ""}>
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
                <li className={pathname === "/categories" ? "active" : ""}>
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
                      <div className="add-category">
                        <FaPlus /> Add Categories
                      </div>
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
                <li>
                  <Link to="/orders">
                    <CgProfile size={32} /> Orders
                  </Link>{" "}
                </li>
                <li>
                  <Link to="">
                    <CgProfile size={32} /> Customers
                  </Link>{" "}
                </li>
                <li>
                  <Link to="">
                    <LuFileQuestion size={32} /> Inquiry
                  </Link>{" "}
                </li>
                <li>
                  <Link to="">
                    <PiCourtBasketballFill size={32} /> Coupons
                  </Link>{" "}
                </li>
                <li>
                  <Link to="">
                    <MdAddLocationAlt size={32} /> Market Place
                  </Link>{" "}
                </li>
                <li>
                  <Link to="">
                    <FaMedal size={32} /> Certification
                  </Link>{" "}
                </li>
                <li>
                  <Link to="">
                    <BsFillBox2HeartFill size={32} /> Media
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
