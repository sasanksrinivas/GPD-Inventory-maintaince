import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from "../UseAuth";

function Layout({ children }) {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/');
    }

    function camelCase(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
    const location = useLocation()
    

    const { authed } = useContext(useAuth);

    return (
        <div>
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <div className="app-header header-shadow">
                    <div className="app-header__logo">
                        {/* <div className="logo-src" style={{ background: 'none' }} /> */}
                        <div className="brand-logo">
                            <img src='/logo.png' width={80} height={40} alt="logo" />
                        </div>
                        <div className="header__pane ml-auto">
                            <div>
                                <button type="button" className="hamburger">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="app-header__mobile-menu">
                        <div>
                            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="app-header__menu">
                        <span>
                            <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span className="btn-icon-wrapper">
                                    <i className="fa fa-ellipsis-v fa-w-6" />
                                </span>
                            </button>
                        </span>
                    </div>
                    <div className="app-header__content">
                        <div className="app-header-right">
                            <div className="header-btn-lg pr-0">
                                <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                            <div className="btn-group">
                                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                                    <img width={42} className="rounded-circle" src="/Images/auth/user.png" alt="" />
                                                    {/* <i className="fa fa-angle-down ml-2 opacity-8" /> */}
                                                </a>
                                                <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                                    <Link to="/profile" type="button" tabIndex={0} className="dropdown-item">Profile</Link>
                                                    <div tabIndex={-1} className="dropdown-divider" />
                                                    <button type="button" tabIndex={0} className="dropdown-item" onClick={logout}>logout</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-content-left  ml-3 header-user-info d-none">
                                            <div className="widget-heading">
                                                Student Dash
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-main">
                    <div className="app-sidebar sidebar-shadow">
                        <div className="app-header__logo">
                            <div className="logo-src" />
                            <div className="header__pane ml-auto">
                                <div>
                                    <button type="button" className="hamburger close-sidebar-btn hamburger--elastic">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="app-header__mobile-menu">
                            <div>
                                <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="app-header__menu">
                            <span>
                                <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                    <span className="btn-icon-wrapper">
                                        <i className="fa fa-ellipsis-v fa-w-6" />
                                    </span>
                                </button>
                            </span>
                        </div>    <div className="scrollbar-sidebar">
                            <div className="app-sidebar__inner">
                                {Boolean(authed.role == 'ADMIN') &&
                                    <ul className="vertical-nav-menu">
                                        <li className="app-sidebar__heading">Dashboards</li>
                                        <li>
                                            <Link to="/admin/dashboard" className="mm-active">
                                                <i className="metismenu-icon pe-7s-rocket" />
                                                Admin Dashboard
                                            </Link>
                                        </li>
                                        <li className="app-sidebar__heading">Assets Management</li>
                                        <li>
                                             <Link to="/assets/requests">
                                                <i className="metismenu-icon pe-7s-diamond" />
                                                Assets Requests
                                                {/* <i className="metismenu-state-icon pe-7s-angle-down caret-left" /> */}
                                            </Link>
                                            <Link to="/assets/returns">
                                                <i className="metismenu-icon pe-7s-diamond" />
                                                Return Assets
                                                {/* <i className="metismenu-state-icon pe-7s-angle-down caret-left" /> */}
                                            </Link>
                                            <Link to="/assets/history">
                                                <i className="metismenu-icon pe-7s-diamond" />
                                                Assets History
                                                {/* <i className="metismenu-state-icon pe-7s-angle-down caret-left" /> */}
                                            </Link>
                                           
                                        </li>
                                    </ul>}
                                {Boolean(authed.role == 'STUDENT') &&
                                    <ul className="vertical-nav-menu">
                                        <li className="app-sidebar__heading">Dashboards</li>
                                        <li>
                                            <Link to="/student/dashboard" className={location.pathname.includes('/student/dashboard')?'mm-active':''}>
                                                <i className="metismenu-icon pe-7s-rocket" />
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li className="app-sidebar__heading">Assets Management</li>
                                        <li>
                                            <Link to="/my-assets" className={location.pathname.includes('/my-assets')?'mm-active':''}>
                                                <i className="metismenu-icon pe-7s-rocket" />
                                                My Assets
                                            </Link>
                                        </li>
                                    </ul>}
                                {Boolean(authed.role == 'FACULTY') &&
                                    <ul className="vertical-nav-menu">
                                        <li className="app-sidebar__heading">Dashboards</li>
                                        <li>
                                            <Link to="/faculty/dashboard" className="mm-active">
                                                <i className="metismenu-icon pe-7s-rocket" />
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li className="app-sidebar__heading">Assets Management</li>
                                        <li>
                                            <Link to="/my-assets" className="">
                                                <i className="metismenu-icon pe-7s-rocket" />
                                                My Assets
                                            </Link>
                                        </li>
                                    </ul>}
                            </div>
                        </div>
                    </div>    <div className="app-main__outer">
                        {children}
                        <div className="app-wrapper-footer">
                            <div className="app-footer">
                                <div className="app-footer__inner">

                                    <div className="app-footer-right">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <div className="nav-link">
                                                    Copyright
                                                    <div className="badge badge-success mr-1 ml-0">
                                                        <small>2022</small>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout