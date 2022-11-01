//import { useState } from "react"
import React, {useState} from 'react'

const Form1 = () => {
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [textarea, setTextarea] = useState('');
    const [myCar, setMyCar] = useState("Volvo");
 
    //functions to update the fields
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }
    const handleConPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
    const handleTextarea =(e)=>{
      setTextarea(e.target.value);
    }
    const handleSelect =(e)=>{
      setMyCar(e.target.value);
    }
  
    const onSubmit =(e)=>{
     if(password !== confPassword)
      {
        // if 'password' and 'confirm password'
        // does not match.
        alert("password Not Match");
      }
      else{
        // display alert box with user
        // 'name' and 'email' details .
       console.log(name, age, email, password, confPassword, myCar, textarea);
      }
      e.preventDefault();
 
    }
    
  return (
      <div>
          <div className="row justify-content-center">
              <div className="col-lg-6">
                 <form onSubmit={onSubmit}>
                    <div className="card">
                      <div className="card-header card-header-content-between">
                        <h4 className="card-header-title">Basic information</h4>
                      </div>
                      <div className="card-body">
                        <div className="row mb-3">
                          <label htmlFor="name">Full Name</label>
                          <input type="text" name={name} onChange={handleChange} />
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="age">Age</label>
                          <input type="number" name={age} onChange={handleAgeChange} />
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="email">Email</label>
                          <input type="email" name={email} onChange={handleEmailChange} />
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="password">Password</label>
                          <input type="password" name={password} onChange={handlePasswordChange} />
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="confPassword">Confirm Password</label>
                          <input type="password" name={confPassword} onChange={handleConPasswordChange} />
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="myCar">Select an option</label>
                          <select value={myCar} onChange={handleSelect}>
                            <option value="Ford">Ford</option>
                            <option value="Volvo">Volvo</option>
                            <option value="Fiat">Fiat</option>
                          </select>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="textarea">Message</label>
                          <textarea onChange={handleTextarea} value={textarea} />
                        </div>
                        <div className="row mb-3">
                          <button type="button submit" class="btn btn-warning">Save</button>
                        </div>
                      </div>
                    </div>
                </form> 
            </div>
          </div>
          
    </div>
  )
}

export default Form1
