/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect, useState } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
import LogoutPage from "./Logout";
/// Image
import profile from "../../../images/profile/pic1.jpg";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const { iconHover, sidebarposition, headerposition, sidebarLayout } =
    useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector(".heart");
    function heartBlast() {
      return handleheartBlast.classList.toggle("heart-blast");
    }
    handleheartBlast.addEventListener("click", heartBlast);
  }, []);
  //let scrollPosition = useScrollPosition();
  // For scroll
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
      "",
      "dashboard-dark",
      "search-jobs",
      "applications",
      "my-profile",
      "statistics",
      "companies",
      "task",
    ],
    job = [
      "job-list",
      "job-view",
      "job-application",
      "apply-job",
      "new-job",
      "invite-student",
    ],
    students = [
      "students-list",
      "user-profile",
      "offers-list",
      "internship-list",
    ],
    statistics = ["statistics"],
    // app = [
    //   "app-profile",
    //   "post-details",
    //   "app-calender",
    //   "email-compose",
    //   "email-inbox",
    //   "email-read",
    //   "ecom-product-grid",
    //   "ecom-product-list",
    //   "ecom-product-order",
    //   "ecom-checkout",
    //   "ecom-invoice",
    //   "ecom-customers",
    //   "post-details",
    //   "ecom-product-detail",
    // ],
    // email = ["email-compose", "email-inbox", "email-read"],
    // shop = [
    //   "ecom-product-grid",
    //   "ecom-product-list",
    //   "ecom-product-list",
    //   "ecom-product-order",
    //   "ecom-checkout",
    //   "ecom-invoice",
    //   "ecom-customers",
    //   "ecom-product-detail",
    // ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      "chart-chartist",
      "chart-sparkline",
      "chart-apexchart",
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-media-object",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    plugins = [
      "uc-select2",
      "uc-sweetalert",
      "uc-toastr",
      "uc-noui-slider",
      "map-jqvmap",
      "uc-lightgallery",
    ],
    redux = ["redux-form", "redux-wizard", "todo"],
    widget = ["widget-basic"],
    forms = [
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];
  return (
    <div
      className={`dlabnav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? hideOnScroll > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <PerfectScrollbar className="dlabnav-scroll">
        <Dropdown as="div" className=" header-profile2 dropdown">
          <Dropdown.Toggle
            variant=""
            as="a"
            className="nav-link i-false c-pointer"
            // href="#"
            role="button"
            data-toggle="dropdown"
          >
            <div className="header-info2 d-flex align-items-center">
              <img src={profile} width={20} alt="" />
              <div className="d-flex align-items-center sidebar-info">
                <div>
                  <span className="font-w400 d-block">Franklin Jr</span>
                  <small className="text-end font-w400">Superadmin</small>
                </div>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu
            align="right"
            className=" dropdown-menu dropdown-menu-end"
          >
            <Link to="/app-profile" className="dropdown-item ai-icon">
              <svg
                id="icon-user1"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
              <span className="ms-2">Profile </span>
            </Link>
            <Link to="/email-inbox" className="dropdown-item ai-icon">
              <svg
                id="icon-inbox"
                xmlns="http://www.w3.org/2000/svg"
                className="text-success"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="ms-2">Inbox </span>
            </Link>
            <LogoutPage />
          </Dropdown.Menu>
        </Dropdown>
        <MM className="metismenu" id="menu">
          <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#">
              <i className="flaticon-025-dashboard"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "dashboard" ? "mm-active" : ""}`}
                  to="/dashboard"
                >
                  {" "}
                  Dashboard
                </Link>
              </li>
              
              <li>
                <Link
                  className={`${path === "my-profile" ? "mm-active" : ""}`}
                  to="/my-profile"
                >
                  {" "}
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "statistics" ? "mm-active" : ""}`}
                  to="/statistics"
                >
                  Statistics
                </Link>
              </li>
              {/* <li><Link className={`${path === "companies" ? "mm-active" : ""}`} to="/companies">Companies</Link></li>
              <li><Link className={`${path === "task" ? "mm-active" : ""}`} to="/task">Task</Link></li> */}
            </ul>
          </li>
          <li className={`${job.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow" to="#">
              <i className="flaticon-093-waving"></i>
              <span className="nav-text">Jobs</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "job-list" ? "mm-active" : ""}`}
                  to="/job-list"
                >
                  Job Lists
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "job-view" ? "mm-active" : ""}`}
                  to="/job-view"
                >
                  Job View
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "job-application" ? "mm-active" : ""}`}
                  to="/job-application"
                >
                  Job Application
                </Link>
              </li>
              {/* <li><Link className={`${path === "apply-job" ? "mm-active" : ""}`} to="/apply-job">Apply Job</Link></li>
					<li><Link className={`${path === "new-job" ? "mm-active" : ""}`} to="/new-job">New Job</Link></li> */}
              <li>
                <Link
                  className={`${path === "invite-student" ? "mm-active" : ""}`}
                  to="/invite-student"
                >
                  Invite Student
                </Link>
              </li>
            </ul>
          </li>

          <li className={`${students.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow" to="#">
              <i className="flaticon-039-goal"></i>
              <span className="nav-text">Students</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "students-list" ? "mm-active" : ""}`}
                  to="/students-list"
                >
                  Students List
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "user-profile" ? "mm-active" : ""}`}
                  to="/user-profile"
                >
                  User Profile
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "offer-table" ? "mm-active" : ""}`}
                  to="/offer-table"
                >
                  Offers List
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "internship-table" ? "mm-active" : ""
                  }`}
                  to="/internship-table"
                >
                  Internship List
                </Link>
              </li>
            </ul>
          </li>

          <li className={`${statistics.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow" to="#">
              <i className="flaticon-014-checkmark"></i>
              <span className="nav-text">Placement Statistics</span>
            </Link>
            <ul>
              <li>
                <Link
                  className={`${path === "statistics" ? "mm-active" : ""}`}
                  to="/statistics"
                >
                  Placement Statistics
                </Link>
              </li>
            </ul>
          </li>
        </MM>
        {/* <div className="plus-box">
          <p className="fs-14 font-w600 mb-2">
            Let Jobick Managed
            <br />
            Your Resume Easily
            <br />
          </p>
          <p>Lorem ipsum dolor sit amet</p>
        </div> */}
        <div className="copyright">
          <p>
            <strong>Jobick Job Admin</strong> © 2022 All Rights Reserved
          </p>
          <p className="fs-12">
            Made with <span className="heart"></span> by DexignLabs
          </p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
