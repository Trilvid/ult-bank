import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [check, setCheck] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
    .post('http://localhost:5000/api/v1/auth/login', { email, password, check })
    .then((response) => {
      console.log(response.data);

      if(response.data.user.role === "user") {
      navigate('/dashboard')
    }
    else{
       navigate('/admin')
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
    <div className='login'>
        <section className='holder'>

                <div className='span'>
                    <img src="logo512.png" alt="file not found" width="80px" />
                    <h2> login to your <span>ult-bank</span> account</h2>
                    <p>please provide valid information to login</p>
                    <h3>don't have an account ? <Link to="/signUp"> sign up here</Link></h3>
                </div>

                <div className="logform">

      <div className="transfer">
        <header>
          <img src="./logo512.png" alt="file not found" />
          <h1>login</h1>
        </header>

        <form  onSubmit={handleSubmit}>
          
          <span className="input-group">
            <input 
            type="email" 
            name="email" 
            autoComplete='off' 
            className='input' 
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
            <label className='user-label'>email*</label>
          </span>

          <span className='input-group'>
            <input 
            type="password" 
            name="password" 
            autoComplete='off' 
            className='input' 
            required 
            value={password}
            onChange={(event) => setPassword(event.target.value)} 
            />
            <label  className='user-label'>password*</label>
          </span>

          <span className='re-me'>
            <input 
            type="checkbox" 
            name="rememberme" 
            id="reme"
            value={check}
            onChange={(event) => setCheck(event.target.value)}
             />
            <p><label htmlFor="reme">remember me?</label></p>
          </span>
          
          <span>
            <button type='submit'><span>login</span></button>
          </span>
        </form>
        

                  </div>
                </div>
                
        </section>
    </div>
    </>
  )
}

export default Login