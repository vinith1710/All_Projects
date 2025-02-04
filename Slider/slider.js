// const left = document.querySelector('.left');
// const right = document.querySelector('.right');
// const slider = document.querySelector('.slider');
// const images = document.querySelectorAll('.image');
// const bottom = document.querySelector('.bottom');
// const length = images.length;
// let initialLength = 1;

// for(i=0;i<length;i++){
//     const div = document.createElement('div');   
//     div.className = 'btn';
//     bottom.appendChild(div);
// }

// const buttons = document.querySelectorAll('.btn');
// buttons[0].style.backgroundColor="white";

// const resetBg=()=>{
//     buttons.forEach(button=>{
//         button.style.backgroundColor='transparent';
//     })
// }

// buttons.forEach((button,i)=>{
//     button.addEventListener('click',()=>{
//         resetBg();
//         slider.style.transform = `translateX(-${i * 400}px)`;
//         initialLength=i+1;
//         button.style.backgroundColor='white';
//     });
// });

// const rightSlide = ()=>{
//     slider.style.transform = `translateX(-${initialLength * 400}px)`;
//     initialLength++;
// }
// const resetRightSlide=()=>{
//     slider.style.transform = `translateX(0px)`;
//     initialLength = 1;
// }
// const lefttSlide=()=>{
//     slider.style.transform = `translateX(-${(initialLength-2) * 400}px)`;
//     initialLength--;
// }
// const resetLeftSlide = ()=>{
//     slider.style.transform = `translateX(-${(length - 1) * 400}px)`;
//     initialLength = 4;
// }
// right.addEventListener('click',()=>{
//     initialLength < length ? rightSlide() : resetRightSlide()
//     resetBg();
//     buttons[initialLength-1].style.backgroundColor='white';
// })
// left.addEventListener('click',()=>{
//     initialLength > 1 ? lefttSlide() : resetLeftSlide()
//     resetBg();
//     buttons[initialLength-1].style.backgroundColor='white';
// })


const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNumber = 1;
const length = images.length;

for (i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.className = 'btn';
    bottom.appendChild(div);
}
const buttons = document.querySelectorAll('.btn');
buttons[0].style.backgroundColor = 'white';

const bgclr = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent';

    })
}

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        slider.style.transform = `translateX(-${i * 400}px)`;
        bgclr();
        button.style.backgroundColor = 'white';

        slideNumber = i + 1;
    })
})


const rightSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 400}px)`;
    slideNumber++;
}
const resetRightSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}
right.addEventListener('click', () => {
    slideNumber < length ? rightSlide() : resetRightSlide()
    bgclr();
    buttons[slideNumber - 1].style.backgroundColor = 'white';

})

const leftSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
    slideNumber--;
}
const resetLeftSlide = () => {

    slider.style.transform = `translateX(-${(length - 1) * 400}px)`;
    slideNumber = 4;
}
left.addEventListener('click', () => {

    slideNumber > 1 ? leftSlide() : resetLeftSlide()
    bgclr();
    buttons[slideNumber - 1].style.backgroundColor = 'white';

})


