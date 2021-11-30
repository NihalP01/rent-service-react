import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const apis = async (url) => {
    const { data } = await axios.get(baseUrl+url, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7027bbd8c8mshbfc8dae53b799b0p17c50djsnc561f3b4007e'
        }
    });
    return data;
}
