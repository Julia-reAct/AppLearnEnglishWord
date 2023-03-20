import React, {useState} from 'react'

const RandomUkrOrEngWord =(wordlistAsArrayChoose,englishWord,ukrainianWord,setWord)=>{
    const [selectEngOrUkr, setSelectEngOrUkr]=useState( 1)
    let words = []
    let min, max, r, n, p
    min = 1
    max = (wordlistAsArrayChoose.length-1)
    r = 3
    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = words.includes(wordlistAsArrayChoose[n][1]) || wordlistAsArrayChoose[n][1] === ukrainianWord
            if (!p) {
                words.push(wordlistAsArrayChoose[n][1]);
            }
        }
        while (p);
    }
    let randomPositionTrueWord = Math.random() * (4 - 0) + 0
    words.splice(randomPositionTrueWord, 0, ukrainianWord)
    /*let randomChooseEngOrUkr = ((Math.random()>=0.5)? 1 : 0)
    console.log (randomChooseEngOrUkr)*/
    setWord(words)
}

export default RandomUkrOrEngWord;