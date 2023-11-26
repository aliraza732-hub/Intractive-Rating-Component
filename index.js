const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

submitButton.addEventListener('click', () => {
    mainContainer.style.display = 'none'
    thanksContainer.classList.remove('hidden')
})

rateAgain.addEventListener('click', () => {
    mainContainer.style.display = 'block'
    thanksContainer.classList.add('hidden')
})
ratings.forEach(rating => rating.addEventListener('click', () => {
    actualRating.textContent = rating.textContent
}))