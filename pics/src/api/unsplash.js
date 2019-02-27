import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0045d760f9814983aeb8fb3606dc37086c8deffc0f38293c1d0ab3c7025bf635'
    }
});