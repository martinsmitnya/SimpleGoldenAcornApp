// npm init
// npm install -g create-react-app
// create-react-app myPATH


//...OR...
/*IN HTML:
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  //Babel <script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
*/


const reactContentRoot = document.getElementById('root');
ReactDOM.render(<App />, reactContentRoot);

function App() {
  let cookies = 0;
  function handleBuy() {
    cookies++;
    console.log(cookies)
  }

  function handleEat() {
    if (cookies > 0) {
      cookies--
    }
  }
  return (
    <div>
      <button onClick={handleBuy} >  Buy one </button>
      <p>{cookies}</p>
      <button onClick={handleEat} >  Eat one </button>
    </div>
  );
}