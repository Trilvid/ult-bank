/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md';


const Modal = () => {

  function colseModal(e){
    e.preventDefault();
    document.getElementById('id01').style.display='none';
    }

  return (
    <>
  <div className="modal" id="id01">

<div className="modalBody bodyModal">
  <div className="modalContent">

    <header className="modalHeader"> 

                <div className="payMth">
                  <span>  payment method </span>
                  <p>USSD trc20 <MdArrowForwardIos size='12px' style={{marginTop: 1,marginLeft: 3}}/></p>
                </div>
    </header>

    <div className="modalContainer">
      <form action="" className="myforme">
        <span>
          <label htmlFor="amt">enter amount to withdraw</label>
          <input type="number" name="amount" id="amt" placeholder='Enter Amount $'/>
        </span>

        <span>
          <label htmlFor="otp">enter OTP</label>
          <input type="tel" name="otp" id="otp"placeholder='Enter OTP' />
          <button>request OTP</button>
          <p>OTP will be sent to your email when you request</p>
        </span>

        <span>
          <label htmlFor="address">enter wallet address</label>
          <input type="number" name="text" id="address" placeholder='Wallet Address'/>
          <p>USDT (TRC20) is not a default withdrawal option in your account, please enter the correct wallet address to recieve your funds.</p>
        </span>

        <span>
          <button onClick={colseModal}>complete</button>
        </span>
      </form>
    </div>


  </div>
</div>
      
 </div>     
    </>
  )
}

export default Modal
