import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../style/Register.css';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/register', data);
      alert('Your user has been created');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error when registering the user');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
      <h2>Create Account</h2>

      <label>User name</label>
      <input {...register('username', { required: true })} />
      {errors.username && <p>This field is required</p>}

      <label>Email</label>
      <input {...register('email', { required: true })} />
      {errors.email && <p>This field is required</p>}

      <label>Password</label>
      <input type="password" {...register('password', { required: true })} />
      {errors.password && <p>This field is required</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;