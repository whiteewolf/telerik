let updates = 0;
let camera = {
        x: 0,
        y: 0
    },
    player = {
        x: 400,
        y: 500,
    }
let cvetoveArray = ["red", "orange", "blue", "green", "yellow"];
let gameover = false;

function init() {

}

function update() {
    if (!gameover) {
        updates++;
        camera.y++;
        player.y += 1;
        if (isKeyPressed[32]) {
            player.y -= 10;
        }
        if (player.y >= 650) {
            gameover = true;
            setTimeout(() => {
                alert('You died in my game! Press F5 to refresh')
            }, 5e2)
        }
    }
}

function drawCircle(x, y, radius, brChasti, ugulvurtene, cvetove, brCvetove) {
    // console.log(cvetove);
    let segmentugul = (2 * Math.PI) / brChasti;
    for (let i = 0; i < brChasti; i++) {
        let nachalenu = i * segmentugul + ugulvurtene,
            kraenu = nachalenu + segmentugul;
        let tekcvqtNomer = i;
        while (tekcvqtNomer >= brCvetove) {
            tekcvqtNomer = tekcvqtNomer - brCvetove;
        }
        if (i >= brCvetove) {
            tekcvqtNomer = i - brCvetove;
        }
        context.fillStyle = cvetove[tekcvqtNomer];
        context.beginPath();
        context.arc(x, y, radius, nachalenu, kraenu, false);
        context.lineTo(
            x + Math.cos(kraenu) * (radius - 20),
            y + Math.sin(kraenu) * (radius - 20));
        context.arc(x, y, radius - 20, kraenu, nachalenu, true);
        context.closePath();
        context.fill();
        context.stroke();
    }
}

function daiMiCvetaOtdolu(brChasti, ugulVurtene, brCvetove) {
    let tekCvqtI = 0,
        segmentUgul = (2 * Math.PI / brChasti);

    return brCvetove - 1 - Math.floor((Math.PI * 2 + ugulVurtene - Math.PI / 2) / segmentUgul) % brCvetove;
}

function drawColorChanger(x, y, radius) {
    for (let i = 0; i < 15; i++) {
        context.fillStyle = cvetoveArray[randomInteger(i).length];
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
        context.stroke();
    }
}

function draw() {
    if (!gameover) {
        context.fillStyle = "grey";
        context.fillRect(0, 0, 800, 600)
        context.fill();
        for (let i = 0; i < 20; i++) {
            drawCircle(400, 100 - i * 400 + camera.y, 100, 5, updates / 100, cvetoveArray, 5);
        }
        for (let i = 0; i < 15; i++) {
            drawColorChanger(400, -550 - i * 700 + camera.y, 15);
        }
        context.fillStyle = "blue";
        context.beginPath();
        context.arc(player.x, player.y, 15, 0, Math.PI * 2, false);
        context.closePath();
        context.stroke();
        context.fill();
    }
}