import {useEffect, useRef, useState} from 'react'


const SimpleInput = (props) => {
    //const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);


    // useEffect(() => {
    //     if (enteredNameIsValid) {
    //         console.log('name input is valid')
    //     }
    // }, [enteredNameIsValid])

    const enteredNameIsValid = enteredName.trim() !== ''
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

    const nameInputChangeHandler = e => {
        setEnteredName(e.target.value)


        // if (e.target.value.trim() !== '') {
        //     setEnteredNameIsValid(true)
        //
        // }

    }

    const nameInputBlurHandler = e => {
        setEnteredNameTouched(true)


        // if (enteredName.trim() === '') {
        //     setEnteredNameIsValid(false)
        //
        // }

    }

    const formSubmissionHandler = e => {
        //do not send again http request on submit
        e.preventDefault()
        setEnteredNameTouched(true)

        if (!enteredNameIsValid) {
            return
        }


        console.log(enteredName)
        //reset the input field ->
        setEnteredName('')
        setEnteredNameTouched(false)

        //useRef version
        // const enteredValue = nameInputRef.current.value
        // console.log(enteredValue)
        //reset the input field -> nameInputRef.current.value = ''; (manipulating DOM, not suggested : useState instead)
    }

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler}
                       value={enteredName}/>
                {nameInputIsInvalid && <p className={'error-text'}>can not be empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
