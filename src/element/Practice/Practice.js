import React, { useState,useEffect} from 'react';
import { ButtonGroup } from 'react-button-group-tis'
import swal from 'sweetalert';
import './Practice.css'



const Practice=(props)=>{
    const wordlistAsArray=Object.entries(props.wordlist)
    const [counter, setCounter] = useState(0);
    const [list,setList]=useState(true)
    const [englishWord, ukrainianWord] = wordlistAsArray[counter]
    const[word,setWord]=useState([])

    const onSubmit = (data) => {
        if(word[data]===ukrainianWord){
            handleNextClick()
            setList(true)
            return swal({
                title: "Good job!",
                text: "You write word success!",
                icon: "success"
            });
        }
        return swal({
            title: "Oops",
            text: "Something went wrong!",
            icon: "error"
        });
    }

    useEffect(()=>{
        if(list===true) {
            let numbers = []
            let min, max, r, n, p
            min = 1
            max = (wordlistAsArray.length-1)
            r = 3

            for (let i = 0; i < r; i++) {
                do {
                    n = Math.floor(Math.random() * (max - min + 1)) + min;
                    p = numbers.includes(n) || n === counter
                    if (!p) {
                        numbers.push(n);
                    }
                }
                while (p);
            }
            let randomValue = Math.random() * (4 - 0) + 0
            numbers.splice(randomValue, 0, counter)
            let word = numbers.map(a=>wordlistAsArray[a][1])
            setList(false)
            return setWord(word)
        }
    })

    const handleNextClick=()=>{
        if((counter+1)>=wordlistAsArray.length){
            return setCounter(0)
        }
        return setCounter(counter+1)
    }


    return(<div className='practice'>
            <div className='practice__english-word'>{englishWord}</div>
                    <ButtonGroup
                        items={word}
                        onItemClick={onSubmit}
                        darkMode={false}
                    />
        </div>
    )
}

export default Practice;

