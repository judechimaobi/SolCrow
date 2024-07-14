import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div style={styles.searchBar}>
      <input 
        type="text" 
        placeholder="Search..." 
        style={styles.input}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

const styles = {
  searchBar: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '20px',
    fontSize: '1em',
    backgroundColor: '#300784',
  }
};

export default SearchBar;
