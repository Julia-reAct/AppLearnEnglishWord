import React from 'react'
import './HomePage.css'
import {Link} from 'react-router-dom'

const HomePage=()=>{
    return(<div className='home_page'>
        <div className='home_page__block_text'>
            <div className='home_page__text_for_user'>Want to memorize some new words?</div>
        </div>
        <div className='home_page__block_button'>
            <Link to='/Practice' className='home_page__button-play'>
                Try it now!
            </Link>
        </div>
    </div>)
}
export default HomePage;
