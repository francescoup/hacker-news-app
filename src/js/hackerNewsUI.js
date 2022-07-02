import { get } from 'lodash';


export const dataNewsUI = (data) => {
    const itemSavedButton = document.querySelector('.saved-button');
    const closeButton = document.querySelector('.close-button');
    const savedContainer = document.querySelector('.container-saved');
    console.log(savedContainer)
    const newsItem = document.querySelector('.container-news');
    let titleNews = get(data, 'title');
    let linkNews = get(data, 'url');
    let dataNews = get(data, 'time');
    let theDate = new Date(dataNews * 1000);
    let dateString = theDate.toString().substring(4, 15);
    let loadItems = `
    <div class = 'container-items'>
    <div class = 'likes'><h2>save</h2></div>
    <div class = 'title'><h1>${titleNews}</h1></div>
    <div class = 'link'><h2><a href="${linkNews}" target = '_blank'>Read more...</a></h2></div>
    <div class = 'data-news'><h2>${dateString}</h2></div>
    </div>
    `;

    newsItem.innerHTML += loadItems;
    
    //save button function
    itemSavedButton.addEventListener('click', () => {
        savedContainer.classList.add('close')
    })
    //remove saved item from the list
    closeButton.addEventListener('click', () => {
        savedContainer.classList.remove('close')
    })    
}

//favorite items elements
export function saveFavorite(data) {
    let savedWrapper = document.querySelector('.saved-wrapper');
    const parent = data.parentElement.parentElement;
    const saveTitle = parent.querySelector('.title').textContent;
    const saveLink = parent.querySelector('.link').innerHTML;
    const saveData = parent.querySelector('.data-news').textContent;
    const likesFavorite = {saveTitle, saveLink, saveData}
    savedWrapper.innerHTML += `
    <div class='container-items saved-post'>
    <div class='remove-favorite'><h2>Remove</h2></div>
    <div>${saveTitle}</div>
    <div>${saveLink}</div>
    <div>${saveData}</div>
    </div>
    `; 
    removeFavorite()   
}


function removeFavorite(){
    const allRemove = document.querySelectorAll('.remove-favorite')
    //console.log(allRemove)
    allRemove.forEach( (btnClose, i) => {
        btnClose.addEventListener('click', () => {
            let savedDiv = btnClose.parentElement;
            savedDiv.style.display = 'none';
        })
    })
}