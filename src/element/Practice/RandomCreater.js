import React, {useState} from 'react'

const RandomUkrOrEngWord =(wordlistAsArrayChoose,englishWord,ukrainianWord,setWord,setShowNumber)=>{
    let chooseLanguage=Math.random()<0.5?[0,englishWord]:[1,ukrainianWord]
    const [number, word] = chooseLanguage
    console.log(chooseLanguage)
    let words = []
    let min, max, r, n, p
    min = 1
    max = (wordlistAsArrayChoose.length-1)
    r = 3
    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = words.includes(wordlistAsArrayChoose[n][number]) || wordlistAsArrayChoose[n][number] === word
            if (!p) {
                words.push(wordlistAsArrayChoose[n][number]);
            }
        }
        while (p);
    }
    let randomPositionTrueWord = Math.random() * (4 - 0) + 0
    words.splice(randomPositionTrueWord, 0, word)
    setWord(words)
    setShowNumber(number)
}
export default RandomUkrOrEngWord;