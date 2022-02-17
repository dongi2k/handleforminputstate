import {useEffect, useRef, useState} from 'react'
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

    const {
        value: enteredName,
        hasError: nameInputHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '')

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'))


    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }


    const formSubmissionHandler = e => {
        //do not send again http request on submit
        e.preventDefault()

        if (!enteredNameIsValid) {
            return
        }


        console.log(enteredName)
        //reset the input field ->
        resetNameInput()
        resetEmailInput()
        //useRef version
        // const enteredValue = nameInputRef.current.value
        // console.log(enteredValue)
        //reset the input field -> nameInputRef.current.value = ''; (manipulating DOM, not suggested : useState instead)
    }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={nameChangedHandler} onBlur={nameBlurHandler}
                       value={enteredName}/>
                {nameInputHasError && <p className={'error-text'}>can not be empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-Mail</label>
                <input type='email' id='email' onChange={emailChangedHandler} onBlur={emailBlurHandler}
                       value={enteredEmail}/>
                {emailInputHasError && <p className={'error-text'}>can not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
