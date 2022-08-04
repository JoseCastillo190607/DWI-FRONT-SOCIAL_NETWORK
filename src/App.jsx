import './App.css';
import Login from './components/Login/Login';
import Register from './components/register/register'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Login/>
       <Register/>
      </header> 
    </div>
  );
}

export default App;