import React, { useState } from 'react';

const Counter = () => {
  const [counterAmount, setCounterAmount] = useState(0);
  const handleClick = (action) => {
    setCounterAmount(action === 'add' ? counterAmount + 1 : counterAmount - 1);
  };
  return (
    <div className="counter">
      <h3 className="title">My Counter</h3>
      <div data-testid="counter-value" className="counter-amount">
        {counterAmount}
      </div>
      <div className="buttons">
        <div data-testid="add-btn" className="add-btn" onClick={() => handleClick('add')}>
          +
        </div>
        <div data-testid="sub-btn" className="sub-btn" onClick={() => handleClick('sub')}>
          -
        </div>
      </div>
    </div>
  );
};

export default Counter;
