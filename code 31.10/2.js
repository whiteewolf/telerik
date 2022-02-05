let vuzmojniKartinki, planeti, brPlaneti;

function createPlanet(x_, y_, dX_, dY_, masa_, kartinkaNomer_) {
    planeti[brPlaneti] = {
        x: x_,
        y: y_,
        dX: dX_,
        dY: dY_,
        masa: masa_,
        kartinkaNomer: kartinkaNomer_
    }
    brPlaneti++;
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

function init() {
    planeti = [];
    brPlaneti = 0;
    vuzmojniKartinki = [];
    for (let i = 0; i < 7; i++) {
        vuzmojniKartinki[i] = tryToLoad("planet-" + (i + 11), "red");
    }
    createPlanet(300, 300, 0, 0, 5000, 0);
    createPlanet(400, 300, 0, -6, 50, 2);
    createPlanet(400, 200, 0, 6, 40, 5);
    createPlanet(400, 400, 5, -3, 100, 4);
}

function drupniPlaneta(nomerDurpashta, nomerDurpana) {
    let razstoqnie = distance(planetX[nomerDurpana], planetY[nomerDurpana], planetX[nomerDurpashta], planetY[nomerDurpashta]);
    let silaNaGravitaciqta = (planetMasa[nomerDurpashta]) / (razstoqnie * razstoqnie);
    let posokaKumSluncetoDX = (planetX[nomerDurpashta] - planetX[nomerDurpana]) / razstoqnie;
    let posokaKumSluncetoDY = (planetY[nomerDurpashta] - planetY[nomerDurpana]) / razstoqnie;
    planetDX[nomerDurpana] += silaNaGravitaciqta * posokaKumSluncetoDX;
    planetDY[nomerDurpana] += silaNaGravitaciqta * posokaKumSluncetoDY;
}

function update() {
    for (let i = 0; i < brPlaneti; i++) {
        planetX[i] = planetX[i] + planetDX[i];
        planetY[i] = planetY[i] + planetDY[i];
    }
    for (let durpashtI = 0; durpashtI < brPlaneti; durpashtI++) {
        for (let durpanI = 0; durpanI < brPlaneti; durpanI++) {
            if (durpashtI != durpanI) {
                drupniPlaneta(durpashtI, durpanI);
            }
        }
    }
    console.log(player);
}

function draw() {
    drawImage(backStars, 0, 0, 800, 600);
    for (let i = 0; i < brPlaneti; i++) {
        drawImage(vuzmojniKartinki[planeti[i].kartinkaNomer], planeti[i].x, planeti[i].y, 30, 30);
    }
}

function keyup(key) {}

function mouseup() {}