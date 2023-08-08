import axios from "axios";
const baseUrl ="http://localhost:8000/users"

function getAll(){
    const config={
        headers: {
            Authorization: 
            `Bearer ${window.localStorage.getItem('token')}`
        }
    }
    return axios.get(baseUrl, config)
}



export default { getAll }