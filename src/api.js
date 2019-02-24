import axios from 'axios'

const token = '69bbf887777163aeab050ade0ced0c3b47f781ad6a17aa2e92471b7a67a4da2d'

const client = axios.create({
  baseURL: 'https://api.producthunt.com/v1',
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export const getProducts = () => client.get('/posts')
