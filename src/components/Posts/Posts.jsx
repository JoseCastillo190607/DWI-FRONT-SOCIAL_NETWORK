import { Link } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
// import '../Posts/Posts.css'
import "./Posts.css";




const Posts = () => {

//     const { i18n, t } = useTranslation();

//   function changeLanguage(language) {
//     i18n.changeLanguage(language);
//   }


    return (
        <div className="header">

{/* <div className='btn-language'>
    <button id="btn-es" className={`App-link ${ i18n.language === "es" ? "selected" : "unselected"}`} onClick={() => changeLanguage("es")}>Español</button>
    <button id="btn-en" className={`App-link ${ i18n.language === "en" ? "selected" : "unselected"}`} onClick={() => changeLanguage("en")}>Inglés</button>
  
    </div> */}
                <div>
                   <p>Posts</p>
            </div>
            </div>
    )
}

export default Posts;