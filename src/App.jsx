import './App.css';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Login from './components/Login/Login';

function App() {
  return (
     <div className="App">
       <header className="App-header">
         {/* <Login/> */}
         <ChangePassword/>
       </header> 
     </div> 
  );
}

export default App;
