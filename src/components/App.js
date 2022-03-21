import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component{
    state = {images: []};
    async onSearchSubmit(term){
     const response = await axios.get('https://api.unsplash.com/search/photos',{
        params: {query: term},
        headers: {
            Authorization: 'Client-ID Nkpij2SKm6Zl7KFGlTMQaRqwGtIq0z48YV-Bhdrdx5A'
        }
      })
      console.log(response.data.results)
    }
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar getTerm={this.onSearchSubmit}/>
        </div>
        )
    }
}


export default App;