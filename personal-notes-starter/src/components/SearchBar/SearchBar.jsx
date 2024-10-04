import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ searchQuery, setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        className={styles.searchInput}
        placeholder="Cari catatan..."
      />
    </div>
  );
}

export default SearchBar;
