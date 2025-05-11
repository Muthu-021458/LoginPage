import React from 'react';

const spinnerStyle = {
  width: '16px',
  height: '16px',
  border: '2px solid #fff',
  borderTopColor: 'transparent',
  borderRadius: '50%',
  animation: 'spin 0.6s linear infinite'
};

const CustomButton = ({
  label,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon = null,
}) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'secondary': return '#6c757d';
      case 'danger': return '#dc3545';
      default: return '#007bff';
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small': return { fontSize: '12px', padding: '0.3em 0.8em' };
      case 'large': return { fontSize: '16px', padding: '0.7em 1.5em' };
      default: return { fontSize: '14px', padding: '0.5em 1.2em' };
    }
  };

  const buttonStyle = {
    backgroundColor: getBackgroundColor(),
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    opacity: disabled ? 0.6 : 1,
    transition: 'background 0.3s ease',
    ...getSizeStyle(),
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={buttonStyle}
    >
      {loading ? (
        <span style={spinnerStyle} />
      ) : (
        <>
          {icon && <span>{icon}</span>}
          {label}
        </>
      )}
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
};

export default CustomButton;
