import PropTypes from 'prop-types';
import styles from './input.module.css';

export const Input = ({
  type = 'text',
  size = 'medium',
  theme = 'light',
  iconLeft,
  iconRight,
  width = 'full',
  borderStyle,
  fontWeight,
  animate,
  error,
  success,
  errorMessage,
  className,
  ...props
}) => {
  const getInputClasses = () => {
    return [
      styles.input,
      styles[size],
      styles[`theme-${theme}`],
      styles[`width-${width}`],
      borderStyle && styles[`border-${borderStyle}`],
      fontWeight && styles[`font-${fontWeight}`],
      animate && styles['animate-focus'],
      iconLeft && styles['has-icon-left'],
      iconRight && styles['has-icon-right'],
      error && styles.error,
      success && styles.success,
      className
    ].filter(Boolean).join(' ');
  };

  return (
    <div className={styles['input-wrapper']}>
      {iconLeft && <span className={styles['icon-left']}>{iconLeft}</span>}
      
      <input
        type={type}
        className={getInputClasses()}
        {...props}
      />
      
      {iconRight && <span className={styles['icon-right']}>{iconRight}</span>}
      
      {error && errorMessage && (
        <div className={styles['error-message']}>{errorMessage}</div>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'password',
    'email',
    'number',
    'tel',
    'url',
    'search',
    'date'
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['light', 'dark', 'primary']),
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  width: PropTypes.oneOf(['auto', 'full']),
  borderStyle: PropTypes.oneOf(['none', 'bottom', 'thick']),
  fontWeight: PropTypes.oneOf(['normal', 'medium', 'semibold']),
  animate: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  errorMessage: PropTypes.string,
  className: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  theme: 'light',
  width: 'full',
  animate: false,
  error: false,
  success: false
};

export default Input;