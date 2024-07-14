import React from 'react';
import './EscrowListItem.css';  // Import the CSS file

const EscrowListItem = ({ item }) => {
  return (
    <div className="escrow-card">
      <div className="escrow-detail"><strong>Transaction ID:</strong> {item.id}</div>
      <div className="escrow-detail"><strong>Seller:</strong> {item.seller}</div>
      <div className="escrow-detail"><strong>Buyer:</strong> {item.buyer}</div>
      <div className="escrow-detail"><strong>Asset:</strong> {item.asset}</div>
      <div className="escrow-detail"><strong>Amount:</strong> {item.amount}</div>
      <div className="escrow-detail"><strong>Price:</strong> {item.price}</div>
      <div className="escrow-detail"><strong>Payment Method:</strong> {item.method}</div>
      <div className="escrow-detail"><strong>Status:</strong> {item.status}</div>
      <div className="escrow-actions">
        <button className="button view-button">View Details</button>
        <button className="button cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default EscrowListItem;
