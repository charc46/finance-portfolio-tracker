import React, { useState } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../actions'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignIn = () => {
    props.signIn(email, password)
  }

  return (
    <div className='ui container'>
      <h1>Please Log In</h1>
      <div className='ui form' >
        <label>Email: </label>
        <input type="email" name='email' onChange={e => setEmail(e.target.value)}/>
        <label>Password: </label>
        <input type="password" name='password' onChange={e => setPassword(e.target.value)} />
        <button onClick={onSignIn}>Submit</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { loggedIn: state.logged_in, currentUser: state.currentUser }
}

export default connect(mapStateToProps, { signIn })(Login)
