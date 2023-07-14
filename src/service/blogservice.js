import axios from "axios";
const baseUrl = "http://localhost:3000/posts"

const addblog = (credential) => {
    return axios.post(`${baseUrl}`, credential);
}
const deleteblog = (postId) => {
    return axios.post(`/posts/${postId}`);
}
export default {addblog,deleteblog}