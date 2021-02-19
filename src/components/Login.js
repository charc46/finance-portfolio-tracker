import React, { useState } from 'react';
import axios from 'axios';

const Login = ({setToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const credentialSubmit = () => {
    const signIn = async () => {
      const url = "http://localhost:3001/api/v1/users/login"
      const { data } = await axios.post(url, {
        headers: {"ContentType": "application/json"},
        body: JSON.stringify({
          "email": email,
          "password": password
        })
      })
      localStorage.setItem("token", data.token);
      setToken(data.token);
    }
    signIn();
  }

  return (
    <div className='ui container'>
      <h1>Please Log In</h1>
      <div className='ui form' >
        <label>Email: </label>
        <input type="email" onChange={e => setEmail(e.target.value)}/>
        <label>Password: </label>
        <input type="password" onChange={e => setPassword(e.target.value)} />
        <button onClick={credentialSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login
