const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// [*] Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// [] Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


// Dinamic Insert Images
const currentPhoto = document.querySelector(".current-photo");
const row = document.querySelector(".row");

// Creating slide
images.forEach((item) => {
    row.innerHTML += `
    <div class="col">
        <div class="ms-card">
            <img src="${item.image}" alt="">
        </div>
    </div>`
});

// Creating thumbs
for (let i = 0; i < images.length; i++) {
    const game = images[i];
    currentPhoto.innerHTML += `
    <h2 class="title">${game.title}</h2>
    <p class="title-description">${game.text}</p>
    <img class="" src="${game.image}" alt="">`;
}

// Start point
const prevBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const currentThumb = document.getElementsByClassName("ms-card");
const currentImage = document.getElementsByClassName("single-item");
let currentPosition = 0;
currentThumb[currentPosition].classList.add("active");
console.log(currentThumb);
currentImage[currentPosition].classList.add("active");