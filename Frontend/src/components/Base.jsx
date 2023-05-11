import React from 'react'
import { MdArrowForwardIos} from 'react-icons/md'
import { FaCoins, FaGifts, FaCopy, FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const name = {
  firstname: "helllo",
  lastname: "obinna",
  role: "Admin"
}

const balance = 50
const refer = `https://localhost:3000/${name.firstname}`

function copyLink(){
  const copytext = document.getElementById('copied');
  copytext.select();
  document.execCommand('copy');
    Toast.fire({
      title: 'Copied!',
      icon: 'success'
    });
}

const Base = () => {
  return (
    <>
              <section>
                <h1>hi 🖐️, welcome  {name.role} ! </h1>
                <div className="new">
                  <span>  new </span> welcome to this sitename <MdArrowForwardIos size='10px' />
                </div>
              </section><div className="contain">
                  <div className='dash'>
                    <h1>account summary</h1>
                    <span>
                      <div>
                        <h4>total deposits</h4>
                        <p>${balance}</p>
                      </div>

                      <div className='icon'>
                        <i><FaArrowAltCircleDown size="1.5rem" /></i>
                      </div>
                    </span>


                    <span>
                      <div>
                        <h4>total profit</h4>
                        <p>${balance}</p>
                      </div>

                      <div className='icon'>
                        <i><FaCoins size="1.5rem" /></i>
                      </div>
                    </span>

                    <span>
                      <div>
                        <h4>referral bonus</h4>
                        <p>${balance}</p>
                      </div>

                      <div className='icon'>
                        <i><FaGifts size="1.5rem" /></i>
                      </div>
                    </span>

                    <span>
                      <div>
                        <h4>total withdrawal</h4>
                        <p>${balance}</p>
                      </div>

                      <div className='icon'>
                        <i><FaArrowAltCircleUp size="1.5rem" /></i>
                      </div>
                    </span>

                  </div>
                  <section className='refer'>
                    <h2>refer us and earn</h2>
                    <p>use the link below to invite your friends</p>
                    <span><input type="text" name="copy" id="copied" value={refer} /><button className='btn' onClick={copyLink}><FaCopy /></button></span>
                  </section>

                </div>
                </>
  )
}

export default Base