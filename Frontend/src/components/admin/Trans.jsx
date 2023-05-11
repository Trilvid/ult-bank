import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'

const Trans = () => {
  return (
    <>
    
    <div className="modal" id="id01">

      <div className="modalBody bodyModal">

      <div className="modalContent">

        <header className="modalHeader"> 
          <span className="w3-closebtn" onClick={()=>{document.getElementById('id01').style.display='none'}}> <VscChromeClose /> </span>
        </header>

      <div className="modalContainer">

        <span>
          <section>
            <label htmlFor='depo'>deposit</label>
            <input type="text" id='depo' name='depo'  value="hello my balance is "/>
          </section>
          
          <section>
            <label htmlFor='depo'>withdrawal</label>
            <input type="text" id='depo' name='depo'  value="hello my balance is "/>
          </section>
          
        </span>

      </div>
      </div>
      </div>
      
    </div>     
    </>
  )
}

export default Trans