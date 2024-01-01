const github = document.querySelector('.github');
const linkedin = document.querySelector('.linkedin');
const instagram = document.querySelector('.instagram');

let social = document.getElementById('social')

github.addEventListener('mouseenter', () => {
    social.innerText = 'GitHub'
})
github.addEventListener('mouseleave', () => {
    social.innerText = ''
})

linkedin.addEventListener('mouseenter', () => {
    social.innerText = 'LinkedIn'
})
linkedin.addEventListener('mouseleave', () => {
    social.innerText = ''
})

instagram.addEventListener('mouseenter', () => {
    social.innerText = 'Instagram'
})
instagram.addEventListener('mouseleave', () => {
    social.innerText = ''
})

// const cards = document.querySelectorAll(".card");

// function flip() {
//     this.classList.toggle('flip');
// }
// cards.forEach((card) => card.addEventListener("click", flip));

var card = document.querySelector('.card');
card.addEventListener('click', function() 
{
  card.classList.toggle('flipped');
});