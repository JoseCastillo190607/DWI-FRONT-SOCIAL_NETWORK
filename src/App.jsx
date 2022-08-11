import './App.css';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Login from './components/Login/Login';
import Register from './components/register/register'

function App() {
  // const { i18n, t } = useTranslation();
  // function changeLanguage(language) {
  //   i18n.changeLanguage(language);
  // }
  return (
    <div className="App">
      <header className="App-header">
       {/* <Login/> */}
       <Register/>
      </header> 
    </div>
  );
}

export default App;
