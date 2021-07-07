import React from 'react';

const App = () => {

  const play = () => {
    const audio = new Audio('laughtrack.mp3');
    audio.play();
  };

  return (
    <div>
      <button onClick={play}>lol</button>
    </div>
  )
}


export default App;