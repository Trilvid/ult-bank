/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import {
//   MdAccountCircle, MdOutbox, MdCompareArrows, MdArrowForwardIos,  MdOutlineHome, MdInbox, MdSettings} from 'react-icons/md'
// import { FaCoins,  FaHandHoldingUsd } from "react-icons/fa";
// import { FaHome } from "react-icons/fa";
// import Swal from 'sweetalert2'

// const name = {
//   firstname : "henry ",
//   lastname: "Obinna"
// }
//   const fullname = `${name.firstname} ${name.lastname}`
//   const balance = 50;

//   const Toast = Swal.mixin({
//     toast: true,
//     position: 'bottom-end',
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener('mouseenter', Swal.stopTimer)
//       toast.addEventListener('mouseleave', Swal.resumeTimer)
//     }
//   })
  
//   Toast.fire({
//     icon: 'success',
//     title: 'Signed in successfully',
//     body: "hello how are u doing"
//   })


//   const Tab = ({ label, onClick, activeTab }) => {
//     const isActive = activeTab === label;
  
//     return (
//       <li className={isActive ? 'tab-list-item active' : 'tab-list-item'}>
//         <button onClick={onClick} className="tab-button">
//           {label}
//         </button>
//       </li>
//     );
//   };
  
//   const Tabs = ({ children }) => {
//     const [activeTab, setActiveTab] = useState(children[0].props.label);
  
//     const onClickTabItem = (tab) => {
//       setActiveTab(tab);
//     };
  
//     return (

//       <>
//       {/* <span label="Tab 1">
//         <Link to='/dashboard'>
//           <FaHome size="3rem" />
//           <p>home</p>
//         </Link>
//       </span> */}
      
//       <div className="tabs">
//           <ul className="tab-list">
//             {children.map((child) => {
//               const { label } = child.props;

//               return (
//                 <Tab
//                   key={label}
//                   label={label}
//                   activeTab={activeTab}
//                   onClick={() => onClickTabItem(label)} />
//               );
//             })}
//           </ul>
//           <div className="tab-content">
//             {children.map((child) => {
//               if (child.props.label !== activeTab)
//                 return undefined;
//               return child.props.children;
//             })}
//           </div>
//         </div></>
//     );
//   };

// const FormTab = ({ label }) => {
//   const [formData, setFormData] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted!', formData);
//   };

// return (
//   <div label={label}>
//     <h2>{label}</h2>
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="firstName">First Name:</label>
//       <input type="text" name="firstName" onChange={handleInputChange} />

//       <label htmlFor="lastName">Last Name:</label>
//       <input type="text" name="lastName" onChange={handleInputChange} />

//       <button type="submit">Submit</button>
//     </form>
//   </div>
// );
// };

// const dashboard = () => {

//   return (
//     <>
//     <div className='header'>

//       <div className="logo">
//         <Link to='/'>
//           <img src="logo512.png" alt="logo" />
//         </Link>
//       </div>


//       <div className="menu">
//         <p className='toogleBtn' onClick={() => { Toast.fire({title: 'Error!',
//       icon: 'error'}) } }>☰</p>

//         <span>
//           <div className='name'>
//             <h1><MdAccountCircle size='2.2rem' /></h1>
//             <p> {name.firstname} </p>
//           </div>
//         </span>
//       </div>

//     </div>
//         </>
  
//   );

// }

// export default dashboard

// import React, { useState } from "react";

// function LoginForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch("/api/login", {
//       method: "POST",
//       body: JSON.stringify({ username, password }),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           // update your application state to indicate successful login
//         } else {
//           // display an error message to the user
//         }
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginForm;


import axios from 'axios';

function ExampleComponent() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/endpoint', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleInputChange} />
      <input type="text" name="email" onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
