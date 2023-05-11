/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MdAccountCircle, MdPersonAddAlt1, MdPersonRemove , MdSettings, MdRemoveDone, MdLogout, MdClose, MdCreditCard} from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaCoins, FaHome, FaUsers } from "react-icons/fa";
import Home from './admin/One';
import MyUsers from './admin/MyUsers';
import NewAcct from './admin/NewAcct';
import MyFunc from './Myfunc'

// to be deleted soon 
const name = {
  firstname: "Demo",
  lastname: "obinna",
  email: "demotesting@test.com",
  role: "Admin"
}

// 2) function for navigation ie single page 
const Navigation = () => {

  return (
    <>
    <div className='header'>

      <div className="logo">
        <Link to='/'>
          <img src="logo512.png" alt="logo" />
        </Link>
      </div>

      <div className="menu">
        <AiOutlineMenu className='toogleBtn' onClick={ MyFunc.toogleBar }/>
        <AiOutlineMenu className='tBar' onClick={MyFunc.smallSide}/>

        <span>
          <div className='name' onClick={() => {document.getElementById('hello').style.display="flex"}}>
            <h1><MdAccountCircle size='2.2rem' /></h1>
            <p> {name.role} </p>
          </div>

        </span>
      </div>
    </div>

    {/* 3) Html tooltip for dropdown */}
            <div className="tooltip" id='hello'>
              <span className='toolHeader' onClick={()=> {
                document.getElementById('hello').style.display="none"
              }}>
                <p><MdClose className='icx'/> Close</p>
              </span>

              <div className='toolProfile'>
                <span className='img'>
                  <MdAccountCircle size={40}/>
                </span>

                <span className='tooltext'>
                  <h2>{name.role}</h2>
                  <p>{name.email}</p>
                </span>

              </div>

              <span className='toolSettings'>
                <span>
                  <span className='tp'>
                    <p>balance</p>
                    <h1>$0.00 USD</h1>
                    <h5>referral bonus $0.00</h5>
                  </span>

                  <p><MdSettings className='icx'/> profile setting</p>
                  <p><MdCreditCard className='icx'/> cards</p>
                  <p style={{color: "red"}}><MdLogout className='icx'/> logout</p>
                </span>
              </span>
            </div>
    </>
  );
};
// ------ ends here -------


// 4) function to handle tabs 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
    MyFunc.mediaFunc()
    // document.getElementById("smallX").style.display="none"
  };

  return (
    <div className="tabs">

        <section className="sideNav">
          <nav>
          <div className='smallSide' id='smallX'>
            
            <section className='top'>
            <i><MdAccountCircle size='5rem'/></i>
            <h2>{name.role}</h2>
            <p>online</p>
            <button className='button'><FaCoins size='14px'/>  100 </button>
            </section>

            <section className="down">

            <span className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>
              <Link to='/admin'>
                <FaHome size="2rem" />
              <p>home</p>
              </Link>
              </span>
              
              <span className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
              <Link to='/admin'>
                <FaUsers size="2rem" />
                <p>users</p>
              </Link>
              </span>
              
              <span className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
              <Link to='/admin'>
                <MdPersonAddAlt1 size="2rem" />
                <p>create account</p>
                </Link>
              </span>
              
</section>
</div>

<div className="bigSide" id='dashMe'>
        {activeTab === 0 && <Home />}
        {activeTab === 1 && <MyUsers/>}
        {activeTab === 2 && <NewAcct/>}
        </div>
</nav>
</section>

    </div>
  );
};
// ------ ends here -------


// 5) and was implemented here
const admin = () => {
  return (
    <>        
    <div className="app">
      <Navigation />
      <Tabs />
    </div>
    </>
  )
}

export default admin


