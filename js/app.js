/*
const btn1 = document.querySelector('.btn-chat-js')
const root = document.documentElement;

btn1.addEventListener('click', (e) => {

    console.log(e);

    const el = e.target;
    // pos sur x - decalage de l'element par rapport à la gauche
    let x = (e.clientX - el.offsetLeft) / el.offsetWidth;
    let y = (e.clientY - el.offsetTop) / el.offsetHeight;
    // console.log(e.clientX, el.offsetLeft, el.offsetWidth);
    
    root.style.setProperty('--wavecoord-x', x)
    root.style.setProperty('--wavecoord-y', y)

})
*/

const btn1 = document.querySelector('.mobile-nav');
const btn2 = document.querySelector('.cross2');
const slide = document.querySelector('.left-part-slide');
const filterappear = document.querySelector('.filter-black');

let togglebtn;

btn1.addEventListener('click', sliderightmobile);
btn2.addEventListener('click', crossclose);


function sliderightmobile(){

    if(!togglebtn) {
        slide.style.setProperty("transform", "translate(0)", "important");
        //slide.style.transform = "translate(0)"; Si sa ne marche pas
        filterappear.style.background = "#00000060";
        return;
    }
};

function crossclose(){

    if(!togglebtn) {
        slide.style.transform = "translate(100%)";
        filterappear.style.background = "#00000000";
        return;
    }
}
