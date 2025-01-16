const BASE_URL = "https://unigram-39h3.onrender.com";
const getPostsUrl = () => `${BASE_URL}/posts`;
const addPostsUrl = () => `${BASE_URL}/posts`;
const changePostsUrl = (postId: string) => `${BASE_URL}/posts/${postId}`;
const deletePostsUrl = (postId: string) => `${BASE_URL}/posts/${postId}`;

export { BASE_URL, addPostsUrl, changePostsUrl, deletePostsUrl, getPostsUrl };
