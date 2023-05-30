function mudarCor() {
    var body = document.querySelector('body');
    var red = document.getElementById('range-red').value;
    var green = document.getElementById('range-green').value;
    var blue = document.getElementById('range-blue').value;
    var corFundo = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = corFundo;
}

document.getElementById('range-red').addEventListener('input', mudarCor);
document.getElementById('range-green').addEventListener('input', mudarCor);
document.getElementById('range-blue').addEventListener('input', mudarCor);
