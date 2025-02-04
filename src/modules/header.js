

const danmark = document.querySelector('.lang__dan');
const kingdom = document.querySelector('.lang__united');
const germany = document.querySelector('.lang__ger');
const langContainer = document.querySelector('.header__lang');

let noneClass = 'none';

// Добавляем обработчики событий
danmark.addEventListener('click', function(event){
    choiseLang(event);
    
});

kingdom.addEventListener('click', function(event){
    choiseLang(event);
    
});

germany.addEventListener('click', function(event){
    choiseLang(event);
    
});


function choiseLang(event) {
    if (event.target === germany) {
        kingdom.classList.toggle(noneClass)
        danmark.classList.toggle(noneClass)
        langContainer.classList.add('anim-leng');
    } else if (event.target === kingdom) {
        danmark.classList.toggle(noneClass)
        germany.classList.toggle(noneClass)
        langContainer.classList.add('anim-leng');
    } else if (event.target === danmark) {
        kingdom.classList.toggle(noneClass)
        germany.classList.toggle(noneClass)
        langContainer.classList.add('anim-leng');
    }   
    
}




