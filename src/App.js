import logo from './logo.svg';
import './App.css';
import Myapp from './Components/Myapp';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>ReactWeatherApp

</h2>
<br></br>
        <Myapp></Myapp>
       
      </header>
    </div>
  );
}

export default App;
