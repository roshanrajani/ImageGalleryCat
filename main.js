const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

//set first img opacity

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click',imgClick));

function imgClick(e) {
    //reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // change current img src of clicked img
     current.src = e.target.src;

     //add fade in
    current.classList.add('fade-in');

    //remove fade-in in a sec
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //change the opacity to opacity var
    e.target.style.opacity = opacity;
}

