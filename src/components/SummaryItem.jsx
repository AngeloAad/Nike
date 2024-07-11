import React from 'react';

const SummaryItem = ({ label, value, className = '' }) => {
  return (
    <div className={`flex justify-between w-full ${className}`}>
      <span className="font-montserrat text-slate-gray">{label}</span>
      <span className="font-montserrat text-black">{value}</span>
    </div>
  );
};

export default SummaryItem;
