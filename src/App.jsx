import './App.css';
import Login from './components/Login/Login';
import Register from './components/register/register';
import { useTranslation } from "react-i18next";

function App() {
  const { i18n, t } = useTranslation();
  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button
            className="btnEn"
            onClick={() => {
              changeLanguage("en");
            }}
          >
            en
          </button>
          <button
            className="btnEs"
            onClick={() => {
              changeLanguage("es");
            }}
          >
            es
          </button>
        </div>
        {/* <Login/> */}
        <Register />
      </header>
    </div>
  );
}

export default App;
