import React from 'react'

const NewAcct = () => {
  return (
    <>
      <div className="space">
        <h1>add a user</h1>
      </div>
      
    <div className='contain'>

<div className="profile">
        <form action="#">
          <span>
            <label htmlFor="first">firstname*:</label>
            <input type="text" name="firstname" id="first" />
          </span>

          <span>
            <label htmlFor="last">lastname*:</label>
            <input type="text" name="lastmane" id="last" />
          </span>

          <span>
            <label htmlFor="user">username*:</label>
            <input type="text" name="username" id="user" />
          </span>

          <span>
            <label htmlFor="mail">email*:</label>
            <input type="email" name="email" id="mail" />
          </span>

          <span>
            <label htmlFor="mobile">mobile number*:</label>
            <input type="tel" name="mobile" id="mobile" />
          </span>

          <span>
            <label htmlFor="zip">enter zip code*:</label>
            <input type="number" name="zipCode" id="zip" />
          </span>

          <span>
            <label htmlFor="country">country*:</label>
            <input type="text" name="country" id="country" />
          </span>

          <span>
            <label htmlFor="city">city*:</label>
            <input type="text" name="city" id="city" />
          </span>

          <span>
            <label htmlFor="address">address*:</label>
            <input type="text" name="amount" id="address" />
          </span>

          <span>
            <label htmlFor="id">identification type*:</label>
            <select name="identification" id="id">
              <option value="">select type of id</option>
              <option value="ssn">Social number</option>
              <option value="bvn">BVN</option>
              <option value="NIN">nin</option>
              <option value="dirvers_lincence">drivers lincense</option>
            </select>
          </span>

          <span>
            <label htmlFor="idNomber">identification number*:</label>
            <input type="number" name="idNumber" id="idNomber" />
          </span>

          <span>
            <label htmlFor="pass">password*:</label>
            <input type="password" name="password" id="pass" />
          </span>

        </form>
          <span>
            <button><span>proceed</span></button>
          </span>

      </div>
    </div>
    </>
  )
}

export default NewAcct