const button=document.querySelector("#add-button");
const favSection=document.querySelector('.favorites-select');
const searchMovie=document.querySelector('#search');

searchMovie.addEventListener('keyup', (e)=>{
    const movieSearch=e.target.value;


    //checking if the search input is empty
    if(movieSearch!==''){
        console.log(movieSearch);
    }

})


// const url="https://soundtrack-playlists.p.rapidapi.com/";
// fetch(url)
//     .then(res => res.json())
//     .then(res => {
//         res.data.map(user => {
//             console.log(user);
//         });
//     });