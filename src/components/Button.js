// src/components/Button.js
import React from 'react';

const Button = ({ text, onClick, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
