import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '74c8a1e78479ca51e858fa4a90a7d8b0',
    language: 'en-US',
  },
})

api.get('tv/popular')

export const movieApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: term =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
}

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  airingToday: () => api.get('tv/airing_today'),
  showDatail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: term =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
}
