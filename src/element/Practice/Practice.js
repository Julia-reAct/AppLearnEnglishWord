import React, {useState, useEffect} from 'react'
import RandomUkrOrEngWord from './RandomCreater'
import ShowSuccessMessage from '../../pages/ShowMessageSuccessOrError'
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
            initialized=false
        } else {}
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
            ShowSuccessMessage()
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
                <div className='practice__try-again'>
                <input className='practice__button-again' value='Try again' type='submit' onClick={handleTryAgain} />
                </div>
                :
                <div className='practice__check'>
                    <div className='practice__text'>
                        <div className='practice__check-word'>{showNumber===0?ukrainianWord:englishWord}</div>
                    </div>
                    <div className='practice__answers'>
                        {word.map((word =>
                            <button className={wordForCheck.includes(word)?'true':'false'}
                                    key={word}
                                    onClick={() => {onSubmit(word)}}>
                                {word}
                            </button>
                    ))}
                    </div>
                </div>}
        </div>
    )
}
export default Practice;

