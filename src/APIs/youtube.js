import axios from 'axios';

const KEY = 'AIzaSyCW46DAJViuH0QyFmyELQWdWLHFah8GlRQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});
