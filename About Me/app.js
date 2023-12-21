const next = document.querySelector('.nxt');
const previous = document.querySelector('.prev');
const images = document.getElementsByClassName('images');

let currentImgIndex = 0;
console.log('Initial index:', currentImgIndex)
let previousImgIndex = 0;

next.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex++
    console.log(currentImgIndex)

    if (currentImgIndex >= images.length){
        console.log('Too high of an index! Going to reset to 0!')
        currentImgIndex = 0;
    }

    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
});

previous.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex--

    if (currentImgIndex < 0){
        currentImgIndex = images.length - 1;
    }

    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
});