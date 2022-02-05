function daimiBasicTopka(cvat, x, y, radius, dX, dY) {
    return {
        color: cvat,
        x: x,
        y: y,
        radius: radius,
        dx: dX,
        dy: dY,
        tip: "basic"
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function returnEx(x, y) {
    return {
        x: x,
        y: y,
    }
}

function measureDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
}
let expolsion = [];
let topki = [];
let availableColors = [
    'orange',
    'red',
    'blue',
    'green',
    'pink',
    'purple'
]
for (let i = 0; i < 10; i++) {
    topki.push(daimiBasicTopka(availableColors[randomInteger(availableColors.length)], randomIntFromInterval(20, 800), randomIntFromInterval(20, 600), randomIntFromInterval(5, 15), randomIntFromInterval(-2, 3), randomIntFromInterval(-2, 3)))
}
setInterval(() => {
    if (expolsion.length > 0) {
        expolsion.shift();
    }
}, 5000)

function update() {
    for (let i = 0; i < 10; i++) {
        topki[i].x = topki[i].x + topki[i].dx;
        topki[i].y = topki[i].y + topki[i].dy;
        if (topki[i].y < 0 || topki[i].y >= 600) {
            topki[i].y = -topki[i].y;
            topki[i].dy = -topki[i].dy;
        }
        if (topki[i].x < 0 || topki[i].x >= 800) {
            topki[i].x = -topki[i].x;
            topki[i].dx = -topki[i].dx;
        }
    }
    //     for (let i = 0; i < topki.length; i++) {
    //         for (let m = 0; m < expolsion.length; m++) {
    //             if (areColliding(topki[i].x, topki[i].y, expolsion[m].x, expolsion[m].y)) {
    //                 topki[i] = undefined;
    //                 console.log({
    //                     success: 'i work'
    //                 })
    //             }
    //         }
    //     }
}

function draw() {
    context.fillStyle = 'grey';
    context.fillRect(0, 0, 800, 600)
    for (let i = 0; i < 10; i++) {
        context.fillStyle = topki[i].color
        context.beginPath();
        context.arc(topki[i].x, topki[i].y, topki[i].radius, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }
    for (let i = 0; i < expolsion.length; i++) {
        context.fillStyle = 'orange'
        context.beginPath();
        context.arc(expolsion[i].x, expolsion[i].y, 40, 0, 2 * Math.PI, true);
        context.closePath();
        context.fill();
    }
}

function mouseup() {
    expolsion.push(returnEx(mouseX, mouseY))
}

function keyup(key) {}