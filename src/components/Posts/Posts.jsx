import "./Posts.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState, useContext } from "react";
import { Widget } from "@uploadcare/react-widget";
import { GlobalContext } from "../../context/global-context";
import Navbar from "../Navbar/navbar";
import edit from "./images/edit.png";
import PlaceIcon from "@mui/icons-material/Place";
import { Avatar } from "@mui/material";
import detele from "./images/delete.png" 

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../../api/posts-api";

const Posts = () => {
  //     const { i18n, t } = useTranslation();

  //   function changeLanguage(language) {
  //     i18n.changeLanguage(language);
  //   }

  const [posts, setPosts] = useState([]);
  const [photo, setPhoto] = useState("");
  const { userdata } = useContext(GlobalContext);
  console.log(userdata);
  const [newPost, setNewPost] = useState({});
  async function fetchPosts() {
    const fetchedPosts = await getPosts();
    console.log({ fetchedPosts });
    setPosts(fetchedPosts);
  }

  const PostComponent = ({
    _id,
    title,
    description,
    ubication,
    image,
    like,
    updatedAt,
    removePost,
    handleCreateOrUpdatePost,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [edditingPost, setEditingPost] = useState({});
    const [likepost, setLikepost] = useState(like);

    const handleEdit = () => {
      setIsEditing((current) => !current);
      setEditingPost({ _id, title, description, ubication, image, like });
    };

    return (
      <div className="post-item">
        <center>
          <div className="postsContainer">
            <CardContent>
              <div sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <div className="post-grid">
                  <div className="headerPost">   
                    <div>
                    <Avatar sx={{ width: 50, height: 50 }}>{userdata.name}</Avatar>
                    </div>
                    <div className="titlePost">
                      <span className="spanTitle">{userdata.name}{userdata.firstlastname}{userdata.secondlastname}</span>
                      <span className="spanTitle">{title}</span>
                      <span className="spanUbication">
                      <b>{ubication}</b><PlaceIcon color="secondary" className="iconUbi" />{" "}  
                      </span>
                      <span className="spanUbication">Agosto 11, 2022</span>
                    </div>
                    <div className="editButton">
                      <img src={edit} width="40px" onClick={handleEdit}></img>
                    </div>
                  </div>

                  {/* <h4>{description}</h4> */}
                  <div className="imagenContainer">
                  
                    <img className="imagenPosts" style={{width:'600', height:'700'}}
                      src={`https://ucarecdn.com/${image}/-/resize/370x487/-/preview/`}
                      alt="foto tomada"
                    />
                    
                  </div>
                  <div className="descriptionPost">
                    <div>
                    {/* <Avatar sx={{ width: 50, height: 50 }}>{userdata.name}</Avatar> */}
                    <span className="btnLikeContainer">
                        <img width="30px" className="btnDelete"
                        onClick={() => removePost(_id)} src={detele}/>
                     </span>
                    </div>
                    <span>
                    <div className="titlePost">
                      <span className="btnLikeContainer">
                        <button className="btnLike"
                          onClick={() => {
                            setLikepost(!likepost);
                            setEditingPost((current) => ({
                              ...current,
                              like: !likepost,
                            }));
                          }}
                        >
                        {likepost === true ? " ❤️" : "🖤"}{" "}
                        </button>
                      </span>
                      {/* <span className="btnLikeContainer">
                        <img width="30px" className="btnDelete"
                        onClick={() => removePost(_id)} src={detele}/>
                     </span> */}
                      </div>
                    </span>
                    {/* <div className="editButton">
                      {/* <img src={edit} width="40px" onClick={handleEdit}></img> 
                    
                  </div> */}
                  <div>
                  <span  className="spanTitle">{description}</span>
</div>
                  </div>
                  
                  {isEditing && (
                    <div>
                      <h3>Title</h3>
                      <input
                        className="input"
                        type="text"
                        name="title"
                        value={edditingPost.title}
                        onChange={(e) =>
                          setEditingPost((current) => ({
                            ...current,
                            title: e.target.value,
                          }))
                        }
                      />
                      <div>
                      <h3>Description</h3>
                      <input
                        className="input"
                        type="text"
                        name="description"
                        value={edditingPost.description}
                        onChange={(e) =>
                          setEditingPost((current) => ({
                            ...current,
                            description: e.target.value,
                          }))
                        }
                      />
                      </div>
                      <div>
                        <h3>Ubication </h3>
                        <input
                          className="input"
                          type="text"
                          name="title"
                          value={newPost.ubication}
                          onChange={(e) =>
                            setEditingPost((current) => ({
                              ...current,
                              ubication: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div>
                        <h3>Image </h3>
                        <Widget
                          publicKey="712e3cdcf23e9fa90269"
                          enableVideoRecording="false"
                          tabs="file camera"
                          onChange={(info) =>
                            setNewPost((current) => ({
                              ...current,
                              image: info.uuid,
                            }))
                          }
                        />
                      </div>
                      <button
                        className="button-primary"
                        onClick={() => handleCreateOrUpdatePost(edditingPost)}
                      >
                        Update Post
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </div>
        </center>
      </div>
    );
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const removePost = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

  const handleCreateOrUpdatePost = async (post) => {
    if (!post._id) {
      await createPost(post);
      setNewPost({ title: "", description: "", ubication: "", image: "" });
      fetchPosts();
      return;
    }
    const { _id } = post;
    delete post._id;
    await updatePost(_id, post);
    fetchPosts();
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="post-list">
          {posts &&
            posts.map((post) => (
              <PostComponent
                {...post}
                handleCreateOrUpdatePost={handleCreateOrUpdatePost}
                removePost={removePost}
              />
            ))}
          <div className="posts-create">
            <center>
              <div>
                <h3>Title </h3>
                <input
                  className="input"
                  type="text"
                  name="title"
                  value={newPost.title}
                  onChange={(e) =>
                    setNewPost((current) => ({
                      ...current,
                      title: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <h3>Description</h3>
                <input
                  className="input"
                  type="text"
                  name="description"
                  value={newPost.description}
                  onChange={(e) =>
                    setNewPost((current) => ({
                      ...current,
                      description: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <h3>Ubication </h3>
                <input
                  className="input"
                  type="text"
                  name="title"
                  value={newPost.ubication}
                  onChange={(e) =>
                    setNewPost((current) => ({
                      ...current,
                      ubication: e.target.value,
                    }))
                  }
                />
                <br />
                <Widget
                  publicKey="712e3cdcf23e9fa90269"
                  enableVideoRecording="false"
                  tabs="file camera"
                  onChange={(info) =>
                    setNewPost((current) => ({
                      ...current,
                      image: info.uuid,
                    }))
                  }
                />
              </div>
              <button
                onClick={() => {
                  console.log(newPost);
                }}
              >
                log
              </button>
              {/* <CardActions>
                <Button
                  className="btnPost"
                  onClick={() => handleCreateOrUpdatePost(newPost)}
                >
                  Create Post
                </Button>
              </CardActions> */}
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
