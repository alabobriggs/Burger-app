import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://first-react-app-cefe6.firebaseio.com/'
})

export default instance