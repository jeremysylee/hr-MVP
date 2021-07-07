import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [loling, setloling] = useState(false)
  const audio = new Audio('laughtrack.mp3');

  useEffect(() => {
    setInterval(() => {
      listen();
    }, 1000);
  }, [])

  const listen = () => {
    axios.get(`http://localhost:3002/lol`)
      .then((res) => {
        if (res.data === false) {
          pause();
        } else {
          play();
        }
      })
      .catch((err) => {
        console.log('err', err);
      })
  };

  const lol = () => {
    axios.get('/lolol')
      .then((res) => {
        console.log(res.data);
      });
  }

  const play = () => {
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  return (
    <div>
      <button onClick={lol}>lol</button>
    </div>
  )
}


export default App;