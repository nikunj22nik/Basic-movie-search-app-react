import React, { Component } from 'react'
import {handleMovieSearch} from '../action';

class Navbar extends React.Component {

constructor(props){
  super(props);


  this.state={
      searchText:'',
      showText:true

  }
}


handlechange=(search)=>{
        this.setState({
            searchText:search
        })
    }
    closediv=()=>{

        this.setState({
            showText:false
        })
    }
    handlesearch=()=>{
   const {searchText}=this.state;

   this.props.dispatch(handleMovieSearch(searchText));

}


    render() {

const result=this.props.result;

console.log("render+in navbar");
const showsearchresult=this.state.showText;
const img_add="https://images.unsplash.com/photo-1558679908-541bcf1249ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXJtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
        return (
            <>
             <div className="nav-header">
             <div className="upper-header">
             <input type="text" placeholder="Enter Movie"  onChange={(e)=>this.handlechange(e.target.value)}  />
             <button className="search-btn" onClick={this.handlesearch}>Search</button>
             </div>             
            {showsearchresult && 
            
            <div className="search-container">
            <div className="left">
 <img src={img_add}></img>
            </div>
            <div className="right">
           <h3>Superman</h3>
           <div className="fotter">
           <div>
            <button className="close-btn" onClick={this.closediv}> close</button>
           </div>
           <div>6.78</div>
            </div>
           </div>

            </div>
                        
            }



             </div>


            </>

        )
    }


}

export default Navbar;




