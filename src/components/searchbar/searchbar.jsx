import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';
import styles from './searchbar.module.css';

export const SearchBar = ({
  size = 'medium',
  theme = 'light',
  width = 'full',
  borderStyle,
  fontWeight,
  animate,
  rounded,
  loading,
  clearable = true,
  searchIcon = '🔍',
  clearIcon = '✕',
  loadingIcon = '⟳',
  placeholder = 'Search...',
  onSearch,
  onChange,
  className,
  ...props
}) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  }, [onChange]);

  const handleClear = useCallback(() => {
    setValue('');
    onChange?.('');
  }, [onChange]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      onSearch?.(value);
    }
  }, [value, onSearch]);

  const getSearchbarClasses = () => {
    return [
      styles.searchbar,
      styles[size],
      styles[`theme-${theme}`],
      styles[`width-${width}`],
      borderStyle && styles[`border-${borderStyle}`],
      fontWeight && styles[`font-${fontWeight}`],
      animate && styles['animate-focus'],
      rounded && styles['rounded-full'],
      loading && styles.loading,
      className
    ].filter(Boolean).join(' ');
  };

  return (
    <div className={styles['searchbar-wrapper']}>
      <span className={styles['search-icon']}>
        {loading ? loadingIcon : searchIcon}
      </span>
      
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className={getSearchbarClasses()}
        {...props}
      />
      
      {clearable && value && (
        <button
          type="button"
          onClick={handleClear}
          className={styles['clear-button']}
          aria-label="Clear search"
        >
          {clearIcon}
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['light', 'dark', 'primary']),
  width: PropTypes.oneOf(['auto', 'full']),
  borderStyle: PropTypes.oneOf(['none', 'bottom', 'thick']),
  fontWeight: PropTypes.oneOf(['normal', 'medium', 'semibold']),
  animate: PropTypes.bool,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
  clearable: PropTypes.bool,
  searchIcon: PropTypes.node,
  clearIcon: PropTypes.node,
  loadingIcon: PropTypes.node,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string
};

SearchBar.defaultProps = {
  size: 'medium',
  theme: 'light',
  width: 'full',
  clearable: true,
  searchIcon: '🔍',
  clearIcon: '✕',
  loadingIcon: '⟳',
  placeholder: 'Search...'
};

export default SearchBar;