window.onload = function () {
    let frame = document.getElementById('frame');
    let ctx = frame.getContext('2d');
    let arrayCities;
    let run;
    let set = document.getElementById('set-cities');

    set.addEventListener('click', () => {
        let nCities = document.getElementById('n-cities').value;
        if (nCities) {
            arrayCities = CreateNodes(nCities);
        }
        else alert("valor invalido");
    });

    run = document.getElementById('btn-run');
    run.addEventListener('click', () => {
        paintCities(arrayCities, ctx);
    });

}

function paintCities(arrayCities, ctx) {
    let r = 5;

    for (let i = 0; i < arrayCities.length - 1; i++) {

        for (let j = 0; j < arrayCities.length; j++) {
            console.log(arrayCities[j].X, arrayCities[j].Y)
            ctx.fillStyle = "blue";
            ctx.arc(arrayCities[j].X, arrayCities[j].Y, r, 2, 2 * Math.PI);
            ctx.fill();
        }

    }

}

function CreateNodes(nCities) {

    let Coordinates = { X: 0, Y: 0 };

    let Nodes = new Array();
    const Max = 301;
    const Min = 1;
    let x, y = 0;

    for (let i = 0; i < nCities; i++) {
        Nodes.push(Coordinates);
    }

    for (let i = 0; i < nCities; i++) {
        x = Math.random() * (Max - Min) + Min
        y = Math.random() * (Max - Min) + Min

        if (i < 5) {
            Nodes[i].X = x;
            Nodes[i].Y = y;
            console.log(Nodes[i].X, Nodes[i].Y);

        }
    }

Nodes.forEach(nodo =>{console.log(nodo.X, nodo.Y)})

    return Nodes;
}