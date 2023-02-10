import React from 'react';
import Joke from './components/Jokes';
import jokesData from './jokesData';

function App() {
  const render = jokesData.map((joke)=>{
    const {id, setup, punchline} = joke
    return <Joke key={id} setup={setup} punchline={punchline} />
  })

  return (
    <div className="jokes-layout">
      {render}
    </div>
  );
}

export default App;
