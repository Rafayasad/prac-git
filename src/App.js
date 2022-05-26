import logo from './logo.svg';
import './App.css';

function App() {

  const sum = (x,y) =>{
    return x+y;
  }

  const calc = (sum,a,b) =>{
      console.log('hi');
      return sum(a,b);
  }

//  console.log(sum(4,5));
 console.log(calc(sum,3,5));



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn git
        </a>
      </header>
    </div>
  );
}

export default App;
