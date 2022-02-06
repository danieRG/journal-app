import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import { startRegisterEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {

   const [formValues, handleInputChange] = useForm({
    name: 'Martin',
    email: 'dani@gmail.com',
    password: '123456',
    confirm: '123456'
  });

  const {name, email, password, confirm} = formValues;

  const dispatch = useDispatch();
  const {msgError} = useSelector(state => state.ui);

  const handleRegister = (e) => {
    e.preventDefault();
    if(isFormValid()){
      dispatch(startRegisterEmailPassword(name, email, password));
    }
  }

  const isFormValid = () => {
    if(name.trim().length === 0){
      dispatch(setError('Name is required'));
      return false;
    }else if(!validator.isEmail(email)){
      dispatch(setError('Email is invalid'));
      return false;
    }else if(password !== confirm || password.length < 5){
      dispatch(setError('Password should be at least 5 characters and match with confirm'));
      return false;
    }

    dispatch(removeError());
    return true;
  }

  return <>
      <h3 className='auth__title'>Register</h3>
      <form onSubmit={handleRegister}>

        {
        msgError&&
          <div className='auth__alert-error'>
          { msgError }
        </div>
        }
          <input 
            type="text" 
            placeholder="Name" 
            name="name" 
            className='auth_input'
            value={name}
            onChange={handleInputChange} 
            />

          <input 
            type="email" 
            placeholder="Email" 
            name="email" 
            className='auth_input' 
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
            />

          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            className='auth_input'
            value={password}
            onChange={handleInputChange}
            />

          <input 
            type="password" 
            placeholder="Confirm Password" 
            name="confirm" 
            className='auth_input'
            value={confirm}
            onChange={handleInputChange}
            />

          <button type='submit' className='btn btn-primary btn-block mb-5'>
            Register
          </button>

            <Link to="/auth/login" className='link'>
              Already have an account?
            </Link>
      </form>
  </>;
};
