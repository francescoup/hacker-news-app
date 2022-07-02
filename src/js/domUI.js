// Create main element of the dom

const domElementUI = () => {
    const newsContainer = document.querySelector('.container');
    const itemSavedButton = document.createElement('div');
    const savedContainer = document.createElement('div')
    const closeSaved = document.createElement('div');
    const savedWrapper = document.createElement('div');
    const newsTitle = document.createElement('h1');
    const newsItem = document.createElement('div');
    const loadButton = document.createElement('button');

    itemSavedButton.textContent = 'Favorite';
    newsTitle.textContent = 'Tech news from the world';
    loadButton.textContent = 'Load More';
    closeSaved.textContent = 'Close';
    itemSavedButton.classList.add('saved-button')
    savedContainer.classList.add('container-saved')
    savedWrapper.classList.add('saved-wrapper');
    closeSaved.classList.add('close-button')
    newsTitle.classList.add('container-title');
    newsItem.classList.add('container-news');
    loadButton.classList.add('btn');

    newsContainer.append (
        itemSavedButton,
        savedContainer,
        newsTitle,
        newsItem,
        loadButton
    );
    savedContainer.append(
        closeSaved,
        savedWrapper,
    )
};


export default domElementUI


