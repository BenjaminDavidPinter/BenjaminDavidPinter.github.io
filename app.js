function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    setTimeout(ditchSplash, 4000);
    beginDraw = false;

    circles = [
        {
            name: "Projects",
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            size: 0.00,
            sizeMax: 50,
            growthRate: .15,
            color: 'blue',
            draw: standardDraw
        },
        {
            name: "Ideas",
            x: window.innerWidth / 2 + Math.floor(Math.random() * 100) + 200,
            y: window.innerHeight / 2 + Math.floor(Math.random() * 100) + 200,
            size: 0.00,
            sizeMax: 25,
            growthRate: .15,
            color: 'red',
            draw: standardDraw
        }
    ];
}

function draw() {
    if (beginDraw) {
        background(240, 255, 240);
        circles.forEach(element => {
            element.draw();
        });
    }
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
        setTimeout(() => {
            beginDraw = true;
        }, 1000);
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

function standardDraw() {
    fill(this.color);
    if (this.size < this.sizeMax) {
        this.size += this.growthRate;
    }
    circle(this.x, this.y, this.size);
}