import React from 'react'
import { useForm } from 'react-hook-form'
import './AddWord.css'
import toast, { Toaster } from 'react-hot-toast'

const AddWord=(props)=>{
    const { register, formState:{ errors }, handleSubmit } = useForm({
        criteriaMode: 'all',
    });
    const onSubmit = (data) =>{
        toast.success('Your word is add!',{duration: 1000, position: 'top-center',})
        let NameEng =data['NameEng']
        let NameUkr=data['NameUkr']
        return props.onSubmit(NameEng,NameUkr)
    }

    return(<div className='add_word'>
            <form className='add_word__form' onSubmit={handleSubmit(onSubmit)}>
                <div className='add_word__block_add'>
                    <label className='add_word__label'>
                         Word English
                    </label>
                    <input className='add_word__input' placeholder='Word English'
                       {
                           ...register('NameEng',
                           {required:true,
                               minLength:1,
                               maxLength: 20,
                               pattern: /^[A-Za-z]+$/i })
                       }
                    />
                    {errors.NameEng &&
                    <small className='add_word__error_message'>
                        is invalid max length 20 only English letter
                    </small> }
                </div>

                <div className='add_word__block_add'>
                    <label className='add_word__label'>
                        Word Ukraine
                    </label>
                    <input className='add_word__input' placeholder='Word Ukraine'
                       {...register('NameUkr',
                           {required:true,
                               minLength:1,
                               maxLength: 20,
                               pattern:/^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/i} )}/>
                    {errors.NameUkr &&
                    <small className='add_word__error_message'>
                        is invalid max length 20 only Ukraine letter
                    </small> }
                </div>
                <input className='add_word__button' type='submit' value='Send' />
                <Toaster />
            </form>
        </div>
    )
}
export default AddWord;
