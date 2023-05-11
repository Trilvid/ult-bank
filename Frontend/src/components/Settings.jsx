/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ChangePassword from './ChangePassword';
import ChangePin from './ChangePin';
// import OtherSettings from './OtherSettings';
import Profile from './Profile';


const Tab = ({ label, onClick, activeTab }) => {
  const isActive = activeTab === label;

  return (
    <li className={isActive ? 'tab-list-item-active' : 'tab-list-item'}>
      <div onClick={onClick} className="tab-button">
        {label}
      </div>
    </li>
  );
};

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (innertab) => {
    setActiveTab(innertab);
  };

  return (
    <div className="tabs">
      <span className="tab-list">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              key={label}
              label={label}
              activeTab={activeTab}
              onClick={() => onClickTabItem(label)}
            />
          );
        })}
      </span>
      <div className="tab-contents">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

const Settings = () => {
  return (
    <>
    <div className="space">
        <h1>my settings</h1>
    </div>
<div className='contain' style={{ padding: '10px'}}>
      <Tabs>
        <div label="profile">
            <Profile />
        </div>
        <div label="change pin">
            <ChangePin />
        </div>
        <div label="change password">
            <ChangePassword />
        </div>
        {/* <div label="other settings">
            <OtherSettings />
        </div> */}
      </Tabs>

      <div>
      </div>
    </div>
    </>
  );
};

export default Settings;

