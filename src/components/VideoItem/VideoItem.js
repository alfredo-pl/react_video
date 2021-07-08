import React from 'react';

const VideoItem = ({video}) => {
    return (
        <div>
            <h6>{video.snippet.title}</h6>
            <img src={video.snippet.thumbnails.medium.url}/>
        </div>
    )
}
 
export default VideoItem;