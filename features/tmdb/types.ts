export type Movie = {
  id: number
  title: string
  poster: string
  backdrop: string
  rating: number
  releaseDate: string
  poster_path: string
  backdrop_path: string
  vote_average: number
  overview: string
  release_date: string
  genre_ids?: number[]
}

export enum ErrorTypes {
  Network = 'network',
  Backend = 'backend',
  Unknown = 'unknown',
}

export type Error = {
  type: ErrorTypes
  status?: number
  message: string
  icon: string
}

export type Genre = {
  id: number
  name: string
}

export enum Queries {
  Genres = '/genre/movie/list',
  Trending = '/trending/movie/week',
  TopRated = '/movie/top_rated',
  Search = '/search/movie',
}
