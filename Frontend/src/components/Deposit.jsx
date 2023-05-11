/* eslint-disable no-unused-vars */
import React from 'react'
import Swal from 'sweetalert2'
import { MdCurrencyBitcoin } from 'react-icons/md'
import { FaBitcoin, FaEthereum } from 'react-icons/fa'
import Modal from './Modal'

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    title: "success",
    icon: "success"
  })
  
const Deposit = () => {
  return (
    <>
    <Modal />
    <div className="space">
        <h1>fund your wallet</h1>
    </div>
    <div className="contain">
        <div className="deposit">
        <section className='first'>

            <p className='p'>enter amount you wish to deposit</p>
            <label class="inp" for="inp">
            <input placeholder="" id="inp" type="number" required/>
            <span class="label">Enter Amount</span>
            <span class="focus-bg"></span>
            </label>

            <p className='p'>choose payment method </p>

              <div className="cards">

              <div className="card" onClick={()=>{document.getElementById('id01').style.display='flex'}}>
                <div class="img">
                    <MdCurrencyBitcoin  size="2rem"/>
                    </div>
                <div class="textBox">
                 <div class="textContent">
                 <label class="h1" htmlFor='chi'>bitcoin network</label>
                 <input type="radio" id='chi' name="check" value="hello me"/>
                 <input type="hidden" value="hello my twentities 000"/>
            </div>
</div>
</div>

              <div className="card" onClick={()=>{document.getElementById('id01').style.display='flex'}}>
                <div class="img">
                    <FaEthereum size="2rem"/>
                    </div>
                <div class="textBox">
                 <div class="textContent">
                 <label class="h1" htmlFor='chr'>Eth network</label>
                 <input type="radio" name="check" id="chr" value="hello you"/>
            </div>
</div>
</div>
              </div>
            </section>
        
        <section className='second'>
            <div>
            <h2>total deposits</h2>
            <p>$34000</p>
                <a href="/transactions">
                    view all deposits
                </a>
            </div>
              </section>
              </div>

              <button style={{marginLeft: 30, marginBottom: 10}} ><span>procced </span></button>
      </div></>
  )
}

export default Deposit