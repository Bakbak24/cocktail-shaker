window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
    let beta = event.beta; 
    let rotation = beta - 90;
    
    let shaker = document.getElementById('shaker');
    shaker.style.transform = "rotate("+rotation+"deg)";
}