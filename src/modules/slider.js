

// window.addEventListener('load', () => {

//     const previous = document.querySelector('.previous');
//     const next = document.querySelector('.next');

//     const slider = document.querySelector('.slider__content');
//     const container = document.querySelector('slider__container')
//     const item = document.querySelectorAll('.item');

//     let counter = 0;

//     const stepSize = item[0].clientWidth;

//     slider.style.transform = 'translateX(' + `${-stepSize * counter + (slider.clientWidth - item[0].clientWidth) / 2}px)`;

//     next.addEventListener('click', () => {
//         if (counter === item.length - 3) {
//             counter = -1;
//             console.log(counter);
//         }
//         console.log(counter);
//         slider.classList.add('transformAnim');
//         counter++;
//         slider.style.transform = 'translateX(' + `${-stepSize * counter + (slider.clientWidth - item[0].clientWidth) / 2}px)`;
//     });
//     previous.addEventListener('click', () => {
        
//         if (counter <= 0 ) {
//             counter = item.length -1;
//             counter--;
//         }
//         slider.classList.add('transformAnim');
//         counter--;
//         slider.style.transform = 'translateX(' + `${-stepSize * counter + (slider.clientWidth - item[0].clientWidth) / 2}px)`;
//     });
// });

