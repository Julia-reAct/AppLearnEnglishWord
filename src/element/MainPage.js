import { Outlet, Link } from 'react-router-dom'
import React from 'react';
import Logo from'../image/logo-removebg-preview.png'
import './MainPage.css'

const MainPage=()=>{
return(
    <div className='header'>
        <div className='header__top-nav'>
            <img className='header__img' src={Logo} alt='logo'/>
            <input id="header__menu-toggle" type='checkbox'/>
            <label className='header__menu-button-container' htmlFor='header__menu-toggle'>
                <div className='header__menu-button'></div>
            </label>
            <ul className='header__menu'>
                    <li>
                        <Link className='header__link' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='header__link' to='/AddWord'>Add</Link>
                    </li>
                    <li>
                        <Link className='header__link' to='/Practice'>Practice</Link>
                    </li>
                    <li>
                        <Link className='header__link' to='/Library'>Library</Link>
                    </li>
            </ul>
            <Link className='header__button' to='/Practice' >Play</Link>

        </div>
        <Outlet/>
    </div>)
}
export default MainPage;