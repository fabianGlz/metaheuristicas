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
        if (i  <  6){
            
            Coordinates.X = x;
            Coordinates.Y = y;
            Nodes.push(Coordinates)  
            console.log(Nodes[i].X, Nodes[i].Y)
        }
      
    }
    Nodes[nCities] = Nodes[0];

      

}