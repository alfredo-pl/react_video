import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import youtube from './api/youtube';
import VideoList from './VideoList/VideoList';
import VideoDetail from './VideoDetail/VideoDetail';

export default class App extends React.Component {

    state={videos: [], seletedVideo: null};

    componentDidMount(){
        this.onTermSearch("buildings")
    }

    onTermSearch= async term =>{
       const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });
        
        this.setState({
            videos: response.data.items,
            seletedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video =>{
       this.setState({seletedVideo: video})
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSearch}/>
            
               <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.seletedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList 
                        onVideoSelect={this.onVideoSelect}
                        videos={this.state.videos}/>
                    </div>
                </div>
               </div>
            </div>
        )
    }
};

