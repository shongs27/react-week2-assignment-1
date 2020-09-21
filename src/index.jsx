import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me (
      {count}
      )
    </button>
  );
}

function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} onClick={() => onClick(i)}>
          {i}
        </Button>
      ))}
    </p>
  );
}

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={() => onClick(1)} />
      <Buttons onClick={onClick} />
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(number) {
    setState({
      count: count + number,
    });
  }
  return (
    <Page count={count} onClick={handleClick} />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
