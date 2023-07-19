import React, { useState } from 'react';

const Signin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const [errors, setErrors] = useState([]);

  function onSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Here you can add logic to handle form submission
    // For this example, let's just demonstrate setting errors if the fields are empty
    const newErrors = [];
    if (!name) {
      newErrors.push('Name is required');
    }
    if (!password) {
      newErrors.push('Password is required');
    }
    setErrors(newErrors);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <br />
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Password
          <br />
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type='submit' value='sign up' />
        <input type='button' value='Login' onClick={() => setLogin('Login clicked')} />
      </form>
      {errors && errors.map((error, index) => <p key={index}>{error}</p>)}
    </>
  );
};

export default Signin;
