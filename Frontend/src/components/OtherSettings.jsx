import React from 'react'

const OtherSettings = () => {
  return (
    <>
     <div className="space">
        <h3>select your prefrence</h3>
        </div>   

        <div className="profile">
          <span>
            <p>Send confirmation OTP to my email when withdrawing my funds.</p>

            <input type="radio" name="yes" id="yes" value={"yes"} checked/><label htmlFor='yes'>Yes</label>

            <input type="radio" name="no" id="no" value={""}/><label htmlFor='no'>No</label>
          </span>

          <span>
            <p>Send me email when i get profit.</p>

            <input type="radio" name="yes2" id="yes2" value={"yes"} checked/><label htmlFor='yes2'>Yes</label>

            <input type="radio" name="no" id="no" value={"No"}/><label htmlFor='no'>No</label>
          </span>

          <span>
            <p>Send me email when my investment plan expires.</p>

            <input type="radio" name="yes3" id="yes3" value={"yes"} checked/><label htmlFor='yes3'>Yes</label>

            <input type="radio" name="no" id="no" value={"No"}/><label htmlFor='no'>No</label>
          </span>
        </div>

        <span><button><span>save</span></button></span>
    </>
  )
}

export default OtherSettings