import { ApiCall } from "./fetchApi.js";


//Loadmore function will increase the numbers of the news
export const loadMore = () => {
const btn = document.querySelector('.btn').addEventListener('click', () => {
    let item = 0;
    item += 10;
    ApiCall(item)
})
}