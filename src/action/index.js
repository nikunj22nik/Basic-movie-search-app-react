

//action creator
export  function addMovie(movies){
 return{
  type:"Add_movies",
  movies
  }

}



 export function addFavourite(movie){
  return {
    type:"Add_favmovie",
    movie
  }
}

export function removeFavourite(movie){
  return {

    type:"Remove_favmovie",
    movie

  }

}
export function datashow(setType){
  return {
    type:"Show_data",
setType
  }
}


export function handleMovieSearch(search){

  return function (dispatch) {
    console.log("action taking.....")
const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${search}`;
fetch(url).then(response=>response.json()).then((data)=>{
  console.log(data);

//dispatch an  action
moviesearchaddresult(data);

})

  }

}


export function moviesearchaddresult(movie){
  return {
    type:"addsearchresult",
    movie
  }
}