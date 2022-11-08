export default function getMovies(param, searchQuery){
  const API_KEY = "api_key=dc26557b281e26d9f878e92da4703242"
  const BASE_URL =" https://api.themoviedb.org/3"

  const query = searchQuery? `${BASE_URL}/${param}?${API_KEY}&query=${searchQuery}` : `${BASE_URL}/${param}?${API_KEY}`

  return fetch(query)
    .then(res => res.json())
    .catch(err => console.log(err))
}
