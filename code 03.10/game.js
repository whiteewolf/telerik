let myx, myy,
    imalistenaNa = [],
    izbranoNivo = 0;
let tablici = [];
for (let nivo = 0; nivo < 1; nivo++) {
    imalistenaNa[nivo] = [];
    for (let i = 0; i < 8; i++) {
        imalistenaNa[nivo][i] = [];
        tablici[i] = [];
        for (let j = 0; j < 8; j++) {
            imalistenaNa[nivo][i][j] = randomInteger(3);

        }
    }
}

function init() {

}

function update() {

}

function draw() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (imalistenaNa[izbranoNivo][i][j] == 1) {
                // drawImage(slabRed, 50 * i, 50 * j, 50, 50);
                context.fillStyle = "black";
                context.fillRect(50 * i, 50 * j, 50, 50)
            }
        }
    }
}

function mousedown() {
    let kliknatakolona = Math.floor(mouseX / 50),
        kliknatRed = Math.floor(mouseY / 50);
    console.log(kliknatakolona)
    console.log(kliknatRed)
    imalistenaNa[izbranoNivo][kliknatakolona][kliknatRed] = !imalistenaNa[izbranoNivo][kliknatakolona][kliknatRed];
}