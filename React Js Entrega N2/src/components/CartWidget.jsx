import React from 'react';

const CartWidget = () => {
  // por ahora indicador estático
  return (
    <div className="d-flex align-items-center">
      <span style={{fontSize: '1.25rem'}}>🛒</span>
      <span className="badge bg-primary ms-2">0</span>
    </div>
  );
};

export default CartWidget;
