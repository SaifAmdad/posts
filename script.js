const postContainer = document.querySelector(".container");

const apiPost = async () => {
  return await axios("https://jsonplaceholder.typicode.com/posts/")
    .then((res) => res.data)
    .catch((err) => err.status);
};

(async () => {
  const allPosts = await apiPost();
  allPosts.map((post) => {
    const postCard = document.createElement("div");
    postCard.classList.add("post-card");

    postCard.innerHTML = `
    <div class="identity">
          <span class="id">${post.id}</span><span class="user-id">user id : ${post.userId}</span>
        </div>
        <h3 class="post-title">${post.title}</h3>
        <hr />
        <p class="post-body">${post.body}</p>
    `;

    postContainer.appendChild(postCard);
  });
})();
