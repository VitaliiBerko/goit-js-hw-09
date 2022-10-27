
function getEl(selector) {
    return document.querySelector(selector);
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

const refs ={
    startBtn: getEl('[data-start]'),
    stopBtn: getEl('[data-stop]'),
    body: getEl('body'),
};
let timerId =null;

refs.stopBtn.disabled = 1;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    refs.startBtn.disabled = 1;
    refs.stopBtn.disabled = 0;
    timerId =
     setInterval(()=>{    
    refs.body.style.backgroundColor = getRandomHexColor()}, 1000);

};

function onStopBtnClick () {
    clearInterval(timerId);
    refs.startBtn.disabled=0;
    refs.stopBtn.disabled = 1;
}

