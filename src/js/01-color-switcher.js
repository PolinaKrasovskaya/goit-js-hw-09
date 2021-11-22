const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', onColorSwitcherStart);
refs.stopBtn.addEventListener('click', onColorSwitcherStop);

const timer = {
    timerlId: null,
    isActive: true,
}

function onColorSwitcherStart () {
    if(timer.isActive) {
        timer.isActive = false;
        timer.timerlId = setInterval(() => {
            refs.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    }
}

function onColorSwitcherStop () {
    if(!timer.isActive) {
        timer.isActive = true;
        clearInterval(timer.timerlId);
    }
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }