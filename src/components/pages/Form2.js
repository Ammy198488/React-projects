import React, {useRef} from 'react'
import classes from './Form.module.css'

const Form2 = () => {

    const nameInput = useRef();
    const ageInput = useRef();
    const addressInput = useRef();
    const emailInput = useRef();

    const handlesubmit = (event) => {
        event.preventDefault()

        const enteredName = nameInput.current.value;
        const enteredAge = ageInput.current.value;
        const enteredAddress = addressInput.current.value;
        const enteredEmail = emailInput.current.value;

        const data = {
            title: enteredName,
            age: enteredAge,
            address: enteredAddress,
            email: enteredEmail,
        }
        console.log(data)
    }

  return (
    <section>
          <form className={classes.form} onSubmit={handlesubmit}>
            <div>
                <label htmlFor='title'>Name:</label>
                <input type='text' ref={nameInput} />
            </div>
            <div>
                <label htmlFor='age'>Age:</label>
                <input type='number' ref={ageInput} />
            </div>
            <div>
                <label htmlFor='address'>Address:</label>
                <input type='text' ref={addressInput} />
            </div>
            <div>
                <label htmlFor='email'>Name:</label>
                <input type='email' ref={emailInput} />
            </div>
            <button>Submit</button>
        </form>
    </section>
  )
}

export default Form2
