import { Component } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import YOUTUBE_API_KEY from '../constants/youtubeapikey';

class Video extends Component {
    state = {
        loading: true
    };


    // async componentDidMount() {
        
        
    //     this.getVideos("Karasmai");
        
    // }

    getVideos(searchQuery) {
        var videoIDs = [];

        const url = 'https://www.googleapis.com/youtube/v3/search';
        axios.get(url, {
            params: {
                part: 'snippet',
                maxResults: 5,
                q: searchQuery,
                type:"video",
                key: YOUTUBE_API_KEY
            }
        }).then(response => {
            for (var i in response.data.items) {
                var item = response.data.items[i];
                videoIDs[i] = item.id.videoId;
            }
        })

        return videoIDs;
    }

    render() {

        // const videos = this.getVideos("Karasmai");
        // const videoList = videos.map((video) => <ReactPlayer url={'https://www.youtube.com/watch?v=' + video}/>);

        console.log(videos);
    
        return (
            <div>
                {/* {videoList} */}
                <p>test</p>
            </div>
        )
    }
}

export default Video;