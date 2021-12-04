import axios from 'axios';

export const baseUrl = `https://bayut.p.rapidapi.com/properties/list`

export const apis = async (url) => {
    const { data } = await axios.get(baseUrl + url, {
        header: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '0617f29d56mshbbaccc55b857159p140150jsn1fc5c1a2b64d'
        }
    });
    return data;
}
