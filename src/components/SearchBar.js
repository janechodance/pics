import React from 'react';

class SearchBar extends React.Component{
    state = { term: ''};
    onInputChange=(event)=>{
      this.setState({term: event.target.value})
      console.log(this.state.term)
    }
    // use arrow function to bind "this" to the instance of the class so won't have undefined error
    onFormSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state.term)
        this.props.getTerm(this.state.term)
    }
    render(){
        return(
            <div className="ui segment">
            <form className='ui form' onSubmit={this.onFormSubmit}>
                <div className='field'>
                <label>Image Search</label>
                <input type="text" value ={this.state.term} onChange={this.onInputChange}/>
                </div>
                
            </form>
            </div>
        )
    }
}

export default SearchBar;