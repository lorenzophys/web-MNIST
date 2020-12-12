window.addEventListener('load', () => {
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mousemove', paint);
});

const clearButton = document.querySelector('#clearButton');

clearButton.addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let prediction = document.querySelector('#prediction');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    prediction.textContent = '';
});


const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let brushCoordinates = {x:0 , y:0};
let isPainting = false;

function getPosition(event){
    brushCoordinates.x = event.clientX - canvas.offsetLeft;
    brushCoordinates.y = event.clientY - canvas.offsetTop;
}

function startPainting(event){
    isPainting = true;
    getPosition(event);
}

function stopPainting(){
    isPainting = false;
}

function paint(event){
    if (!isPainting){
        return;
    }

    ctx.beginPath();

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    ctx.moveTo(brushCoordinates.x, brushCoordinates.y);
    getPosition(event);
    ctx.lineTo(brushCoordinates.x , brushCoordinates.y);
    ctx.stroke();
}

