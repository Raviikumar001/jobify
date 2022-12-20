import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, FormRow, Alert } from "../components";
import { useAppContext } from "../context/appContext";
import Wrapper from "../wrapper/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  
};


const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  //global State

     const {user,isLoading, showAlert, displayAlert, registerUser, loginUser} =useAppContext();
  


  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value}); 
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, isMember}= values;

    if(!email || !password || (!isMember && !name))
    {
      displayAlert()
      return
    }
    const currentUser = {name,email,password}
    if(isMember){
      loginUser(currentUser);
    }else{
      registerUser(currentUser);
    }

    // console.log(values)
  };

  useEffect( ()=>{
      if(user){
        setTimeout( ()=>{
          navigate('/')

        },3000)
      }
  }, [user,navigate])
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/*password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit  
        </button>
        <p>
          {values.isMember ? 'Not a memeber yet' : "Already a member?"}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember? 'Register' : 'Login'};  
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
