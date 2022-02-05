let player = {
        x: 400,
        y: 300,
        hearts: 3,
        points: 0
    },
    enemy = [],
    isGameOver = false;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function MakeEnemy(x = Number, y = Number, jivot = Number, dx = Number, dy = Number, kartinka) {
    return {
        x: x,
        y: y,
        jivot: jivot,
        kartinka: kartinka,
        dx: dx,
        dy: dy
    }
}

function init() {
    for (let i = 0; i < 20; i++) {
        let tekImageIndex = randomIntFromInterval(0, 5)
        let tekImageSTR = jelly[tekImageIndex];
        enemy.push(MakeEnemy(randomIntFromInterval(0, 780), randomIntFromInterval(0, 580), randomIntFromInterval(0, 5), randomIntFromInterval(-2, 2), randomIntFromInterval(-2, 2), tekImageSTR))
    }
}

function update() {
    enemy.map(x => {
        x.x = x.x + x.dx;
        x.y = x.y + x.dy;
        if (x.x > 800) {
            x.x = x.x + x.dx;
        }
        if (x.x < 0) {
            x.x = x.x - x.dx;
        }
        if (x.y > 600) {
            x.y = x.y + x.dy;
        }
        if (x.y > 0) {
            x.y = x.y - x.dy;
        }
    })
    if (isKeyPressed[32]) {
        // coming soon
    }
    if (isKeyPressed[65]) {
        player.x--;
    }
    if (isKeyPressed[68]) {
        player.x++;
    }
    if (isKeyPressed[83]) {
        player.y++;
    }
    if (isKeyPressed[87]) {
        player.y--;
    }
}

function draw() {
    drawImage(backSunset, 0, 0, 800, 600)
    enemy.map(x => {
        drawImage(x.kartinka, x.x, x.y, 20, 20)
    })
}

function mouseup() {}

function keyup(key) {}