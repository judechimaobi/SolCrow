import React, { useState } from 'react';
import './CreateEscrow.css'; // Import the CSS file

const CreateEscrow = ({ walletConnected, wallet }) => {
  const [partyA, setPartyA] = useState('');
  const [partyB, setPartyB] = useState('');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to create escrow using the smart contract
    console.log({ partyA, partyB, amount, deadline });
    // fetch('/api/escrow/create', { method: 'POST', body: JSON.stringify({ partyA, partyB, amount, deadline }) })
  };

  return (
    <div className="create-escrow-container">
			<div className='create-inner-container'>
				<div className='create-top-banner'>
					<h1>Create Escrow</h1>
				</div>
				{/* <div className='box'> */}
					<form onSubmit={handleSubmit}>
						<div className='create-form-div'>
							<div className='create-flex-box'>
								
								<div className='create-input-box'>
									<input type="number" value={amount} placeholder='Amount' onChange={(e) => setAmount(e.target.value)} required />
								</div>

								<div className='create-input-box'>
									<input type="number" value={price} placeholder='Price' onChange={(e) => setPrice(e.target.value)} required />
								</div>

								
							</div>

							<div className='create-flex-box'>
								<div className='create-input-box'>
									<input type="text" value={partyA} placeholder='Crypto' onChange={(e) => setPartyA(e.target.value)} required />
								</div>
								
								<div className='create-input-box'>
									<input type="text" value={partyA} placeholder='Fiat Currency' onChange={(e) => setPartyA(e.target.value)} required />
								</div>

								{/* <div className='create-input-box'>
									<input type="number" value={amount} placeholder='Amount' onChange={(e) => setAmount(e.target.value)} required />
								</div>
								<div className='create-input-box'>
									<input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
								</div> */}
							</div>
						</div>
						<button type="submit" className='create-btn'>Create AD</button>
						
					</form>
				{/* </div> */}
			</div>
    </div>
  );
};

export default CreateEscrow;
