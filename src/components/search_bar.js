import React,{Component} from 'react';



class SearchBar extends Component{

    constructor(props){
        super(props)
        this.state = {term:''}
    }

    render(){
        return(
        <div className='search-bar'>
            <input 
            value={this.state.term}
            onChange={(event) => this.onInputChanges(event.target.value)} />
            
        </div>
        );
    }
onInputChanges(term){
this.setState({term})
this.props.onSearchTermChanges(term)
}
        
   
}

export default SearchBar;