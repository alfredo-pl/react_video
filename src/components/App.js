import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import youtube from './api/youtube';
import VideoList from './VideoList/VideoList';


export default class App extends React.Component {

    state={videos: [], seletedVideo: null};

    onTermSearch= async term =>{
       const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });
        
        this.setState({videos: response.data.items})
    }

    onVideoSelect = video =>{
        console.log("video me gusta", video)
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSearch}/>
            
                I have {this.state.videos.length} videos.

                <VideoList 
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}/>
            </div>
        )
    }
};

