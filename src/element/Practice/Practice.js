import React, {useState, useEffect} from 'react'
import RandomUkrOrEngWord from './RandomCreater'
import {ShowErrorMessage, ShowSuccessMessage} from '../../pages/ShowMessageSuccessOrError'
import './Practice.css'

const Practice=(props)=>{
    const [wordlistAsArrayChoose]=useState(Object.entries(props.wordlist))
    const [wordlistAsArray,setWordlistAsArray]=useState(Object.entries(props.wordlist))
    const [wordForCheck, setWordForCheck] = useState(wordlistAsArray[0])
    const [englishWord, ukrainianWord] = wordForCheck
    const[word,setWord]=useState([])
    const [showNumber,setShowNumber]=useState(0)
    const [showEnd, setShowEnd]=useState( false)
    let initialized = false
    const onSubmit = (data) => {
        if(data===ukrainianWord||data===englishWord){
            let deleteWord =wordlistAsArray.filter(a=>a[0]!==englishWord)
            setWordlistAsArray(deleteWord)
            ShowSuccessMessage(wordlistAsArray)
            initialized=false
        } else {
            ShowErrorMessage()
        }
    }
    useEffect(()=>{
        if(!initialized) {
            initialized = true
           RandomUkrOrEngWord(wordlistAsArrayChoose,englishWord,ukrainianWord,setWord,setShowNumber)
        }
    }, [wordForCheck]);
    useEffect(()=>{
        if(wordlistAsArray.length>0) {
            handleNextClick()
        } else {
            setShowEnd(true)
            ShowSuccessMessage(wordlistAsArray)
        }
    },[wordlistAsArray])
    const handleNextClick=()=>{
        let randomNextWord = wordlistAsArray[Math.floor(Math.random() * ((wordlistAsArray.length-1) - 0) + 0)]
        setWordForCheck(randomNextWord)
    }
    const handleTryAgain=()=>{
        setWordlistAsArray(wordlistAsArrayChoose)
        setShowEnd(false)
    }

    return(<div className='practice'>
            {showEnd?
                <input className='practice__button' value="Try again" type="submit" onClick={handleTryAgain} />
                :
                <div>
                    <div className='practice__check-word'>{showNumber===0?ukrainianWord:englishWord}</div>
                    {word.map((word =>
                        <button className='practice__answer-word' key={word} onClick={() => {onSubmit(word)}}>{word}</button>
                    ))}
                </div>}
        </div>
    )
}
export default Practice;

