import React from 'react';
import { useForm } from "react-hook-form";
import './AddWord.css'

const AddWord=(props)=>{
    const { register, formState:{ errors }, handleSubmit } = useForm({
        criteriaMode: 'all',
    });
    const onSubmit = (data) =>{
        let NameEng =data['NameEng']
        let NameUkr=data['NameUkr']
        return props.onSubmit(NameEng,NameUkr)

    }

    return(<div className='add_word'>
            <form className='add_word__form' onSubmit={handleSubmit(onSubmit)}>
                <div className='add_word__block_add'>
                    <label className='add_word__label'>
                         English word
                    </label>
                    <input className='add_word__input' placeholder="Word English"
                       {
                           ...register('NameEng',
                           {required:true,
                               minLength:2,
                               maxLength: 45,
                               pattern: /^[A-Za-z]+$/i })
                       }
                    />
                    {errors.NameEng &&
                    <small className='add_word__error_message'>
                        English word is wrong
                    </small> }
                </div>

                <div className='add_word__block_add'>
                    <label className='add_word__label'>
                        Ukraine word
                    </label>
                    <input className='add_word__input' placeholder="Word Ukraine"
                       {...register('NameUkr',
                           {required:true,
                               minLength:2,
                               maxLength: 31,
                               pattern:/^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/i} )}/>
                    {errors.NameUkr &&
                    <small className='add_word__error_message'>
                         Ukraine word is wrong
                    </small> }
                </div>
                <input className='add_word__button' type="submit" value="Send" />
            </form>
        </div>
    )
}

export default AddWord;
