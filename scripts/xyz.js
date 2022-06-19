

DeviceMotionEvent.requestPermission()
    .then(response => {
        if (response == 'granted') {
            window.addEventListener('devicemotion', (e) => {
                alert(e.acceleration)
            })
        }
    })
    .catch (console.error)



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