const API_URL = "http://localhost:5000/posts";

export async function getPosts() {
  try {
    const response = await fetch(API_URL);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function createPost(post) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
