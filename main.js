const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// con questa funzione aggiungo al container gli elementi di un dato array
function getPost(array){
    // dichiaro gli oggetti del mio array che andr?? ad usare
    const {id, content, media, author, likes, created} = array;

    const container = document.getElementById('container');
    container.innerHTML += 
    `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src=${author.image} alt=${author.name}>
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author.name}</div>
                    <div class="post-meta__time">${created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src=${media} alt="${author.name}">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>
    </div>`
}

// versione senza destructuring della funzione sopra ->>

// const container = document.getElementById('container');
// container.innerHTML += 
// `<div class="post">
//     <div class="post__header">
//         <div class="post-meta">                    
//             <div class="post-meta__icon">
//                 // // <img class="profile-pic" src=${array.author.image} alt=${array.author.name}>

//                 <img class="profile-pic" src=${author.image} alt=${author.name}>
//             </div>
//             <div class="post-meta__data">
//                 // // <div class="post-meta__author">${array.author.name}</div>
//                 // // <div class="post-meta__time">${array.created}</div>

//                 <div class="post-meta__author">${author.name}</div>
//                 <div class="post-meta__time">${created}</div>
//             </div>                    
//         </div>
//     </div>
//     // // <div class="post__text">${array.content}</div>

//     <div class="post__text">${content}</div>
//     <div class="post__image">
//         // // <img src=${array.media} alt="${array.author.name}">

//         <img src=${media} alt="${author.name}">
//     </div>
//     <div class="post__footer">
//         <div class="likes js-likes">
//             <div class="likes__cta">
//                 <a class="like-button  js-like-button" href="#" data-postid="1">
//                     <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
//                     <span class="like-button__label">Mi Piace</span>
//                 </a>
//             </div>
//             <div class="likes__counter">
//             // // Piace a <b id="like-counter-1" class="js-likes-counter">${array.likes}</b> persone

//                 Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
//             </div>
//         </div> 
//     </div>
// </div>`
// }


// ciclo con cui aggiungo di volta in volta tutti gli oggetti del mio array
for(let i = 0; i < posts.length; i++){
    getPost(posts[i]);
}



// DATA

// function date(array){
//     // array = parseInt(array);
//     let month = array.getMonth();
//     let day = array.getDate();
//     const year = array.getFullYear();
  
//     return `${day}/${month}/${year}`;
// }
// console.log(date(posts.created));



// LIKE

// for (let i = 0; i < posts.length; i++){
//     let lik = document.getElementsByClassName('likes__cta');
//     let button = document.getElementsByClassName('like-button');
//     let counter = document.getElementsByClassName('js-likes-counter');

//     button[i].addEventListener('click', function(){
//         lik.classList.add('like-button--liked');
//         counter[i].innerHTML = + 1;
//         // if(button[i].classList.contains('like-button--liked')){ 
//         //     lik.classList.remove('like-button--liked');
//         //     counter[i].innerHTML = - 1;
//         // }else
//         // {
//         //     lik.classList.add('like-button--liked');
//         //     counter[i].innerHTML = + 1;
//         // }
//     });
// }
