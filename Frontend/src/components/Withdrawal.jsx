/* eslint-disable no-unused-vars */
import React  from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import WithdrawModal from './WithdrawModal'
import {SiTether} from 'react-icons/si'

function Withdraw() {
  return (
      <>
      <WithdrawModal />
      
      <div className="space">
      <h1>place your request</h1>
    </div>
    <div className="contain">
        <div className="withdraw">
          <br />
          <div className="topx">
            <span>
              <h1>minimum withdrawal</h1>
              <p>$50</p>
            </span>

            <span>
              <h1>maximum withdrawal</h1>
              <p>$50000</p>
            </span>

            <span>
              <h1>charge</h1>
              <p>0%</p>
            </span>

            <span>
              <h1>duration</h1>
              <p>almost instant</p>
            </span>
          </div>
<br />

<div className="space">
    <h2>get paid using </h2>
    </div>
      <div className="cards">

      <div className="card" onClick={() => {document.getElementById('id01').style.display='flex'}}>
        <div class="img">
          <FaBitcoin size="2em" />
            </div>
        <div class="textBox">
        <div class="textContent">
        <label htmlFor="ch" class="h1">BTC 20</label>
        <input type="radio" name="check" id="ch" value="hello me"/>
      </div>
      </div>
      </div>

      <div className="card" onClick={() => {document.getElementById('id01').style.display='flex'}}>
        <div class="img">
          <FaEthereum size="2em" />
            </div>
        <div class="textBox">
        <div class="textContent">
        <label htmlFor="chi" class="h1">Eth 20</label>
        <input type="radio" name="check" id="chi" value="hello you"/>
      </div>
      </div>
      </div>

      <div className="card" onClick={() => {document.getElementById('ido1').style.display='flex'}}>
        <div class="img">
          <SiTether size="2em"/>
            </div>
        <div class="textBox">
        <div class="textContent">
        <label htmlFor="chr" class="h1">USDT TRC20</label>
        <input type="radio" name="check" id="chr" value="usdt trc20"/>
      </div>
      </div>
      </div>

      </div>
        </div>

      </div>
      </>
  );
}

export default Withdraw;