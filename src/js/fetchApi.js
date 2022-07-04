import axios from 'axios';
import { dataNewsUI } from './hackerNewsUI.js'


export const ApiCall = (loadNews) => {
const hackerNewsId = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&orderBy="$key"&limitToFirst=${loadNews}`;
const hackerNewsItem = 'https://hacker-news.firebaseio.com/v0/item/';

const showData = async () => {
    try {
    const response = await axios.get(hackerNewsId); //fetch id number
    const data = await response.data;
    // console.log(response)
    // console.log(data);
    data.map( async (id) => {
        const newsData = await axios.get(`${hackerNewsItem}${id}.json`); //fetch news with id number
        const newsItem = newsData.data;
        // console.log(newsItem)
        dataNewsUI(newsItem);
    })
    } catch(error) {
        console.log(error.message + ' try later');
    }
}
showData()
}
