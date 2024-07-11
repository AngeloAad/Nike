// Button.jsx
import React from 'react';

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  roundness,
  hoverBackgroundColor,
  hoverTextColor,
  hoverBorderColor,
  onClick,
}) => {
  // Construct the classes dynamically with hover effects
  const classes = `
    flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
    ${backgroundColor || 'bg-coral-red'}
    ${borderColor || 'border-coral-red'}
    ${textColor || 'text-white'}
    ${roundness || 'rounded-full'}
    ${fullWidth ? 'w-full' : ''}
    transition-all duration-300
    ${hoverBackgroundColor ? `hover:${hoverBackgroundColor}` : ''}
    ${hoverTextColor ? `hover:${hoverTextColor}` : ''}
    ${hoverBorderColor ? `hover:${hoverBorderColor}` : ''}
  `.trim();

  return (
    <button onClick={onClick} className={classes}>
      {label}
      {iconURL && (
        <img 
          src={iconURL}  
          alt="icon" 
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
