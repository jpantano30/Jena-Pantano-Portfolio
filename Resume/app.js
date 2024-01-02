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