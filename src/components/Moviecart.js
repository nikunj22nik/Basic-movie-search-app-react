
import React, { Component } from 'react'
import {addFavourite,removeFavourite} from "../action";
class Moviecard extends React.Component{

    render(){
      
        const {movie}=this.props;
       

        const handleaddfav=()=>{
          //  console.log("inside a handlefav");
            this.props.dispatch(addFavourite(movie));
                }

        const handleremovefav=()=>{
          this.props.dispatch(removeFavourite(movie));
        }




        const path="https://image.tmdb.org/t/p/w500";
        return(
            <>
                <div className="moviediv">
                <div className="left">
                <img alt="movieimage" src={path+movie.poster_path}/>
                </div>
               <div className="right">
                <h3>{movie.title}</h3>
                <p style={{marginLeft:"5px"}}>{movie.overview}</p>
                <div className="fotter">
                <div className="popularity">
                {movie.popularity}
                </div>
                <div>
                {
                    this.props.favornot?
                <button className="fav-btn" onClick={handleaddfav}>Favuorite</button>:
                <button className="unfav-btn" onClick={handleremovefav}>Unfavuorite</button>
                }</div>
                </div>
                </div>

             
                </div>
            </>
        )
    }
}

export default Moviecard;