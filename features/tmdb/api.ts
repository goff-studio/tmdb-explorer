import axios from 'axios/index'

// fixme: replace with your own API key
const API_KEY = 'YOUR_API_KEY'
const BASE_URL = 'https://api.themoviedb.org/3'

export const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
})
