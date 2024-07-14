import React from 'react';
import './EscrowTabs.css'; // Import your external CSS file

const EscrowTabs = ({ activeTab, onTabChange }) => {
  const tabs = ['Active Escrows', 'Pending Escrows', 'Completed Escrows', 'Cancelled Escrows'];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button 
          key={tab} 
          className={`tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default EscrowTabs;
