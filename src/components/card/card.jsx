import PropTypes from 'prop-types';
import styles from './card.module.css';

export const Card = ({ 
  children, 
  size = 'medium',
  padding = 'medium',
  hover,
  shadow,
  theme = 'light',
  showBorder = false,
  borderStyle,
  header,
  footer,
  title,
  subtitle,
  className,
  layout,
  fontSize,
  fontWeight,
  customStyle,
  ...props 
}) => {
  const getHoverClass = () => {
    if (!hover) return '';
    return styles[`hover-${hover}`];
  };

  const getShadowClass = () => {
    if (!shadow) return '';
    return shadow === 'large' ? styles['shadow-lg'] : styles.shadow;
  };

  const getBorderClasses = () => {
    if (!showBorder) return '';
    return [
      styles.border,
      borderStyle === 'thick' && styles['border-thick'],
      borderStyle === 'dashed' && styles['border-dashed']
    ].filter(Boolean).join(' ');
  };

  const getLayoutClasses = () => {
    if (!layout) return '';
    return [
      styles.flex,
      layout.includes('col') && styles['flex-col'],
      layout.includes('center') && styles['items-center'],
      layout.includes('between') && styles['justify-between'],
    ].filter(Boolean).join(' ');
  };

  const getTypographyClasses = () => {
    return [
      fontSize && styles[`text-${fontSize}`],
      fontWeight && styles[`font-${fontWeight}`]
    ].filter(Boolean).join(' ');
  };

  return (
    <div 
      className={`
        ${styles.card}
        ${styles[size]}
        ${styles[`padding-${padding}`]}
        ${getHoverClass()}
        ${getShadowClass()}
        ${getBorderClasses()}
        ${styles[`theme-${theme}`]}
        ${getLayoutClasses()}
        ${getTypographyClasses()}
        ${className || ''}
      `}
      style={customStyle}
      {...props}
    >
      {header && <div className={styles.header}>{header}</div>}
      
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
      
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  padding: PropTypes.oneOf(['small', 'medium', 'large']),
  hover: PropTypes.oneOf(['lift', 'glow', 'color', 'scale']),
  shadow: PropTypes.oneOf(['default', 'large']),
  theme: PropTypes.oneOf(['light', 'dark', 'primary', 'success', 'warning', 'danger']),
  showBorder: PropTypes.bool,
  borderStyle: PropTypes.oneOf(['default', 'thick', 'dashed']),
  header: PropTypes.node,
  footer: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  layout: PropTypes.string,
  fontSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  fontWeight: PropTypes.oneOf(['normal', 'medium', 'semibold', 'bold']),
  customStyle: PropTypes.object
};

Card.defaultProps = {
  size: 'medium',
  padding: 'medium',
  theme: 'light',
  showBorder: false,
  fontSize: 'md',
  fontWeight: 'medium'
};

export default Card;