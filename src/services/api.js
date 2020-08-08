import axios from 'axios'

const api = axios.create({
  baseURL: window.location.hostname.includes('localhost')?
   'http://localhost:8000': 'https://loja-vue.azurewebsites.net'
})

export default api