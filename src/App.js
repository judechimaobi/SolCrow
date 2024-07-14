// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useWallet } from '@solana/wallet-adapter-react';
import './Context.js'; // Content.js must be above all other components

import Home from './components/home/Home';
import CreateEscrow from './components/create/CreateEscrow';
import ViewEscrows from './components/view/ViewEscrows';
// import Escrow from './Escrow';
import './transitions.css';
import { Context } from './Context.js';

const App = () => {
  const location = useLocation();
  const { connected: walletConnected, wallet } = useWallet();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade-enter"
        timeout={500}
      >
        <Routes location={location}>
          <Route path="/" element={<Home walletConnected={walletConnected} wallet={wallet} />} />
          <Route path="/create" element={<CreateEscrow walletConnected={walletConnected} wallet={wallet} />} />
          <Route path="/view" element={<ViewEscrows walletConnected={walletConnected} wallet={wallet} />} />
          {/* <Route path="/escrow" element={<Escrow walletConnected={walletConnected} wallet={wallet} />} /> */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const AppWrapper = () => (
  <Context>
    <Router>
      <App />
    </Router>
  </Context>
);

export default AppWrapper;
