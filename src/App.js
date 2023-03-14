import './App.css';
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './element/MainPage'
import AddWord from './element/AddWord/AddWord'
import Practice from './element/Practice/Practice'
import Library from './element/Library/Library'

function App() {
    const [wordlist] = useState({
        "apple": "яблуко",
        "banana": "банан",
        "carrot": "морква",
        "desk": "стіл",
        "elephant": "слон",
        "frog": "жаба",
        "guitar": "гітара",
        "house": "будинок",
        "internet": "інтернет",
        "jacket": "куртка",
    });
    const onSubmit = (NameEng,NameUkr) => {
        console.log('some data inside app.js: ', NameEng,NameUkr);
        wordlist[NameEng.toLowerCase()]=NameUkr.toLowerCase()
    }

  return (<div className="app">
      <header className="app__header">
          <HashRouter className='app__browser_router'>
              <Routes className='app__routers_list'>
                  <Route className='app__router' path='/' element={<MainPage/>}>
                  <Route className='app__router' path='AddWord' element={<AddWord onSubmit={onSubmit}  />}/>
                  <Route className='app__router' path='Practice' element={<Practice wordlist={wordlist} />}/>
                  <Route className='app__router' path='Library' element={<Library wordlist={wordlist} />}/>
                  </Route>
              </Routes>
          </HashRouter>
      </header>
    </div>
  );
}

export default App;
/*const [wordlist] = useState({
        "apple": "яблуко",
        "banana": "банан",
        "carrot": "морква",
        "desk": "стіл",
        "elephant": "слон",
        "frog": "жаба",
        "guitar": "гітара",
        "house": "будинок",
        "internet": "інтернет",
        "jacket": "куртка",
        "kangaroo": "кенгуру",
        "lamp": "лампа",
        "mountain": "гора",
        "notebook": "блокнот",
        "ocean": "океан",
        "pencil": "олівець",
        "queen": "королева",
        "rabbit": "кролик",
        "sun": "сонце",
        "table": "стіл",
        "umbrella": "парасолька",
        "violin": "скрипка",
        "watermelon": "кавун",
        "xylophone": "ксилофон",
        "yogurt": "йогурт",
        "zebra": "зебра",
        "airport": "аеропорт",
        "butterfly": "метелик",
        "camera": "камера",
        "dolphin": "дельфін",
        "ear": "вухо",
        "fire": "вогонь",
        "garden": "сад",
        "hat": "капелюх",
        "island": "острів",
        "jungle": "джунглі",
        "kite": "вітрилко",
        "lemon": "лимон",
        "moon": "місяць",
        "note": "нота",
        "octopus": "осьминог",
        "pizza": "піца",
        "queen bee": "королева бджіл",
        "rainbow": "веселка",
        "sunflower": "соняшник",
        "tree": "дерево",
        "unicorn": "єдиноріг",
        "vase": "ваза",
        "waterfall": "водоспад",
        "xylophonist": "ксилофоніст",
        "yacht": "яхта",
        "zeppelin": "зепелін",
        "beach": "пляж",
        "book": "книга",
        "cat": "кіт",
        "dog": "собака",
        "egg": "яйце",
        "flower": "квітка",
        "grape": "виноград",
        "ice cream": "морозиво",
        "juice": "сік",
        "key": "ключ",
        "lion": "лев",
        "moonlight": "місячне сяйво",
        "nose": "нос",
        "ocean wave": "океан"
    });

* */