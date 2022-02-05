let ostrov = {
    x: [],
    y: [],
    razmer: [],
    visochina: [],
    broi: 0
}
let my = {
    x: 300,
    y: 100,
    ugul: 0
}
for (let i = 0; i < 4; i++) {
    ostrov.x.push(20 + randomInteger(750));
    ostrov.y.push(20 + randomInteger(550));
    ostrov.visochina.push(30 + randomInteger(30));
    ostrov.razmer.push(40 + randomInteger(40));
    ostrov.broi++;
}

function ORKEX(x, y, z) {
    return x;
}

function ORKEY(x, y, z) {
    return y - z;
}

function init() {
    for (let i = 0; i < ostrov.broi; i++) {
        ostrov.x.push(randomInteger(750));
        ostrov.y.push(randomInteger(550));
    }
}

function update() {
    // if (isKeyPressed[65]) { 

    // }
    my.ugul = my.ugul + 0.05;
}

function NarisuvaiOstrov(x, y, visochina, razmer) {
    let r1 = 240,
        g1 = 230,
        b1 = 140,
        r2 = 205,
        g2 = 133,
        b2 = 63;
    for (let i = 0; i < visochina; i++) {
        if (i == visochina + 1) {
            context.fillStyle = 'orange';
        } else {
            context.fillStyle = `rgb(${(r1 + (r2 - r1) * (i / visochina))}, ${(g1 + (g2 - g1) * (i / visochina))}, ${(b1 + (b2 - b1) * (i / visochina))})`;
        }
        let ekranenX = ORKEX(x, y, i),
            ekranenY = ORKEY(x, y, i);
        context.strokeStyle = 'orange'
        context.beginPath();
        context.arc(ekranenX, ekranenY, razmer - i / 2, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
        drawImage(crystal, ekranenX, ekranenY, 20, 20)
    }

}

function drawLodka(x, y, lodkaRazmer, lodkavrut) {
    let lodkaEkranenX, lodkaEkranenY;
    for (let z = 0; z < 80; z++) {
        lodkaEkranenX = ORKEX(x, y, z),
            lodkaEkranenY = ORKEY(x, y, z);
        drawLodkaOutline(lodkaEkranenX, lodkaEkranenY, lodkaRazmer, lodkavrut);
    }
    context.fillstyle = "yellow";
    drawLodkaOutline(lodkaEkranenX, lodkaEkranenY, lodkaRazmer, lodkavrut);
    context.fill();
    for (let z = 80; z < 100; z++) {
        lodkaEkranenX = ORKEX(x, y, z),
            lodkaEkranenY = ORKEY(x, y, z);
        drawLodkaoutline(lodkaEkranenX, lodkaEkranenY, lodkaRazmer, lodkaVrut);
    }
}

function drawLodkaoutline(x, y, radius, ugul) {
    context.save();
    context.translate(x, y)
    context.rotate(ugul)
    context.beginPath();
    context.arc(x - radius / 2, y, radius, -0.6, 0.6, false);
    context.arc(x + radius / 2, y, radius, Math.PI - 0.6, Math.PI + 0.6, false);
    context.lineTo(x, y - radius);
    context.closePath();
    context.stroke();
    context.restore();
}

function draw() {
    context.fillStyle = 'cyan';
    context.fillRect(0, 0, 800, 600);
    drawLodkaoutline(my.x, my.y, 100, my.ugul)
    for (let i = 0; i < ostrov.broi; i++) {
        NarisuvaiOstrov(ostrov.x[i], ostrov.y[i], ostrov.visochina[i], ostrov.razmer[i]);
    }
    context.beginPath();
    context.moveTo(0, 200);
    for (let i = 0; i < 800; i++) {
        context.lineTo(i, 200 + 30 * Math.sin(i / 5));
    }
    context.stroke();
    context.strokeStyle = 'brown';
    context.lineWidth = 5;
}

function mouseup() {}

function keyup(key) {

}
/*    
context.fillStyle = 'cyan';
    context.fillRect(0, 0, 800, 600)
    context.lineWidth = 1;
    context.strokeStyle = "orange";
    context.fillStyle = 'orange'
    context.beginPath();
    context.arc(100, 100, 50, 0, 2 + Math.PI);
    context.stroke();
    context.beginPath();
    context.arc(180, 98, 49, 0, 2 * Math.PI);
    context.stroke();
    context.beginPath();
    context.arc(180, 96, 48, 0, 2 * Math.PI);
    context.stroke();
    context.beginPath();
    context.arc(199, 94, 47, 9, 2 * Math.PI);
    context.stroke();
    context.beginPath();
    context.arc(180, 92, 46, 0, 2 * Math.PI);
    context.stroke();
    context.fill()
    */