let paveta = [],
    brPaveta = 1000,
    topki = [],
    colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink'];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// for (let i = 0; i < 100; i++) {
//     paveta.push({
//         x: i,
//         y: i * 1.1 + 100
//     })
// }
// for (let i = 0; i < 200; i++) {
//     paveta.push({
//         y: i + 100 * 1.3,
//         x: i + 200,
//     })
// }
for (let i = 0; i < 10; i++) {
    topki.push({
        nomerPave: randomIntFromInterval(0, 99123),
        color: colors[randomInteger(colors.length)]
    })

    function zapulniPave() {
        for (let i = 0; i < 100; i++) {
            paveta.push({
                x: i * 1.1 + 100,
                y: i
            })
        }
    }

    function zapulniPave2() {
        for (let i = 0; i < 100; i++) {
            paveta.push({
                x: i * 1.1 - 100,
                y: i * 1.2 + 100
            })
        }
    }

    function zapulniPave3() {
        for (let i = 0; i < 100; i++) {
            paveta.push({
                x: i,
                y: i * 1 + 200
            })
        }
    }

    function init() {
        zapulniPave()
        zapulniPave2()
        zapulniPave3()
    }

    function update() {
        topki.map(x => {
            x.nomerPave++;
            if (x.nomerPave >= paveta.length) {
                return console.log('you lose')
            }
        })
    }

    function draw() {
        context.fillStyle = 'grey';
        context.fillRect(0, 0, 800, 600)
        context.lіnеwidth = 5;
        context.beginPath();
        paveta.map(i => {
            context.lineTo(i.x, i.y);
        })
        context.stroke();
        topki.map(x => {
            context.fillStyle = x.color;
            context.beginPath();
            context.arc(paveta[x.nomerPave].x, paveta[x.nomerPave].y, 20, 0, 2 * Math.PI)
            context.fill();
        })
    }

    function mouseup() {}