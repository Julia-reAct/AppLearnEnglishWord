import { Outlet, Link } from "react-router-dom";
import React from 'react';
import Logo from'../image/logo-removebg-preview.png'
import './MainPage.css'

const MainPage=()=>{
return(
    <div className='main_page'>
        <div className='main_page__header'>
        <img className='main_page__logo' src={Logo} alt='logo'/>
        <nav className='main_page__nav'>
            <Link className="main_page__menu-item" to='/'>Home</Link>
            <Link className="main_page__menu-item" to='/AddWord'>Add</Link>
            <Link className="main_page__menu-item" to='/Practice'>Practice</Link>
            <Link  className="main_page__menu-item" to='/Library'>Library</Link>
        </nav>
        <div className='main_page__play'>
            <button className='main_page__button-play'>
                Play
            </button>
        </div>
        </div>
        <Outlet/>
    </div>
)
}

export default MainPage;