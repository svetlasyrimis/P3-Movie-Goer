const API_KEY = '981f1b61aa5e31abce190e535142d7e9'
const input = "batman begins"
const explore = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
const search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`
export default explore