import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://react-accseroids-default-rtdb.firebaseio.com/'
});

export default instance;