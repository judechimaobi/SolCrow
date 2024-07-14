// ConnectWallet.js
import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import './ConnectWallet.css';

const ConnectWallet = () => {
  // const { connect, connected, wallet } = useWallet();
  // const connectWallet = useCallback(async () => {
  //   try {
  //     await connect();
  //   } catch (error) {
  //     console.error('Failed to connect wallet:', error);
  //     alert('Failed to connect wallet. Please try again.');
  //   }
  // }, [connect]);

	const { select, connect, connected, wallets } = useWallet();
	const connectWallet = async () => {
		if (wallets.length > 0 && !connected) {
			try {
				select(wallets[0].adapter.name);
				await connect();
			} catch (error) {
				console.error('Failed to connect wallet:', error);
				// alert('Failed to connect wallet. Please try again.');
			}
		}
	};

  return (
    <div>
      {!connected ? (
        <div className='connect-btn-flex-box'>
					<WalletMultiButton />
					<button onClick={connectWallet} className='connect-wallet-btn'>Connect Wallet</button>
        </div>
      ) : (
        <div className='after-connect-box'>
					<p>Wallet Connected: {wallets[0].address}</p>
					<WalletMultiButton />
				</div>
      )}
      
    </div>
  );
};

export default ConnectWallet;
