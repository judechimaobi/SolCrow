import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Logo</div>
      <nav style={styles.nav}>
        <a href="/">Home</a>
        <a href="/escrows">Escrows</a>
        <a href="/transactions">Transactions</a>
        <a href="/profile">Profile (User)</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5em',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  }
};

export default Header;
