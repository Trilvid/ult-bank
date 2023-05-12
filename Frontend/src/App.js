/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import './App.css'; 
import './index.css';
import './components/MediaQuery.css'
import './components/admin/Admin.css'
import Header from './components/Header';
import Login from './pages/SignIn';
import Register from './pages/SignUp'
import Modal from './components/Settings';
import Modalx from './components/admin/Trans';
import Admin from './components/Admin';


function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/dashboard' element={<Header />}></Route>
    <Route path='/signUp' element={<Register />}></Route>
    <Route exact path='/login' element={<Login />}></Route>
    <Route path='/settings' element={<Modal />}></Route>
    <Route path='/modalx' element={<Modalx />}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
 </Routes>
    </>
    

  );
}

export default App;
