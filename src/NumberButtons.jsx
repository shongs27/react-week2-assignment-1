import React from 'react';
import NumberButton from './NumberButton';

function NumberButtons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <NumberButton key={i} number={i} onClick={onClick}>
          {i}
        </NumberButton>
      ))}
    </p>
  );
}

export default NumberButtons;