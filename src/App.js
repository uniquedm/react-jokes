import React from 'react';
import Joke from './components/Jokes';
import jokesData from './jokesData';

function App() {
  const render = jokesData.map((joke)=>{
    const {setup, punchline} = joke
    return <Joke setup={setup} punchline={punchline} />
  })
  return (
    <div className="jokes-layout">
      {render}
    </div>
  );
}

export default App;
