import React, { useState} from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import './Practice.css'



const Practice=(props)=>{
    const wordlistAsArray=Object.entries(props.wordlist)
    const [counter, setCounter] = useState(0);
    const [englishWord, ukrainianWord] = wordlistAsArray[counter]
    const { register, handleSubmit, formState:{ errors } } = useForm({
        criteriaMode: 'all',
    });
    const onSubmit = (data) => {
        if (data["NameUkrCheck"].toLowerCase()===ukrainianWord){
            return swal({
                    title: "Good job!",
                    text: "You write word success!",
                    icon: "success",
                });
        }
            return swal({
                title: "Oops",
                text: "Something went wrong!",
                icon: "error"
            });

    }
    const handleNextClick=()=>{
        if((counter+1)>=wordlistAsArray.length){
            return setCounter(0)
        }
        return setCounter(counter+1)
    }
    let numbers = [];
    let min, max, r, n, p;
    min = 1;
    max = 50;
    r = 3;

    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numbers.includes(n);
            if(!p){
                numbers.push(n);
            }
        }
        while(p);
    }

    console.log(numbers.join(" - "));

    return(<div className='practice'>
            <div className='practice__english-word'>{englishWord}</div>
            <form className='practice__form' onSubmit={handleSubmit(onSubmit)}>
                <div className='practice__block'>
                    <label className='practice__label'>
                        World Ukraine
                    </label>
                    <button className='practice__buttons_choice'></button>
                    <button className='practice__buttons_choice'></button>
                    <button className='practice__buttons_choice'></button>
                    <button className='practice__buttons_choice'></button>
                    <input className='practice__input' placeholder="Word Ukraine"
                           {...register("NameUkrCheck",
                               {required:true,
                                   minLength:2,
                                   maxLength: 31,
                                   pattern:/^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/i} )}/>
                    {errors.NameUkrCheck &&
                    <small className='practice__error_message'>
                        Word Ukraine is wrong
                    </small>}
                </div>
                <input className='practice__button' type="submit" />
            </form>
            <button className='practice__change_word' onClick={handleNextClick}>
                Next Word
            </button>
        </div>
    )
}

export default Practice;
