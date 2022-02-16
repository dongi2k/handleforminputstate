import {useRef, useState} from 'react'


const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');

    const nameInputChangeHandler = e => {
        setEnteredName(e.target.value)

    }

    const formSubmissionHandler = e => {
        //do not send again http request on submit
        e.preventDefault()
        console.log(enteredName)
        //reset the input field ->
            setEnteredName('')


        //useRef version
        // const enteredValue = nameInputRef.current.value
        // console.log(enteredValue)
        //reset the input field -> nameInputRef.current.value = ''; (manipulating DOM, not suggested : useState instead)
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='form-control'>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
