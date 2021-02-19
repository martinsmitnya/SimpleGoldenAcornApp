import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <Header />
      <Beertitle />
      <TemplateFunction/>
    </div>
  );
}
export default App;



//Components        Components        Components        Components        Components
function Header() {
  return (<div>
    <h1>{'Welcome to our website!'}</h1>
  </div>)
}

function Beertitle() {
  const [page, setPage] = useState(1);
  const [beers, setBeers] = useState('No beers displayed')
  const [currentElement, setCurrentElement] = useState(null)

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=1`)
      .then(response => response.json()).then(data => setBeers(data))
      .catch(e => console.log(e))

  }, [])
  
  const totalBeers = [];
  for (let i = 0; i < beers.length/5; i++) {
    totalBeers.push(i+1)
  }

  const beersArr = [];
  for (let i = (page*5)-5; i < (page*5); i++) {
    beersArr.push(beers[i])
  }

  return (<div>
    
    <div>
      {
        beersArr.map((element) => {
          //Description logic
          if(currentElement === element.id) {
            return (
              <div onClick={ ()=> {
                setCurrentElement(null)
              }}>
                <p style={{"height" : "155px"}}>{element.description}</p>
                <p>{element.name}</p>
              </div>
            )
          } else {
            return (
              <div onClick={ ()=> {
                setCurrentElement(element.id)
              }}>
                <img src={element.image_url} height='150px' />
                <p>{element.name}</p>
              </div>
            )
          }
        })
      }
    </div>

    <div>
      {//If we are NOT on first page -- else stay here
      }
      <button onClick={()=> {page>1? setPage(page-1) : setPage(page)} }>{'<<'}</button>
      {
        totalBeers.map( (element)=> {return(
          //Page selector button
          <button onClick={
            ()=> {setPage(element)} 
          }>{element}</button>
        )})
      }
      <button onClick={()=> {page<totalBeers.length ? setPage(page+1) : setPage(page)} }>{'>>'}</button>
      {//If we are NOT on last page ++ else stay here
      }
    </div>
  </div>)
}



function TemplateFunction() {
  const [state, setState] = useState(0);

  useEffect( ()=> {
    fetch('https://api.punkapi.com/v2/beers?page=1').then(response => response.json()).then(data => setState(data[0].tagline))
    .catch( error => console.log(error))
  }, []);

  return ( 
    <div>
    <p>{state}</p>
    <p>{state}</p>
    </div>
  )
} 