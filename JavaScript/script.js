document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.Membres-du-Bureau h1');
    const membersSection = document.querySelector('#Membres-du-Bureau');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const imageContainer = document.querySelector('.Membres-du-Bureau-images');
    let currentIndex = 0;
    const images = document.querySelectorAll('.Membres-du-Bureau-images img');
    const totalImages = images.length;

    // Fonction pour animer l'apparition du titre
    function animateTitle() {
        title.style.opacity = 0;
        title.style.transition = "opacity 1s ease"; // Transition de l'opacité
        setTimeout(function () {
            title.style.opacity = 1;
        }, 100); // délai pour laisser le temps de voir l'animation
    }

    // Fonction pour rendre la section visible
    function showMembersSection() {
        membersSection.classList.add('visible'); // Ajoute la classe visible pour rendre la section visible
    }

    // Appel de l'animation du titre et de la visibilité de la section
    membersSection.addEventListener('click', function() {
        showMembersSection();
        animateTitle(); // Animation du titre
    });

    // Fonction pour afficher la prochaine image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages; // Augmente l'indice, et recommence à 0 si on atteint la fin
        imageContainer.style.transform = `translateX(-${currentIndex * 520}px)`; // Déplace les images
    }

    // Fonction pour afficher l'image précédente
    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Diminue l'indice, et recommence à la fin si on est au début
        imageContainer.style.transform = `translateX(-${currentIndex * 520}px)`; // Déplace les images
    }

    // Ajouter les événements de clic pour les flèches
    leftArrow.addEventListener('click', showPreviousImage);
    rightArrow.addEventListener('click', showNextImage);
});
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments nécessaires
    const imagesWrapper = document.querySelector('.Nos-Activites-images');
    const leftArrow = document.querySelector('.activite-arrow.left');
    const rightArrow = document.querySelector('.activite-arrow.right');
    const images = document.querySelectorAll('.Nos-Activites-images img');
    const totalImages = images.length;
    let currentIndex = 0;

    // Fonction pour déplacer les images vers la gauche
    function moveLeft() {
        currentIndex--;
        if (currentIndex < 0) currentIndex = totalImages - 1; // Revenir au dernier élément
        updateImagePosition();
    }

    // Fonction pour déplacer les images vers la droite
    function moveRight() {
        currentIndex++;
        if (currentIndex >= totalImages) currentIndex = 0; // Revenir au premier élément
        updateImagePosition();
    }

    // Fonction pour mettre à jour la position des images
    function updateImagePosition() {
        const offset = -currentIndex * (images[0].clientWidth + 20); // Calculer le décalage horizontal
        imagesWrapper.style.transform = `translateX(${offset}px)`;
    }

    // Ajouter les événements pour les flèches
    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);

    // Initialiser l'affichage des images
    updateImagePosition();
});
