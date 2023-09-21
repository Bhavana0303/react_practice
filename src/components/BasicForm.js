import useInput from "../hooks/useInput";

const isNotEmpty=value=>value.trim()!=='';
const isEmail=value=>value.includes('@');
const BasicForm = (props) => {
    const {value: firstNameValue, 
           isValid: firstNameIsValid,
           valueChangeHandler:FirstNameChangeHandler,
           inputBlurHandler: firstNameBlurHandler,
           reset:resetFirstNameuseInput,
    }=useInput(isNotEmpty);
    const {value: lastNameValue, 
        isValid: lastNameIsValid,
        valueChangeHandler:lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset:resetLastNameuseInput,
     }=useInput(isNotEmpty);
     const {value: emailValue, 
        isValid: emailIsValid,
        valueChangeHandler:emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset:resetEmailuseInput,
     }=useInput(isEmail);
    
    return (
      <form>
        <div className='control-group'>
          <div className='form-control'>
            <label htmlFor='name'>First Name</label>
            <input 
            type='text'
            id='name' 
            value={firstNameValue} 
            onChnage={FirstNameChangeHandler} 
            onBlur={firstNameBlurHandler}/>
          </div>
          <div className='form-control'>
            <label htmlFor='name'>Last Name</label>
            <input 
            type='text' 
            id='name' 
            value={lastNameValue} 
            onChnage={lastNameChangeHandler} 
            onBlur={lastNameBlurHandler}/>
          </div>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>E-Mail Address</label>
          <input 
          type='text' 
          id='name'
          value={emailValue} 
          onChnage={emailChangeHandler} 
          onBlur={emailBlurHandler}/>
        </div>
        <div className='form-actions'>
          <button>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;
  