// src/components/ViewEscrows.js

import React, { useEffect, useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider } from '@project-serum/anchor';

import './ViewEscrow.css';



import Header from '../Header';
import SearchBar from '../SearchBar';
import Filters from '../Filters';
import EscrowTabs from '../EscrowTabs';
import EscrowListItem from '../EscrowListItem';




const network = 'devnet';
const ESCROW_PROGRAM_ID = 'Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS';
// const ESCROW_PROGRAM_ID = 'Hfd7V12kj9AENQjLpTozaPW6aT2rhPm3LSyjXZ5AbWH';
// const ESCROW_PROGRAM_ID = 'AHnWUmyXfyRqtN3AwoRxMoyVKskyF9cS59YE2ZbqB8x6';
// const ESCROW_PROGRAM_ID = '6BLPdL9narQPFQsqS7AXuRBRS4VoyKmHHzdwkgnLaAps';

const ViewEscrows = ({ walletConnected, wallet }) => {
  // const [escrows, setEscrows] = useState([]);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({});
  const [activeTab, setActiveTab] = useState('Active Escrows');

  // const escrows = [
  //   { id: '1', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Active' },
  //   { id: '2', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Active' },
  //   { id: '3', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Active' },
  //   { id: '4', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Active' },
  //   { id: '5', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Active' },
  //   // Add more mock data as needed
  // ];

  const escrows = {
    'Active Escrows': [
      { id: '1', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Active' },
      { id: '2', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Active' },
      { id: '3', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Active' },
      { id: '4', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Active' },
      { id: '5', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Active' },
      // Add more mock data as needed
    ],
    'Pending Escrows': [
      { id: '1', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Pending' },
      { id: '2', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Pending' },
      { id: '3', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Pending' },
      { id: '4', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Pending' },
      { id: '5', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Pending' },
    ],
    'Completed Escrows': [
      { id: '1', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Completed' },
      { id: '2', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Completed' },
      { id: '3', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Completed' },
      { id: '4', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Completed' },
      { id: '5', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Completed' },
    ],
    'Cancelled Escrows': [
      { id: '1', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Cancelled' },
      { id: '2', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Cancelled' },
      { id: '3', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Cancelled' },
      { id: '4', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Cancelled' },
      { id: '5', seller: 'Alice', buyer: 'Bob', asset: 'SOL', amount: '100', price: '50', method: 'Bank Transfer', status: 'Cancelled' },
    ]
  };

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  const handleFilterChange = (filterName, filterValue) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));
  };

  const filteredEscrows = escrows[activeTab].filter((escrow) => {
    // Implement filtering logic here based on search and filter
    return true;
  });




  // useEffect(() => {
    // const connection = new Connection(network, 'processed');
    // const connection = new Connection('https://api.devnet.solana.com');

    // Fetch data from the Solana program using programId
  //   const fetchEscrows = async () => {
  //     try {
  //       // Example: Fetch escrows from the Solana program
  //       const escrowAccounts = await connection.getProgramAccounts(new PublicKey(ESCROW_PROGRAM_ID));

  //       console.log('Connection:', connection);
  //       console.log('Escrow accounts:', escrowAccounts);
  //       setEscrows(escrowAccounts);
  //     } catch (error) {
  //       setError('Error fetching data:', error);
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   if (walletConnected) {
  //     fetchEscrows();
  //   }
  // }, [walletConnected, wallet]);


// BEST FOR NOW

  // useEffect(() => {
  //   // console.log(walletConnected, wallet);
  //   const fetchEscrows = async () => {
  //     try {
  //       const connection = new Connection('https://api.devnet.solana.com');
  //       const provider = new AnchorProvider(connection, wallet.adapter, { preflightCommitment: 'processed' });

  //       const idl = await Program.fetchIdl(ESCROW_PROGRAM_ID, provider);
  //       const program = new Program(idl, new PublicKey(ESCROW_PROGRAM_ID), provider);

  //       const escrowAccounts = await program.account.escrowAccount.all();
  //       setEscrows(escrowAccounts);
  //     } catch (err) {
  //       console.error('Fetching error:', err);
  //       setError('Failed to fetch escrow accounts:'+ err);
  //     }
  //   };
    
  //   if (walletConnected) {
  //     fetchEscrows();
  //   }
  // }, [walletConnected, wallet]);







// function uint8ArrToStr(uint8arr, callback) {
//   var bb = new Blob([uint8arr]);
//   var f = new FileReader();
//   f.onload = function(e) {
//       callback(e.target.result);
//   };
  
//   f.readAsText(bb);
// }

function _arrayBufferToBase64( buffer ) {
  var binary = '';
  var bytes = new Uint8Array( buffer );
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
  }
  return window.btoa( binary );
}

  return (
    <div className="view-escrow-container">
			<div className='view-inner-container'>
				<div className='view-top-banner'>
					<h1>Escrow List</h1>
				</div>
        <div className='view-form-div'>
        <main style={styles.main}>
          {/* <Header /> */}
          <SearchBar onSearch={handleSearch} />
          {/* <Filters onFilterChange={handleFilterChange} /> */}
          <EscrowTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {filteredEscrows.map((item) => (
            <EscrowListItem key={item.id} item={item} />
          ))}
        </main>
          {/* {error && <p style={{ color: 'red' }}>{error}</p>}
          {!walletConnected && <button onClick={connectWallet}>Connect Wallet</button>} */}
          
          {/* <ul>
            <p>{error}</p>
            {escrows.map(escrow => (
              // <li key={escrow.publicKey}>{JSON.stringify(_arrayBufferToBase64(escrow.account.data))}</li>
              <li key={escrow.publicKey}>{JSON.stringify(escrow.account.data)}</li>
            ))}
          </ul> */}
        </div>
			</div>
    </div>
    
  );
};

const styles = {
  main: {
    padding: '20px',
  }
};

export default ViewEscrows;




  // useEffect(() => {
  //   const fetchEscrows = async () => {
  //     const connection = new Connection('https://api.devnet.solana.com');
  //     const provider = new AnchorProvider(connection, window.solana, {
  //       preflightCommitment: "processed"
  //     });

  //     const idl = await Program.fetchIdl('Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS', provider);
  //     const program = new Program(idl, new PublicKey('Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS'), provider);

  //     const escrowAccounts = await program.account.escrowAccount.all();
  //     setEscrows(escrowAccounts);
  //   };

  //   fetchEscrows();
  // }, []);