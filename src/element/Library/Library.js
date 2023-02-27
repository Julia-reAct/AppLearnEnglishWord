import React from 'react';
import './Library.css'

const Library=(props)=>{
    return(<div className='library'>
        {Object.entries(props.wordlist).map(([englishWorld,ukrainianWord])=>{
            return(
                <div className='library__block'>
                    <div className='library__word_eng'>{englishWorld}</div>
                    <div className='library__word_ukr'>{ukrainianWord}</div>
                </div>
            )
        })
        }
    </div>)

}


export default Library;
