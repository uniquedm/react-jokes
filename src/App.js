import React from 'react';
import Joke from './components/Jokes';
import jokesData from './jokesData';

function App() {
  let [cards, setCards] = React.useState(new Array(jokesData.length).fill(false))

  function flipCard(id) {
    setCards(prevCards => {
      let newCards = {...prevCards}
      newCards[id] = !newCards[id]
      return newCards
    })
  }

  const render = jokesData.map((joke)=>{
    const {id, setup, punchline} = joke
    return <Joke display={cards[id]} setup={setup} punchline={punchline} flipCard={()=>flipCard(id)} />
  })

  return (
    <div className="jokes-layout">
      {render}
    </div>
  );
}

export default App;
