import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
  return <div className="wrapper">
    <textarea
      readOnly
      maxLength={3}
      spellCheck
      style={{backgr}}
  </div>;
}

root.render(<App />);
