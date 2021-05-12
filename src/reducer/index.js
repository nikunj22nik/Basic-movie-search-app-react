 import {combineReducers} from "redux";
 const initialstate={
         list:[],
         favlist:[],
         showfav:false
}
 
export function movies(state=initialstate,action){

    if(action.type=="Add_movies"){
return {
    ...state,list:action.movies
}
    }
    else if(action.type=="Add_favmovie"){
        return{
            ...state,favlist:[action.movie,...state.favlist]
        }
    }

    else if(action.type=="Remove_favmovie"){
        
        const index = state.favlist.indexOf(action.movie);
if (index > -1) {
  state.favlist.splice(index, 1);
}
        return{
          ...state
        }
    
    }


    else if(action.type=="Show_data"){
   
     action.setType ?  state.showfav=true:state.showfav=false;
        return {
            ...state
        }
    }

    return state;
}

 const initialSearchState={
     result:{}
 };

 export function search(state=initialSearchState,action){

    if(action.type==='addsearchresult'){
        return {
            ...state,result:action.movie
        }
  
    }
    
 return state;
  
  }
const initialRootState={
    movies: initialstate,
    search:initialSearchState

}

// export default function rootReducer(state=initialRootState,action){

//     return{
//     movies:movies(state.movies,action),
//     search:search(state.search,action)
//     }
// }

export default combineReducers({
movies,
search
})























