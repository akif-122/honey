import React, { useState } from 'react'
import { FaSearch, FaTimes, FaUser } from "react-icons/fa"
import { FaBarsStaggered } from "react-icons/fa6"
import { Container, Navbar } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

import logo from "../../assets/images/logo.png"

import "./style.css"

const Header = () => {

    // HANDLE SEARCH BAR
    const [search, setSearch] = useState(false);
    const handleSearch = () => {
        setSearch(!search)
    }

    // HANDLE handleNavbar
    const [nav, setNav] = useState(false);
    const handleNavbar = () => {
        setNav(!nav)
    }



    return (
        <>
            <header>
                <Container>
                    <Navbar expand="lg">
                        <Navbar.Brand className='logo' data-aos="fade-right">
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                        <button className='nav-toggler ms-auto d-lg-none' onClick={handleNavbar} data-aos="fade-left">
                            {nav ? <FaTimes /> : <FaBarsStaggered />}
                        </button>
                        <div className={nav ? 'navbar-collapse active' : 'navbar-collapse'} id='navs'>
                            <button className='nav-toggler ms-auto d-lg-none' onClick={handleNavbar}>
                                <FaTimes />
                            </button>

                            <ul className='navbar-nav ms-auto' data-aos="zoom-in">
                                <li><NavLink to="/" className='nav-link '  activeclassname="active">Home</NavLink></li>
                                <li><NavLink to="/about" className='nav-link'  >About</NavLink></li>
                                <li><NavLink to="/quality" className='nav-link' >Quality</NavLink></li>
                                <li><NavLink to="/contact" className='nav-link' >Contact Us</NavLink></li>
                            </ul>

                            

                        </div>
                        <div className="nav-right d-flex align-items-center" data-aos="fade-left">
                                <Link><FaUser /></Link>
                                <div className='search-wrap d-flex align-items-center'>
                                    <button className='search-btn ' onClick={handleSearch}>
                                        {search ? <FaTimes /> : <FaSearch />}
                                    </button>
                                    <div className={search ? "search-container active" : "search-container"}>
                                        <form action="#">
                                            <div className="input-group">
                                                <input type="search" placeholder='Search' className='form-control' />
                                                <button className='m-btn btn btn-primary btn-input-group-text '><FaSearch /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                    </Navbar>

                </Container>
            </header>
        </>
    )
}

export default Header