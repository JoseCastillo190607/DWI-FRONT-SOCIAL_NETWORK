const API_URL = "https://dewin007.herokuapp.com/api/posts";

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
    console.log("POST: ", post);
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updatePost(id, post) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// export async function deletePost(id) {
//   try {
//     const response = await fetch(`${API_URL}/delete/${id}`, {
//       method: "DELETE",
//     });
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function deletePost(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
