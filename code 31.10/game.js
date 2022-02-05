let vuzmojniKartinki, planet, brPlaneti;
let player = {
    x: 0,
    y: 0,
    masa: 500
};
endlessCanvas = true;

function createPlanet(x_, y_, dX_, dY_, masa_, kartinkaNomer_) {
    planet[brPlaneti] = {
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
    planet = [];
    brPlaneti = 0;
    vuzmojniKartinki = [];
    for (let i = 0; i < 7; i++) {
        vuzmojniKartinki[i] = tryToLoad("planet-" + (i + 11), "red")
    }
    createPlanet(300, 300, 0, 0, 5000, 0);
    // createPlanet(400, 300, 0, -6, 50, 2);
    // createPlanet(400, 200, 0, 6, 40, 5);
    // createPlanet(400, 400, 5, -3, 100, 4);
}
/**
 * will do later
 */
function createSolarSystem(centerX, centerY, brPlaneti) {

}

function drupniPlaneta(nomerDurpashta, nomerDurpana) {
    let razstoqnie = distance(planet[nomerDurpana].x, planet[nomerDurpana].y, planet[nomerDurpashta].x, planet[nomerDurpashta].y);
    let silaNaGravitaciqta = (planet[nomerDurpashta].masa) / (razstoqnie * razstoqnie);
    let posokaKumSluncetoDX = (planet[nomerDurpashta].x - planet[nomerDurpana].x) / razstoqnie;
    let posokaKumSluncetoDY = (planet[nomerDurpashta].y - planet[nomerDurpana].y) / razstoqnie;
    planet[nomerDurpana].dX += silaNaGravitaciqta * posokaKumSluncetoDX;
    planet[nomerDurpana].dY += silaNaGravitaciqta * posokaKumSluncetoDY;
}

function PlayerDrupvaPlaneti(nomerDurpana) {
    let razstoqnie = distance(player.x, player.y, planet[nomerDurpashta].x, planet[nomerDurpashta].y);
    let silaNaGravitaciqta = (player.masa) / (razstoqnie * razstoqnie);
    let posokaKumSluncetoDX = (player.x - planet[nomerDurpana].x) / razstoqnie;
    let posokaKumSluncetoDY = (player.y - planet[nomerDurpana].y) / razstoqnie;
    planet[nomerDurpana].dX += silaNaGravitaciqta * posokaKumSluncetoDX;
    planet[nomerDurpana].dY += silaNaGravitaciqta * posokaKumSluncetoDY;
}

function update() {
    if (isKeyPressed[87]) {
        player.y--;
    }
    if (isKeyPressed[83]) {
        player.y++;
    }
    if (isKeyPressed[65]) {
        player.x--;
    }
    if (isKeyPressed[68]) {
        player.x++;
    }
    for (let i = 0; i < brPlaneti; i++) {
        planet[i].x = planet[i].x + planet[i].dX;
        planet[i].y = planet[i].y + planet[i].dY;
    }
    for (let durpashtI = 0; durpashtI < brPlaneti; durpashtI++) {
        for (let durpanI = 0; durpanI < brPlaneti; durpanI++) {
            if (durpashtI != durpanI) {
                drupniPlaneta(durpashtI, durpanI);
            }
        }
    }
}

function draw() {
    drawImage(backStars, 0, 0, 800, 600);
    for (let i = 0; i < brPlaneti; i++) {
        drawImage(vuzmojniKartinki[planet[i].kartinkaNomer], planet[i].x, planet[i].y, 30, 30);
    }
    // if you watched marvel for ONCE you should google the variable name ;)
    let kangTheConqueror = tryToLoad("planet-lin", "blue")
    drawImage(kangTheConqueror, player.x, player.y, 10, 10)
}

function keyup(key) {}

function mouseup() {}