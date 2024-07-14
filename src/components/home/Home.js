// import React, { useEffect } from 'react';
import React from 'react';
import './Home.css';
import ConnectWallet from '../../ConnectWallet';



const Home = ({ walletConnected, wallet }) => {
  // useEffect(() => {
  //   if (walletConnected) {
  //     // Perform your action here after connection
  //     console.log('Wallet connected successfully!');
  //     console.log('Connected wallet:', wallet);
  //     // Add any other action you want to perform
  //   } else {
  //     console.log('Connection failed!');
  //   }
  // }, [walletConnected, wallet]);

  return (
    <div className="home-container">
      <div className='home-top-banner'>
        <h1>Welcome to <span>SolCrow</span></h1>
        <p>Secure your transactions with our escrow service.</p>
        {/* <Content /> */}
        <ConnectWallet />
      </div>

      <div className='home-inner-container'>
        <div className='home-side-box'>
          <img src='/sol-coin.png' alt='' className='home-side-box-coin bounce' />
          <h1>Do more with <span className='home-side-box-text'>Solana</span></h1>
        </div>
        <div className='home-box'>
          <div className='home-box-content'>
            <h3>Create Escrow</h3>
            <p className='home-box-desc'>Secure your transaction by creating an escrow account, ensuring trust and protection for both parties. Start now and trade with confidence!</p>
            <button onClick={() => window.location.href='/create'} className='home-btn'>Create Escrow</button>
          </div>
          <img src='/wallet.png' alt='' className='home-icon' />
        </div>
        <div className='home-box'>
          <div className='home-box-content'>
            <h3>View Escrow</h3>
            <p className='home-box-desc'>Monitor your escrow transactions easily. Stay updated and manage your funds with confidence. Check your escrow status now!</p>
            <button onClick={() => window.location.href='/view'} className='home-btn'>View Escrows</button>
          </div>
          <img src='/list.png' alt='' className='home-icon' />
        </div>
      </div>
    </div>
  );
};

export default Home;
