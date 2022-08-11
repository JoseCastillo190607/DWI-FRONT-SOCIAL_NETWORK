import './App.css';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div>
      
     <div className="App">
       <div className="App-header">
         {/* <Login/> */}
         <ChangePassword/>
       </div> 
     </div> 
     </div>
  );
}

export default App;
