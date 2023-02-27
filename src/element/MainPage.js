import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { slide as Menu } from "react-burger-menu";
import './MainPage.css'

const MainPage=()=>{
return(
    <div className='main_page'>
        <nav className='main_page__nav'>
            <Menu className='main_page__menu'>
                <Link className="main_page__menu-item" to='/'>Home</Link>
                  <Link className="main_page__menu-item" to='/AddWord'>Add</Link>
                   <Link className="main_page__menu-item" to='/Practice'>Practice</Link>
                   <Link  className="main_page__menu-item" to='/Library'>Library</Link>
            </Menu>
        </nav>
        <Outlet/>
    </div>
)
}

export default MainPage;