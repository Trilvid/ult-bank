import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <div className='login'>
        <section className='holder'>

                <div className='span'>
                    <img src="logo512.png" alt="file not found" width="80px" />
                    <h2>create an account with <span>Ult-Bank</span></h2>
                    <p>please provide valid information to register</p>
                    <h3>have an account ? <Link to="#">login here</Link></h3>
                </div>

                <div className="form">

      <div className="transfer">
        <header>
          <img src="./favicon.ico" alt="file not found" />
          <h1>register</h1>
        </header>
        
        <form action="#">

          <span className='input-group'>
            <input type="text" name="name" autoComplete='off' className='input' required />
            <label className='user-label'>fullname*</label>
          </span>

          <span className='input-group'>
            <input type="text" name="username" autoComplete='off' className='input' required/>
            <label className='user-label'>username*</label>
          </span>

          <span className='input-group'>
            <input type="email" name="email" autoComplete='off' className='input' required />
            <label className='user-label'>email*</label>
          </span>

          <span className='input-group'>
            <input type="tel" name="mobile" autoComplete='off' className='input' required />
            <label className='user-label'>mobile number*</label>
          </span>

          <span className='input-group'>
            <input type="number" name="zipCode" autoComplete='off' className='input' required />
            <label className='user-label'>enter zip code*</label>
          </span>

          <span className='input-group'>
            <input type="text" name="country" autoComplete='off' className='input' required />
            <label className='user-label'>country*</label>
          </span>

          <span className='input-group'>
            <input type="text" name="city"  autoComplete='off' className='input' required />
            <label className='user-label'>city*</label>
          </span>

          <span className='input-group'>
            <input type="text" name="amount" autoComplete='off' className='input' required />
            <label className='user-label'>address*</label>
          </span>

          <span className='input-group'>
            <label htmlFor="id">identification type*</label>
            <select name="identification" id="id">
              <option value="">select type of id</option>
              <option value="ssn">Social number</option>
              <option value="bvn">BVN</option>
              <option value="NIN">nin</option>
              <option value="dirvers_lincence">drivers license</option>
            </select>
          </span>

          <span className='input-group'>
            <input type="number" name="idNumber" autoComplete='off' className='input' required />
            <label className='user-label'>identification number*</label>
          </span>

          <span className='input-group'>
            <input type="password" name="password" autoComplete='off' className='input' required />
            <label className='user-label'>password*</label>
          </span>

        </form>
          <span>
            <button><span>proceed</span></button>
          </span>

      {/* </div> */}
                  </div>
                </div>
                
        </section>
    </div>
    </>
  )
}

export default Register