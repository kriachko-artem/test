
document.querySelector('.getPerm').addEventListener('click',()=>{
    if (typeof DeviceOrientationEvent.requestPermission === 'function'){
        document.querySelector('.message').innerHTML = 'is Function'
        DeviceOrientationEvent.requestPermission()
            .then(() =>{
                window.addEventListener('deviceorientation',getOrientation)
            }).catch(permission =>{
            console.log(permission)
        })
    } else {
        document.querySelector('.message').innerHTML = 'is NOT Function'
        alert('not function')
    }
})
function getOrientation(event){
    console.log(event)
    let transformX = event.gamma,
        transformY = event.beta;
    gsap.to('#box',{
        transform: `rotateY(${transformX}deg) rotateX(${transformY}deg)`,
        duration: 0.2,
    });
    document.querySelector('#x').innerHTML = `event.alfa ${parseInt(event.alpha)}`
    document.querySelector('#y').innerHTML = `event.beta ${parseInt(event.beta)}`
    document.querySelector('#z').innerHTML = `event.gamma ${parseInt(event.gamma)}`

}





