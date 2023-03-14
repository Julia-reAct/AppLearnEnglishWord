import React, {useState, useEffect, useRef} from 'react'
import { ButtonGroup } from 'react-button-group-tis'
import swal from 'sweetalert';
import './Practice.css'



const Practice=(props)=>{
    const [wordlistAsArrayChoose]=useState(Object.entries(props.wordlist))
    const [wordlistAsArray]=useState(Object.entries(props.wordlist))
    const [counter, setCounter] = useState(wordlistAsArray[0])
    const [englishWord, ukrainianWord] = wordlistAsArray[counter]
    const[word,setWord]=useState([])
    let initialized = false

    const onSubmit = (data) => {
        if(word[data]===ukrainianWord){
            let NumberDelete = wordlistAsArray.splice(counter,1)
            console.log(wordlistAsArray)
            handleNextClick()
            return swal({
                title: "Good job!",
                text: "You write word success!",
                icon: "success"
            });
            initialized=false
        }
        return swal({
            title: "Oops",
            text: "Something went wrong!",
            icon: "error"
        });
    }
    useEffect(()=>{
        if(!initialized) {
            initialized = true
           RandomUkrOrEngWord(wordlistAsArrayChoose,englishWord,ukrainianWord,setWord)
        }
    }, [counter]);

    const handleNextClick=()=>{
        let randomNumber = Math.floor(Math.random() * ((wordlistAsArray.length-1) - 0) + 0)
        console.log('next counter', randomNumber);
        setCounter(randomNumber)
        if(wordlistAsArray.length===0){
            return swal({
                title: "Good job!",
                text: "You Learn all word at the list!",
                icon: "success"
            });
        }
    }

    return(<div className='practice'>
            <div>{counter}</div>
            <div className='practice__english-word'>{englishWord}</div>
                    <ButtonGroup
                        items={word}
                        onItemClick={onSubmit}
                        darkMode={false}
                    />
        </div>
    )
}
const RandomUkrOrEngWord =(wordlistAsArrayChoose,englishWord,ukrainianWord,setWord)=>{
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

export default Practice;

