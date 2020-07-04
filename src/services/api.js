import axios  from 'axios';  

const api = axios.create({
    baseURL:'https://sport-events-api.herokuapp.com/'
})

export default api;
