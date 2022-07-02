import { saveFavorite } from './hackerNewsUI';


//Created a nodelist of save button
export function favorite(){
    const timeOut = setTimeout(like, 3000);
    function like(){
        const allLikes = document.querySelectorAll('.likes');
        allLikes.forEach( like => {
            like.addEventListener('click', (event) => {
                saveFavorite(event.target)
            })
        })
    }  
}



