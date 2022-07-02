import '../css/style.css';
import { ApiCall } from './fetchApi.js';
import { loadMore } from './loadMore.js'
import domElementUI from './domUI.js';
import { favorite } from './saveFavorite'


ApiCall(10)
domElementUI()
loadMore()

document.addEventListener('DOMContentLoaded', () => {
    favorite()
})