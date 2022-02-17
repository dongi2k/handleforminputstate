import useInput from "../hooks/use-input";

const BasicForm = (props) => {

    const {
        value: enteredFirstName,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        reset: resetFirstName,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler
    } = useInput(value => value.trim() !== '')

    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        reset: resetLastName,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler
    } = useInput(value => value.trim() !== '')

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        reset: resetEmail,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler
    } = useInput(value => value.includes('@'))

    let formIsValid = false

    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = e => {

        e.preventDefault()

        if (!formIsValid) {
            return
        }

        resetLastName()
        resetFirstName()
        resetEmail()


    }

    const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
    const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control'
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={enteredFirstName}/>
                    {firstNameHasError && <p className={'error-text'}>can not be empty</p>}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={enteredLastName}/>
                    {lastNameHasError && <p className={'error-text'}>can not be empty</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
                {emailHasError && <p className={'error-text'}>can not be empty</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
