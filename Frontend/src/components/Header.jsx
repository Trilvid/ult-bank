/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MdAccountCircle, MdOutbox, MdCompareArrows, MdOutlineHome, MdInbox, MdSettings, MdHistory, MdLink, MdLogout, MdClose, MdCreditCard} from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'
import { TbChartCandleFilled } from 'react-icons/tb'
import { FaCoins,  FaHandHoldingUsd, FaHome, } from "react-icons/fa"
import { CgUserlane } from 'react-icons/cg'
import Base from './Base';
import Deposit from './Deposit';
import Withdraw from './Withdrawal';
import Transfer from './Transfer';
import Loan from './Loan';
import History from './History';
import Refferal from './Refferal';
import Settings from './Settings'
import MyFunc from './Myfunc';

const name = {
  firstname: "Demo",
  lastname: "obinna",
  email: "demotesting@test.com"
}

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
        <HiMenu className='toogleBtn' onClick={ MyFunc.toogleBar }/>
        <HiMenu className='tBar' onClick={MyFunc.smallSide}/>

        <span>
          <div className='name' onClick={() => {document.getElementById('hello').style.display="flex"}}>
            <h1><MdAccountCircle size='2.2rem' /></h1>
            <p> {name.firstname}  </p>
            <CgUserlane />
          </div>

        </span>
      </div>
    </div>
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
                  <h2>{name.firstname}</h2>
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

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
    MyFunc.mediaFunc()
  };

  return (
    <div className="tabs">

        <section className="sideNav">
          <nav>
          <div className='smallSide' id='smallX'>
            
            <section className='top'>
            <i><MdAccountCircle size='5rem'/></i>
            <h2>{name.firstname}</h2>
            <p>online</p>
            <button className='button'><FaCoins size='14px'/>  100 </button>
            </section>

            <section className="down">

            <span className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>
              <Link to='/#'>
                <FaHome size="2rem" />
              <p>home</p>
              </Link>
              </span>
              
              <span className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
              <Link to='/#'>
                <MdInbox size="2rem" />
                <p>deposits</p>
              </Link>
              </span>
              
              <span className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
              <Link to='/#'>
                <MdOutbox size="2rem" />
                <p>withdrawal</p>
                </Link>
              </span>

              <span className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>
              <Link to='/#'>
                <MdCompareArrows size="2rem" />
                <p>transfer</p>
                </Link>
              </span>
              
              <span className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4)}>
              <Link to='/#'>
                <FaHandHoldingUsd size="2rem" />
                <p>loan</p>
                </Link>
              </span>
              
              <span className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabClick(5)}>
              <Link to='/#'>
                <TbChartCandleFilled size="2rem"/>
                <p>investment</p>
                </Link>
              </span>

              
              <span className={activeTab === 6 ? 'active' : ''} onClick={() => handleTabClick(6)}>
              <Link to='/#'>
                <MdHistory size="2rem" />
                <p>transactions</p>
                </Link>
              </span>
              
              <span className={activeTab === 7 ? 'active' : ''} onClick={() => handleTabClick(7)}>
              <Link to='/#'>
                <MdLink size="2rem" />
                <p>refferals</p>
                </Link>
              </span>

              <span className={activeTab === 8 ? 'active' : ''} onClick={() => handleTabClick(8)}>
              <Link to='/#'>
                <MdSettings size="2rem" />
                <p>settings</p>
                </Link>
              </span>
</section>
</div>

<div className="bigSide" id='dashMe'>
        {activeTab === 0 && <Base />}
        {activeTab === 1 && <Deposit/>}
        {activeTab === 2 && <Withdraw/>}
        {activeTab === 3 && <Transfer />} 
        {activeTab === 4 && <Loan />} 
        {activeTab === 5 && <History />} 
        {activeTab === 6 && <History />} 
        {activeTab === 7 && <Refferal />} 
        {activeTab === 8 && <Settings />} 
          
        </div>
</nav>
</section>

    </div>
  );
};

const Header = () => {

  return (
    <div className="app">
      <Navigation />
      <Tabs />
    </div>
  );
};

export default Header;





// const Header = () => {

//   const [userData, setUserData] = useState()
//   const balance = 50;

// useEffect(()=> {
//   fetchUserData()
// }, [])

//  const fetchUserData = async() =>{
//     const req = await fetch("http://localhost:5000/api/v1/users/63f35c1c41d0184d59d952a8", {
//       method: "GET",
//       headers: {
//         "Content-Type": "Application/Json",
//       },
//       // body: {
//       //   name: name
//       // }
//     })

//     const res = await req.json()
//     setUserData(res)
//   }

//   return (
//     <>
//       <div className="header">

//         <div className="logo">
//          <Link to='/'>
//            <img src="logo512.png" alt="logo" />
//            </Link>
//         </div>

//         <div className="menu">
//         <p className='toogleBtn'>☰</p>
        
//         <span>
//           <div className='name'>
//           <h1><MdAccountCircle size='2.2rem'/></h1>
//         <p> { userData ? userData.firstname : 'demo'} </p>
//           </div>
//          </span>
//         </div>

//       </div>

//         {/* side nav here */}
//         <section className="sideNav">
//           <nav>
//           <div className='smallSide'>
            
//             <section className='top'>
//             <i><MdAccountCircle size='5rem'/></i>
//             <h2>{ userData ? userData.firstname + ' ' + userData.lastname : ''}</h2>
//             <p>online</p>
//             <button className='button'><FaCoins size='14px'/>  {balance} </button>
//             </section>

//             <section className="down">

//             <span>
//               <Link to='/'>
//                 <FaHome size="3rem" />
//               <p>home</p>
//               </Link>
//               </span>
              
//               <span>
//               <Link to='/'>
//                 <MdInbox size="3rem" />
//                 <p>deposits</p>
//               </Link>
//               </span>
              
//               <span>
//               <Link to='/'>
//                 <MdOutbox size="3rem" />
//                 <p>withdrawal</p>
//                 </Link>
//               </span>
              
//               <span>
//               <Link to='/'>
//                 <MdCompareArrows size="3rem" />
//                 <p>transfer</p>
//                 </Link>
//               </span>
              
//               <span>
//               <Link to='/'>
//                 <FaHandHoldingUsd size="3rem" />
//                 <p>loan</p>
//                 </Link>
//               </span>
              
//               <span>
//               <Link to='/'>
//                 <MdOutlineHome size="3rem" />
//                 <p>invest</p>
//                 </Link>
//               </span>

              
//               <span>
//               <Link to='/'>
//                 <MdOutlineHome size="3rem" />
//                 <p>transactions</p>
//                 </Link>
//               </span>
              
//               <span>
//               <Link to='/'>
//                 <MdOutlineHome size="3rem" />
//                 <p>refferals</p>
//                 </Link>
//               </span>

//               <span>
//               <Link to='/'>
//                 <MdSettings size="3rem" />
//                 <p>settings</p>
//                 </Link>
//               </span>

//             </section>
//           </div>

//           <div className='bigSide'>
            
//             <br />
//             <section>
//               <h1>hi 🖐️, welcome {userData ? userData.firstname : ""} ! </h1>
//               <div className="new">
//                 <span>  new </span> welcome to this sitename <MdArrowForwardIos size='10px'/>
//               </div>
//             </section>
//           </div>
//             </nav>
//       </section>

//     </>
//   )
// }

// export default Header