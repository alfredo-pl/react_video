import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import youtube from './api/youtube';


export default class App extends React.Component {

    onTermSearch= term =>{
        youtube.get('/search',{
            params:{
                q: term
            }
        })
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSearch}/>
            </div>
        )
    }
};

