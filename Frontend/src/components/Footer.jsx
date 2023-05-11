/* eslint-disable no-unused-vars */
import React from 'react';
import { MdHistory, MdOutlineHome, MdSettings, MdLogout } from 'react-icons/md';
import { TbChartCandleFilled } from 'react-icons/tb'

function Footer() {
  const date =  new Date().getFullYear();
  const copyrightSymbol = '\u00A9';
  const footerText = ` Website ${copyrightSymbol} ${date}`;

  return (
    <footer className='footer'>
      <div className='foottext'>
        <span>
          <MdOutlineHome />
          <p>home</p>
        </span>

        <span>
          <MdHistory />
          <p>History</p>
        </span>

        <span>
          <TbChartCandleFilled />
          <p>investments</p>
        </span>

        <span>
          <MdSettings />
          <p>settings</p>
        </span>

        <span>
          <MdLogout />
          <p>logout</p>
        </span>

      </div> 
    </footer>
  );
}

export default Footer;