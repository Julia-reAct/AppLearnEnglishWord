import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './element/MainPage'
import AddWord from './element/AddWord/AddWord'
import Practice from './element/Practice/Practice'
import Library from './element/Library/Library'

function App() {
    const [wordlist] = useState({
        'parents':'родичі',
        'mother':'мати',
        'father':'батько'}
    );
    const onSubmit = (NameEng,NameUkr) => {
        console.log('some data inside app.js: ', NameEng,NameUkr);
        wordlist[NameEng.toLowerCase()]=NameUkr.toLowerCase()
    }


  return (<div className="app">
      <header className="app__header">
          <BrowserRouter className='app__browser_router'>
              <Routes className='app__routers_list'>
                  <Route className='app__router' path='/' element={<MainPage/>}>
                  <Route className='app__router' path='AddWord' element={<AddWord onSubmit={onSubmit}  />}/>
                  <Route className='app__router' path='Practice' element={<Practice wordlist={wordlist} />}/>
                  <Route className='app__router' path='Library' element={<Library wordlist={wordlist} />}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
