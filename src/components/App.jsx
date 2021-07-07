import React from 'react';
import axios from 'axios';

const App = () => {
  const listen = () => {
    axios.get('/lol', (req, res) => {
      console.log(res);
    });
  };

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