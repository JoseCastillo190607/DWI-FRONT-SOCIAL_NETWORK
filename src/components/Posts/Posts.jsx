import { Link } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
// import '../Posts/Posts.css'
import "./Posts.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



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
                <center>
                    <Card>
                        <CardContent>
                            <Typography className="containerContent" variant="h5" component="div">
                                Devstragram
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <form className="form-post">
                                    <div className="div-post">
                                        <input
                                            className="input"
                                            placeholder="Titulo"
                                            type="text"
                                        />
                                        <input
                                            className="input"
                                            placeholder="Description"
                                            type="text"
                                        />
                                        <input
                                            className="input"
                                            placeholder="Ubication"
                                            type="text"
                                        />
                                        <input
                                            className="input"
                                            placeholder="Image"
                                            type="image"
                                        />
                                    </div>
                                    <div className="div-post">
                                        <Button className="btnPost">Crear Post</Button>
                                    </div>
                                </form>
                            </Typography>
                        </CardContent>
                    </Card>
                </center>
            </div>
        </div>
    )
}

export default Posts;