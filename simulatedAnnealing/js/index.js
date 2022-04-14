window.onload = function () {
    let frame = document.getElementById('frame');
    let ctx = frame.getContext('2d');

    let set = document.getElementById('set-cities');
    set.addEventListener('click', () => {
        let nCities = document.getElementById('n-cities').value;
        if (nCities) { CreateNodes(nCities) }


    });


}

function CreateNodes(nCities) {

    let Coordinates = { X: 0, Y: 0 };
    let Nodes = new Array();
    const Max = 301;
    const Min = 1;
    let x, y = 0;
    for (let i = 0; i < 1000; i++) {
        x = Math.random() * (Max - Min) + Min
        y = Math.random() * (Max - Min) + Min

        if (i < 5) {
            Nodes[i].X = x;
            Nodes[i].Y = y;
            console.log(Nodes[i].X, Nodes[i].Y);

        }
    }
      
Nodes.forEach(nodo =>{console.log(nodo.X, nodo.Y)})

}