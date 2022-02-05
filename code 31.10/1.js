let planet,
    firstMousedown = true,
    startIztrelX,
    startIztrelY,
    endIztrelX,
    endIztrelY;
endlessCanvas = true;
let moveSlunce = false;

function init() {
    planet = {
        x: [],
        y: [],
        mass: [],
        dx: [],
        dy: [],
        kartinki: [],
        kartinkaNomer: [],
        razmer: 20,
        broi: 0
    }
    for (let i = 0; i < 7; i++) {
        planet.kartinki[i] = tryToLoad("planet-" + (i + 11), "red")
        planet.kartinkaNomer[i] = randomInteger(planet.x.length)
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createPlanet(x, y, dx, dy, mass, kartinkaNomer) {
    planet.x.push(x);
    planet.y.push(y);
    planet.dx.push(dx);
    planet.dy.push(dy);
    planet.mass.push(mass);
    planet.kartinkaNomer.push(kartinkaNomer);
    planet.broi++;
}
// createPlanet(i + 300, randomIntFromInterval(200, 300), 0, randomIntFromInterval(-6, 6), randomIntFromInterval(100, 300) * 20, randomIntFromInterval(11, 18))

function measureDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
}

function Durpai(nomerDurpashta, nomerDurpana) {
    let razstoqnie = measureDistance(planet.x[nomerDurpana], planet.y[nomerDurpana], planet.x[nomerDurpashta], planet.y[nomerDurpashta])
    let silaNaGravitaciqta = (planet.mass[nomerDurpashta] * planet.mass[nomerDurpana]) / (razstoqnie * razstoqnie)
    let posokaKumSluncetoDX = (planet.x[nomerDurpashta] - planet.x[nomerDurpana]) / razstoqnie
    let posokaKumSluncetoDY = (planet.y[nomerDurpashta] - planet.y[nomerDurpana]) / razstoqnie
    let uskorenieX = silaNaGravitaciqta * posokaKumSluncetoDX
    let uskorenieY = silaNaGravitaciqta * posokaKumSluncetoDY
    planet.dx[nomerDurpana] += uskorenieX
    planet.dy[nomerDurpana] += uskorenieY
}

function update() {
    for (let i = 0; i < planet.dx.length; i++) {
        planet.x[i] += planet.dx[i]
        planet.y[i] += planet.dy[i]
        // let razstoqnie = measureDistance(planet.x[i], planet.y[i], planet.x[0], planet.y[0])
        // let silaNaGravitaciqta = (planet.mass[0] * planet.mass[i]) / (razstoqnie * razstoqnie)
        // let posokaKumSluncetoDX = (planet.x[0] - planet.x[i]) / razstoqnie
        // let posokaKumSluncetoDY = (planet.y[0] - planet.y[i]) / razstoqnie
        // let uskorenieX = silaNaGravitaciqta * posokaKumSluncetoDX
        // let uskorenieY = silaNaGravitaciqta * posokaKumSluncetoDY
        // planet.dx[i] += uskorenieX
        // planet.dy[i] += uskorenieY
        // if (isKeyPressed[81]) {
        //     moveSlunce = !moveSlunce;
        // }
        // if (moveSlunce) {
        //     slunce.x[i] = mouseX;
        //     slunce.y[i] = mouseY;
        // }
    }
}

function draw() {
    drawImage(backStars, 0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < planet.dx.length; i++) {
        drawImage(planet.kartinki[planet.kartinkaNomer[i]], planet.x[i], planet.y[i], planet.razmer, planet.razmer)
    }
    context.font = "30px Arial"
    context.fillText(`Mouse X: ${mouseX}`, 850, 20)
    context.fillText(`Mouse Y: ${mouseY}`, 850, 50)
    context.fillText(`Planets: ${planet.dx.length}`, 850, 80)

}

function mousedown() {
    if (firstMousedown) {
        startIztrelX = mouseX
        startIztrelY = mouseY
        firstMousedown = false
    }
}

function mouseup() {
    endIztrelX = mouseX
    endIztrelY = mouseY
    firstMousedown = true
    planet.x.push(startIztrelX)
    planet.y.push(startIztrelY)
    planet.mass.push(randomInteger(20) + 40)
    planet.dx.push((endIztrelX - startIztrelX) / 50)
    planet.dy.push((endIztrelY - startIztrelY) / 50)
}