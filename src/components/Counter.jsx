import React, { useState } from 'react';

const Counter = () => {
  const [counterAmount, setCounterAmount] = useState(0);
  return (
    <div className="counter">
      <h3 className="title">My Counter</h3>
      <div data-testid="counter-value" className="counter-amount">
        {counterAmount}
      </div>
    </div>
  );
};

export default Counter;
