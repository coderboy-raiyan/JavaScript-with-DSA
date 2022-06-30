const axios = require("axios").default;

async function fetchTheUsers() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const { data: users } = await axios.get(url);
    return users;
  } catch (error) {
    console.log(error);
  }
}

async function* fetchSingleUserPost(users) {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    for (let i = 0; i < users.length; i++) {
      const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);
      yield posts;
    }
  } catch (error) {
    console.log(error);
  }
}

fetchTheUsers().then(async (users) => {
  const fetchPosts = await fetchSingleUserPost(users);
  console.log(await fetchPosts.next());
  console.log(await fetchPosts.next());
  console.log(await fetchPosts.next());
});
