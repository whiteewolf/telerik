let korab = {
        x: 300,
        y: 300,
        posoka: 0,
        razmer: 25,
        vis: 25,
        speed: 5
    },
    patron = {
        x: [],
        y: [],
        broi: 0,
        posoka: [],
        razmer: 10,
        speed: 2,
        jivot: []
    }
let updates = 0;
let asteroids = {
    x: [],
    y: [],
    razmer: [],
    DX: [],
    DY: [],
    posokaX: [],
    posokaY: [],
    broi: 5,
    kartinki: [ballOrTree, ballOrTarget, barrelRed, barrelGrey, barrelGreen, box, lollipopFruitYellow]
}
let gameover = false;
let win = false;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function init() {
    for (let i = 0; i < asteroids.broi; i++) {
        asteroids.x[i] = randomInteger(800);
        asteroids.y[i] = randomInteger(600);
        asteroids.razmer[i] = randomIntFromInterval(30, 50);
        asteroids.posokaX[i] = randomIntFromInterval(-1, 1);
        asteroids.posokaY[i] = randomIntFromInterval(-1, 1);
    }
}

function StrelqiPatron() {
    patron.x[patron.broi] = korab.x;
    patron.y[patron.broi] = korab.y;
    patron.posoka[patron.broi] = korab.posoka;
    patron.broi++;
    patron.jivot[patron.broi] = 300;
    console.log({
        patron_count: patron.broi
    })
}

function update() {
    // if (!gameover && !win) {
    updates++;
    for (let i = 0; i < patron.broi; i++) {
        patron.jivot[i]--;
        if (patron.jivot[i] == 0) {
            patron.broi--;
            // patron.x[i] = -99999999999;
        }
    }
    for (let i = 0; i < asteroids.broi; i++) {
        asteroids.x[i] = asteroids.x[i] + asteroids.posokaX[i];
        asteroids.y[i] = asteroids.y[i] + asteroids.posokaY[i];
        if (asteroids.x[i] >= 800) {
            asteroids.x[i] = 0;
        }
        if (asteroids.x[i] < 0) {
            asteroids.x[i] = 750;
        }
        if (asteroids.y[i] < 0) {
            asteroids.y[i] = 550;
        }
        if (asteroids.y[i] >= 600) {
            asteroids.y[i] = 0;
        }
        if (areColliding(asteroids.x[i], asteroids.y[i], asteroids.razmer[i], asteroids.razmer[i], korab.x, korab.y, korab.razmer, korab.razmer)) {
            gameover = true;
        }
    }
    for (let i = 0; i < asteroids.broi; i++) {
        for (let p = 0; p < patron.broi; p++) {
            if (areColliding(asteroids.x[i], asteroids.y[i], asteroids.razmer[i], asteroids.razmer[i], patron.x[p], patron.y[p], patron.razmer, patron.razmer)) {
                asteroids.razmer[i] -= 5;
                if (asteroids.razmer[i] > 20) {
                    asteroids.broi = asteroids.broi - 1;
                    console.log("asteroid unishtozen, bravo voiniko", {
                        asteroids: asteroids.broi
                    })
                }
            }
        }
    }
    // if (asteroids.broi == 0) {
    //     win = true;
    // }
    if (isKeyPressed[87]) {
        korab.x += Math.cos(korab.posoka) * korab.speed;
        korab.y += Math.sin(korab.posoka) * korab.speed;
    }
    if (isKeyPressed[65]) {
        korab.posoka -= 0.03;
    }
    if (isKeyPressed[68]) {
        korab.posoka += 0.03;
    }
    if (isKeyPressed[32]) {
        if (updates % 50 == 0) {
            StrelqiPatron();
        }
    }
    const {
        speed,
        x,
        y,
        posoka
    } = patron;
    for (let i = 0; i < patron.broi; i++) {
        x[i] += Math.cos(posoka[i]) * speed;
        y[i] += Math.sin(posoka[i]) * speed;
    }
    if (korab.x >= 800) {
        korab.x = 0;
    }
    if (korab.x < 0) {
        korab.x = 775;
    }
    if (korab.y >= 600) {
        korab.y = 0;
    }
    if (korab.y < 0) {
        korab.y = 575;
    }
}

function draw() {
    drawImage(backStars, 0, 0, 800, 600)
    context.save();
    context.translate(korab.x, korab.y);
    context.rotate(korab.posoka);
    drawImage(playerShip2_red, -korab.razmer / 2, -korab.vis / 2, korab.razmer, korab.razmer)
    context.restore();
    for (let i = 0; i < patron.broi; i++) {
        drawImage(bullet, patron.x[i], patron.y[i], patron.razmer, patron.razmer)
    }
    let izberiKartinka = Math.floor(Math.random() * asteroids.kartinki.length)
    let izbranaKartinka = asteroids.kartinki[izberiKartinka];
    for (let i = 0; i < asteroids.broi; i++) {
        drawImage(izbranaKartinka, asteroids.x[i], asteroids.y[i], asteroids.razmer[i], asteroids.razmer[i])
    }
}