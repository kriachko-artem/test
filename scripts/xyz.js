window.addEventListener('deviceorientation',(event)=>showOrient(event))
console.log(window.DeviceOrientationEvent)
function showOrient(event){
    console.log(event)
    const orientSpan = {
        x: document.querySelector('.orientation .x'),
        y: document.querySelector('.orientation .y'),
        z: document.querySelector('.orientation .z'),
    };
    orientSpan.x.innerHTML = `event.alpha ${event.alpha}`

}