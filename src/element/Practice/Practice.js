import React, {useState, useEffect} from 'react'
import RandomUkrOrEngWord from './RandomCreater'
import swal from 'sweetalert';
import './Practice.css'

const Practice=(props)=>{
    const [wordlistAsArrayChoose]=useState(Object.entries(props.wordlist))
    const [wordlistAsArray,setWordlistAsArray]=useState(Object.entries(props.wordlist))
    const [wordForCheck, setWordForCheck] = useState(wordlistAsArray[0])
    const [showEnd, setShowEnd]=useState( false)
    const[word,setWord]=useState([])
    const [englishWord, ukrainianWord] = wordForCheck
    let initialized = false


    const onSubmit = (data) => {
        console.log('onSubmit', data);
        if(data===ukrainianWord){
            let deleteWord =wordlistAsArray.filter(a=>a[0]!==englishWord)
            setWordlistAsArray(deleteWord)
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
    }, [wordForCheck]);

    useEffect(()=>{
        if(wordlistAsArray.length>0) {
            handleNextClick()
        }
        if(wordlistAsArray.length===0){
            setShowEnd( true)
            swal({
                title: "Good job!",
                text: "You Learn all word at the list!",
                icon: "success"
            })
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
                <input value="Try again" type="submit" onClick={handleTryAgain} />
                :
                <div>
                    <div className='practice__english-word'>{englishWord}</div>
                    {word.map((word =>
                        <button key={word} onClick={() => {onSubmit(word)}}>{word}</button>
                    ))}
                </div>}
        </div>
    )
}
export default Practice;

