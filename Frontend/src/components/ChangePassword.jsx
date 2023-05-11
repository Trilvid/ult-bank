/* eslint-disable no-unused-vars */
/* eslint-disable no-cond-assign */
import React from 'react'
import {FaEye, FaEyeSlash} from 'react-icons/fa'

const ChangePassword = () => {
   const a = document.getElementById('name')
   const o = document.getElementById('aaa')
   const x = document.getElementById('bbb')

  return (
    <>
    <div className="space">
        <h3>change password</h3>
    </div>
    
      <div className="profile">
        <form action="#">
          <span>
            <label htmlFor="name">current password:</label>
              <input type="password" name="passwordCurrent" id="name" />
          </span>

          <span>
            <label htmlFor="last">new password:</label>
            <input type="password" name="password" id="last" />
          </span>

          <span>
            <label htmlFor="usernom">confirm password:</label>
            <input type="password" name="passwordConfirm" id="usernom" />
          </span>

        </form>

          <span>
            <button><span>proceed</span></button>
          </span>

      </div>
    </>
  )
}

export default ChangePassword