import _ from 'lodash'
import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail'
const api_key = "AIzaSyAdwXuyp8PH_lSixSxEg4ZD6CjJgZd1hwc";

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            videos : [],
            selectedVideo:null
        };
        this.videoSearch("React JS")

       
    }
    videoSearch(term){
        YTSearch({ key: api_key, term:term},(videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            })
            //above means this.setState({videos:videos});
            
        });
        
    }
    render(){
        const videosearchWithDelay = _.debounce((term) => {this.videoSearch(term)},300);
        return(
            <div>
                <SearchBar onSearchTermChanges={videosearchWithDelay}/>
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                 videos={this.state.videos} />
            </div>
        );
    }
}
ReactDOM.render(<App />,document.querySelector('.container'))


  

