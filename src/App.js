import React from 'react';
import './App.css';

//this updates the card color
function viewChange(state, event) {
  switch (event.type) {
    case 'update':
      return {
        ...state,
        view: event.view === state.view ? null : event.view

      }

    default:
      return state
  }
}

function App() {
  // creates the board of 25 cards
  var cards = [];
  for (var i = 0; i < 25; i++) {
    cards.push(
      <div className="box">
      <button
          onClick={() => {
            dispatch({ type: 'update', view: "cardcolor" });
          }}>
            (ఠ ͟ಠ)
      </button>
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
