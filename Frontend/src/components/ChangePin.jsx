import React from 'react'

const ChangePin = () => {
  return (
    
    <>
    <div className="space">
        <h3>change pin</h3>
    </div>
    
      <div className="profile">
        <form action="#">
          <span>
            <label htmlFor="name">old pin:</label>
            <input type="password" name="passwordCurrent" id="name" maxLength={4}/>
          </span>

          <span>
            <label htmlFor="last">new pin:</label>
            <input type="password" name="password" id="last" maxLength={4}/>
          </span>

          <span>
            <label htmlFor="usernom">confirm pin:</label>
            <input type="password" name="passwordConfirm" id="usernom" maxLength={4}/>
          </span>

        </form>

          <span>
            <button><span>proceed</span></button>
          </span>

      </div>
    </>
  )
}

export default ChangePin