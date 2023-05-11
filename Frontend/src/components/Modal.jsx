/* eslint-disable no-lone-blocks */
import React from 'react'
import Swal from 'sweetalert2';
import { MdCopyAll } from 'react-icons/md';
import { VscChromeClose } from 'react-icons/vsc'

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

const Modal = () => {

  function copyLink(){
      const copytext = document.getElementById('copyMe');
      copytext.select();
      document.execCommand('copy');
        Toast.fire({
          title: 'Copied!',
          icon: 'success'
        });
        document.getElementById('id01').style.display='none';
    }

  return (
    <>
  <div className="modal" id="id01">

<div className="modalBody">
  <div className="modalContent">

    <header className="modalHeader"> 
      <span className="w3-closebtn" onClick={()=>{document.getElementById('id01').style.display='none'}}> <VscChromeClose /> </span>
    </header>

    <div className="modalContainer">
      <span>
      <img src="img/0.jpg" alt="file not found" width={150} onClick={copyLink}/>
      </span>

      <span>
        <input type="text" name="copyMe" id="copyMe" value="hello i for it hope run" readOnly/>
        <MdCopyAll  onClick={copyLink}/>
        </span>
    </div>


  </div>
</div>
      
        </div>     
    </>
  )
}

export default Modal


{/* <h2> Animated Modal</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi asperiores commodi itaque id impedit accusantium quo, excepturi eius suscipit harum perferendis facere quisquam dolor atque. Fugit aut impedit rem harum!</p>
----- onClick={document.getElementById('id01').style.display='none'} 
----- onClick={document.getElementById('id01').style.display='block'}
*/}
      {/* <img src="https://www.bitcoinqrcodemaker.com/api/?style=Tether&amp;address=TVUQSEcdW4mA6VAh8YgKziY7mQn9LHSkpq" height="150" width="150" alt="usdt QR Code" /> */}