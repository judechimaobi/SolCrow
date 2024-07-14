import React from 'react';

const Filters = ({ onFilterChange }) => {
  return (
    <div style={styles.filters}>
      <select onChange={(e) => onFilterChange('price', e.target.value)} style={styles.select}>
        <option value="">Price</option>
        <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
      </select>
      <select onChange={(e) => onFilterChange('method', e.target.value)} style={styles.select}>
        <option value="">Method</option>
        <option value="bank">Bank Transfer</option>
        <option value="paypal">PayPal</option>
      </select>
    </div>
  );
};

const styles = {
  filters: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  select: {
    padding: '10px',
    fontSize: '1em',
  }
};

export default Filters;
