const btnOn = document.querySelector(".btn-on");
const btnOff = document.querySelector(".btn-off");
const img = document.getElementById("image");
const head = document.getElementById("head");

const lightOn = () =>{
    head.innerHTML = "Can You Turn the Light Off?";
    img.src = "bulb-on.png";
};
const lightOff = () =>{
    head.innerHTML = "Can You Turn the Light On?";
    img.src = "bulb-off.png";
};

btnOn.addEventListener('click',lightOn);
btnOff.addEventListener('click',lightOff);