import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Nkpij2SKm6Zl7KFGlTMQaRqwGtIq0z48YV-Bhdrdx5A'
    }
})