let nav = document.getElementById('nav');
let content = document.getElementById('content');
var r = document.querySelector(':root');
let contentHeight = content.clientHeight;
r.style.setProperty('--contentHeight', contentHeight + 'px');

let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

function openNav() {
    if (!isTouchDevice) {
        nav.classList.remove('close');
        nav.classList.add('open');
    }
}

function closeNav() {
    if (!isTouchDevice) {
        nav.classList.remove('open');
        nav.classList.add('close');
    }
}

function navAction() {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        nav.classList.add('close');
    } else {
        nav.classList.remove('close');
        nav.classList.add('open');
    }
}