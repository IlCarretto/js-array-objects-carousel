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
    </div>`;
});

// Creating thumbs
for (let i = 0; i < images.length; i++) {
    const game = images[i];
    currentPhoto.innerHTML += `
    <div class="single-item">
        <div class="game-description">
            <h2 class="title">${game.title}</h2>
            <p class="title-description">${game.text}</p>
        </div>
        <img class="" src="${game.image}" alt="">
    </div>`;
}

// Start point
document.getElementById("previous-btn").addEventListener("click", thumbBackward);
document.getElementById("next-btn").addEventListener("click", thumbForward);
let currentPosition = 0;
const currentThumb = document.getElementsByClassName("ms-card");
const currentImage = document.getElementsByClassName("single-item");
currentThumb[currentPosition].classList.add("active");
currentImage[currentPosition].classList.add("active");

// Autoplay
const autoPlay = setInterval(thumbForward, 3000);


// Cambiare immagine al click
for (let i = 0; i < currentThumb.length; i++) {
    const currentGame = currentThumb[i];
    currentGame.addEventListener("click", function() {
        currentThumb[currentPosition].classList.remove("active");
        currentImage[currentPosition].classList.remove("active");

        currentPosition = i;

        currentThumb[currentPosition].classList.add("active");
        currentImage[currentPosition].classList.add("active");
    })
}


// FUNZIONI NON PURE
// Funzione che manda avanti al click del bottone
function thumbForward() {
    // Rimuovere la classe dalla posizione attuale
    currentThumb[currentPosition].classList.remove("active");
    currentImage[currentPosition].classList.remove("active");

    // Aggiungere +1 alla posizione attuale
    if (currentPosition < images.length - 1) {
        currentPosition++;
    } else {
        currentPosition = 0;
    }

    // Riaggiungere la classe alla nuova posizione
    currentThumb[currentPosition].classList.add("active");
    currentImage[currentPosition].classList.add("active");
}

// Funzione che manda indietro al click del bottone
function thumbBackward() {
    // Rimuovere la classe dalla posizione attuale
    currentThumb[currentPosition].classList.remove("active");
    currentImage[currentPosition].classList.remove("active");

    // Aggiungere -1 alla posizione attuale
    if (currentPosition > 0) {
        currentPosition--;
    } else {
        currentPosition = images.length - 1;
    }

    // Riaggiungere la classe alla nuova posizione
    currentThumb[currentPosition].classList.add("active");
    currentImage[currentPosition].classList.add("active");
}