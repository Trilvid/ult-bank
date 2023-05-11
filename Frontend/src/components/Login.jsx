import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className='login'>
        <section className='holder'>

                <div className='span'>
                    <img src="logo512.png" alt="file not found" width="80px" />
                    <h2> login to your <span>ult-bank</span> account</h2>
                    <p>please provide valid information to login</p>
                    <h3>don't have an account ? <Link to="#"> sign up here</Link></h3>
                </div>

                <div className="logform">

      <div className="transfer">
        <header>
          <img src="./logo512.png" alt="file not found" />
          <h1>login</h1>
        </header>

        <form action="#">
          
          <span className="input-group">
            <input type="text" name="email" autoComplete='off' className='input' required/>
            <label className='user-label'>email*</label>
          </span>

          <span className='input-group'>
            <input type="password" name="password" autoComplete='off' className='input' required />
            <label  className='user-label'>password*</label>
          </span>

          <span className='re-me'>
            <input type="checkbox" name="remeber" id="reme" />
            <p><label htmlFor="reme">remember me?</label></p>
          </span>
          
        </form>
        
          <span>
            <button><span>login</span></button>
          </span>

                  </div>
                </div>
                
        </section>
    </div>
    </>
  )
}

export default Login