import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <Header />
      <Beertitle />
    </div>
  );
}

export default App;




function Header() {
  return (<div>
    <h1>{'Welcome to our website!'}</h1>
  </div>)
}



function Beertitle() {
  const [counter, setCounter] = useState(1);
  const [beers, setBeers] = useState('No beers displayed')
  const [describtion, setDescription] = useState(false);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${counter}`)
      .then(response => response.json()).then(data => setBeers(data))
      .catch(e => console.log(e))

  }, [])
  const beersArr = [];
  for (let i = 0; i < beers.length; i++) {
    beersArr.push(beers[i])
  }
  //Handle click to setDescription
  
  //Handle click to setDescription





  console.log(beersArr[0])

  return (<div>
    
    <div>
      {
        beersArr.map((element) => {
          //Description or Image Logic
          if(!describtion) {
            return (
              <div>
                <img src={element.image_url} height='100px'  />
                <p>{element.name}</p>
              </div>
            )
          } else {
            return (
              <div>
                <p>{element.description}</p>
                <p>{element.name}</p>
              </div>
            )
          }
        })
      }
    </div>
    <p>{counter}</p>
  </div>)
}