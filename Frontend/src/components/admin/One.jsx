/* eslint-disable no-unused-vars */
import React from 'react'
import { MdArrowForwardIos} from 'react-icons/md'
import { FaUsers } from "react-icons/fa";
import { BiArrowFromBottom, BiArrowToBottom } from 'react-icons/bi'


const name = {
  role: "Admin"
}

const One = () => {

  return (
    <div>

<section>
  <h1>hey 🖐️  {name.role} ! </h1>
  <div className="new">
    <span>  admin </span> welcome to this sitename <MdArrowForwardIos size='10px' />
  </div>
  </section>
  <div className="contain">
    <div className='dash'>
      <h1>account summary</h1>

        <div className="allDiv">
        <div className="adminTop">
          <span><p>user stat</p></span>
          <section>
            <img src="./img/das.png" alt="file not found" />
          </section>
        </div>
        
        <div className="adminDown">
          <span>
            <h1>users <FaUsers /> </h1>
            <p>52</p>
          </span>

          <span>
            {/* <h1>total deposits</h1> */}
            <h1>Lorem ipsum <BiArrowToBottom /></h1>
            <p>0.00</p>
          </span>

          <span>
            {/* <h1>total withdrawal </h1> */}
            <h1>Lorem ipsum <BiArrowFromBottom /></h1>
            <p>0.00</p>
            </span>

        </div>
        </div>
      </div>

                </div>
    </div>
  )
}

export default One