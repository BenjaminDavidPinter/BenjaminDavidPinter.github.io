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
            sizeMax: 75,
            growthRate: .50,
            color: 'yellow',
            draw: centerOrbital
        },
        {
            name: "Ideas",
            x: 0,
            y: 0,
            angle: 200,
            size: 0.00,
            sizeMax: 25,
            growthRate: .15,
            color: 'red',
            draw: childOrbital,
            ellipse: {
                x: this.window.innerWidth / 2,
                y: this.window.innerHeight / 2,
                w: 600,
                h: 150
            }
        },
        {
            name: "About Me",
            x: 0,
            y: 0,
            angle: 115,
            size: 0.00,
            sizeMax: 25,
            growthRate: .15,
            color: 'green',
            draw: childOrbital,
            ellipse: {
                x: this.window.innerWidth / 2,
                y: this.window.innerHeight / 2,
                w: 600,
                h: 100
            }
        },
        {
            name: "Skills",
            x: 0,
            y: 0,
            angle: 60,
            size: 0.00,
            sizeMax: 25,
            growthRate: .15,
            color: 'purple',
            draw: childOrbital,
            ellipse: {
                x: this.window.innerWidth / 2,
                y: this.window.innerHeight / 2,
                w: 400,
                h: 200
            }
        }
    ];

    stars = {
        collection: [],
        alpha: 0
    };

    for (let i = 0; i < 1000; i++) {
        stars.collection[i] = {
            x: Math.floor(Math.random() * window.innerWidth),
            y: Math.floor(Math.random() * window.innerHeight)
        }
    }
}

function draw() {
    if (beginDraw) {
        background(0, 0, 0);
        drawStars();
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

let drawStars = () => {
    stars.collection.forEach(star => {
        fill(`rgba(255, 255, 255, ${stars.alpha})`);
        circle(star.x, star.y, 2);
    });
    if (stars.alpha < 1) {
        stars.alpha += .005;
    }
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

function childOrbital() {
    fill(this.color);
    if (this.size < this.sizeMax) {
        this.size += this.growthRate;
    }
    this.x = Math.sin(this.angle) * (this.ellipse.w / 2) + (window.innerWidth / 2);
    this.y = Math.cos(this.angle) * (this.ellipse.h / 2) + (window.innerHeight / 2);
    circle(this.x, this.y, this.size);
    //stroke(this.color)
    noFill();
    //ellipse(this.ellipse.x, this.ellipse.y, this.ellipse.w, this.ellipse.h);
    if (this.angle > 359) {
        this.angle = 0;
    } else {
        this.angle += 0.001;
    }
}

function centerOrbital() {
    fill(this.color);
    if (this.size < this.sizeMax) {
        this.size += this.growthRate;
    }
    circle(this.x, this.y, this.size);
}