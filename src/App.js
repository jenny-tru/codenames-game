import React from 'react';
import './App.css';

function App() {
  var cards = [];
  for (var i = 0; i < 25; i++) {
    cards.push(
      <div className="box">
      <button>(ఠ ͟ಠ)</button>
      </div>);
  } 

  
  return (
    <div className="App">
      <header className="App-header">
        <p>Let's Play CodeNames!</p>
      </header>
      <div className='board'>
      {cards}
      </div>
    </div> 
  );
}

export default App;
