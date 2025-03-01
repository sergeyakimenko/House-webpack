
// const btnHiddenContent = document.querySelector('.btn-show-content');
const contentPrice = document.querySelectorAll('.faq-main-list__hidden-content_prices');
const btnPrices = document.querySelector('.btn-show-content_prices');
const btnRotatePrices = document.querySelector('.btn-rotate_prices')
btnPrices.addEventListener('click', function () {
    toggleClass(contentPrice, btnRotatePrices)
})

const contentTheWalk = document.querySelectorAll('.faq-main-list__hidden-content_the-walk');
const btnTheWalk = document.querySelector('.btn-show-content_the-walk');
const btnRotateTheWalk = document.querySelector('.btn-rotate_the-walk')
btnTheWalk.addEventListener('click', function () {
    toggleClass(contentTheWalk, btnRotateTheWalk)
})

const contentCapacity = document.querySelectorAll('.faq-main-list__hidden-content_capacity');
const btnCapacity = document.querySelector('.btn-show-content_capacity');
const btnRotateCapacity = document.querySelector('.btn-rotate_capacity')
btnCapacity.addEventListener('click', function () {
    toggleClass(contentCapacity, btnCapacity)
})

const contentPets = document.querySelectorAll('.faq-main-list__hidden-content_pets');
const btnPets = document.querySelector('.btn-show-content_pets');
const btnRotatePets = document.querySelector('.btn-rotate_pets')
btnPets.addEventListener('click', function () {
    toggleClass(contentPets, btnRotatePets)
})

const contentCheckIn = document.querySelectorAll('.faq-main-list__hidden-content_check-in');
const btnCheckIn = document.querySelector('.btn-show-content_check-in');
const btnRotateCheckIn = document.querySelector('.btn-rotate_check-in')
btnCheckIn.addEventListener('click', function () {
    toggleClass(contentCheckIn, btnRotateCheckIn)
})


function toggleClass (content, btn) {
    content.forEach((list) => {
        list.style.display = list.style.display === 'block' ? 'none' : 'block';
        if (list.style.display === 'none') {
            btn.style.transition = `transform 0.1s ease-in-out`;
            btn.style.transform = `rotate(${0}deg)`;
        }
        if (list.style.display === 'block') {
            btn.style.transition = `transform 0.1s ease-in-out`;
            btn.style.transform = `rotate(${90}deg)`;
        }
    })   
}