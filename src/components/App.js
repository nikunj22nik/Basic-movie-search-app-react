import Navbar from "./Navbar";
import movies from "../data";
import Moviecard from "./Moviecart";
import React from "react";
import {addMovie,datashow} from "../action";
class App extends React.Component {

  componentDidMount(){
    //make api  call
    //dispatch items
    
this.props.store.subscribe(()=>{
//  console.log("updated");
  this.forceUpdate();
})
    this.props.store.dispatch(addMovie(movies));

//    console.log(this.props.store.getState());
  }

       render(){

        const movie=this.props.store.getState().movies;
        const result=this.props.store.getState().search;
        console.log(movie);
    const {list,favlist, showfav}=movie;
    console.log(this.props.store.getState());
    const movie_data = showfav ? favlist : list;
    const whattoshow=(favshow)=>{
    if(favshow){
      this.props.store.dispatch(datashow(true));
} else{
      this.props.store.dispatch(datashow(false));
}

    }
 
    const isFavourite=(checkmovie)=>{
     const {favlist}=this.props.store.getState().movies;

    let indx=favlist.indexOf(checkmovie);

    if(indx == -1){
       return true;
   }
    else{
       return false;
}

    
  }



 
  return (
    
    <div className="App">
      <Navbar dispatch={this.props.store.dispatch}  result={result}/>
      <div className="main">
        <div className="tabs">
          <div className="tab" onClick={()=>whattoshow(false)}>Movies</div>
           <div className="tab" onClick={()=>whattoshow(true)}>Favuorites</div>
        </div>
       <div className="list">

          {
            movie_data.map(movie => (
            <Moviecard  favornot={isFavourite(movie)} movie={movie}  key={movie.id} dispatch={this.props.store.dispatch}></Moviecard>
          ))}

        </div>
       </div>
    </div>
  );

    }
    
        }

export default App;
