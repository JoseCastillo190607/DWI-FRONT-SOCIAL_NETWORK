import "./Posts.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState, useContext } from "react";
import { Widget } from "@uploadcare/react-widget";
import { GlobalContext } from "../../context/global-context";

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
          <Card>
            <CardContent>
              <Typography
                className="containerContent"
                variant="h5"
                component="div"
              >
                Devstragram
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <div className="post-grid">
                  <h3>
                    {title} <button onClick={handleEdit}>Edit</button>
                  </h3>
                  <h4>{description}</h4>
                  <p>
                    Ubication:<b>{ubication}</b>{" "}
                  </p>
                  <p>
                    Image: <br />
                    <img
                      src={`https://ucarecdn.com/${image}/-/resize/100x100/-/preview/`}
                      alt="foto tomada"
                    />
                    <div>
                      <button
                        onClick={() => {
                          setLikepost(!likepost);
                          setEditingPost((current) => ({
                            ...current,
                            like: !likepost,
                          }));
                        }}
                      >
                        <b>{likepost === true ? " ❤️" : "🖤"}</b>{" "}
                      </button>
                    </div>
                  </p>
                  <button
                    className="button-danger"
                    onClick={() => removePost(_id)}
                  >
                    Delete
                  </button>

                  {isEditing && (
                    <div>
                      Title
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
                      Description
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
                        <input
                          className="input"
                          type="text"
                          name="image"
                          value={newPost.image}
                          onChange={(e) =>
                            setEditingPost((current) => ({
                              ...current,
                              image: e.target.value,
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
              </Typography>
            </CardContent>
          </Card>
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
    <div>
      <div className="post-list">
        <center>
          <h1>POSTS</h1>
        </center>
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
            <CardActions>
              <Button
                className="btnPost"
                onClick={() => handleCreateOrUpdatePost(newPost)}
              >
                Create Post
              </Button>
            </CardActions>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Posts;
