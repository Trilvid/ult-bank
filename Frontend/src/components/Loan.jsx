/* eslint-disable no-unused-vars */
import React from 'react'


const Loan = () => {
  return (
    <>
    <div className="space">
      <h1>apply for a loan </h1>
    </div>

    <div className='contain'>
        <section className='profile'>
        <form action="#">
          <span>
            <label htmlFor="num">ssn:</label>
            <input type="number" name="social_no" id="num" />
          </span>

          <span>
            <label htmlFor="salary">salary range:</label>
            <input type="text" name="salary" id="salary" />
          </span>

          <span>
            <label htmlFor="homeid">home address:</label>
            <input type="text" name="address" id="homeid" />
          </span>

          <span>
            <label htmlFor="job">occupation:</label>
            <input type="text" name="job_title" id="job" />
          </span>
          
          <span>
            <label htmlFor="amt">amount:</label>
            <input type="number" name="amount" id="amt" />
          </span>
          
          <span>
            <label htmlFor="purpose">loan purpose:</label>
            <input type="number" name="purpose" id="purpose" />
          </span>
          
          <span>
            <label htmlFor="coll">collateral:</label>
            <input type="file" name="coll" id="coll" />
          </span>
          
          <span>
            <label htmlFor="history">credit history:</label>
            <input type="file" name="credit" id="history" />
          </span>
          
          <span>
            <label htmlFor="statement">bank statement:</label>
            <input type="file" name="statement" id="statement" />
          </span>

        </form>
          <span id='#'>
            <button><span>proceed</span></button>
          </span>
        
        </section>
        

    </div>

    </>

  )
}

export default Loan