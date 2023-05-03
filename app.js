function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    setTimeout(ditchSplash, 4000);
}

function draw() {
    background(220);
}

function ditchSplash() {
    const P = document.getElementById("l1");
    const r = document.getElementById("l2");
    const a = document.getElementById("l3");
    const g = document.getElementById("l4");
    const secondP = document.getElementById("l5");
    const secondR = document.getElementById("l6");
    const o = document.getElementById("l7");
    const secondG = document.getElementById("l8");
    fadeElementOut(r);
    fadeElementOut(a);
    fadeElementOut(g);
    fadeElementOut(secondR);
    fadeElementOut(o);
    fadeElementOut(secondG);

    setTimeout(() => {
        fadeElementOut(P);
        fadeElementOut(secondP);
    }, 1000)
}

function fadeElementOut(fadeTarget) {
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 10);
}