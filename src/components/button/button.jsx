import PropTypes from 'prop-types';
import styles from './button.module.css';

export const Button = ({ 
  children, 
  type, 
  variant,
  size,
  className, 
  style,
  backgroundColor,
  textColor,
  borderColor,
  borderRadius,
  borderWidth,
  padding,
  fontSize,
  fontWeight,
  shadow,
  hoverEffect,
  ...props 
}) => {
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  };

  const hoverClasses = {
    none: '',
    lift: styles.hoverLift,
    glow: styles.hoverGlow,
    color: styles.hoverColor
  };

  const customStyle = {
    ...style,
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
    ...(borderColor && { borderColor }),
    ...(borderRadius && { borderRadius }),
    ...(borderWidth && { borderWidth }),
    ...(fontSize && { fontSize }),
    ...(fontWeight && { fontWeight }),
    ...(padding && {
      paddingLeft: padding.x,
      paddingRight: padding.x,
      paddingTop: padding.y,
      paddingBottom: padding.y,
    })
  };

  return (
    <button
      type={type}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${sizeClasses[size]}
        ${hoverClasses[hoverEffect]}
        ${shadow ? styles.shadow : ''}
        ${className}
      `}
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  style: PropTypes.object,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  borderWidth: PropTypes.string,
  padding: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string
  }),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOf(['normal', 'medium', 'semibold', 'bold']),
  shadow: PropTypes.bool,
  hoverEffect: PropTypes.oneOf(['none', 'lift', 'glow', 'color'])
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  size: 'medium',
  shadow: true,
  hoverEffect: 'lift'
};

export default Button;