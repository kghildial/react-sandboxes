import axios from 'axios';

const KEY = 'AIzaSyDtoZQTj4OBj7zvuOxSuvw2WIuzdZtSOaw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});