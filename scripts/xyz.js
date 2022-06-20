
document.querySelector('.getPerm').addEventListener('click',()=>{
    if (typeof DeviceOrientationEvent.requestPermission === 'function'){
        document.querySelector('.message').innerHTML = 'is Function'
        DeviceOrientationEvent.requestPermission()
            .then(() =>{
                getOrientation()
            }).catch(permission =>{
            console.log(permission)
        })
    } else {
        document.querySelector('.message').innerHTML = 'is NOT Function'
        alert('not function')
    }
})
function getOrientation(){
    const initialOffset = {
        x: null,
        y: null,
    };
    window.addEventListener('deviceorientation',(event)=>{
        if (initialOffset.x === null){
            console.log(event)
            initialOffset.x = event.gamma;
            initialOffset.y = event.beta;
        }
        let transformX = initialOffset.x - event.gamma,
            transformY = initialOffset.y - event.beta;
        gsap.to('#box',{
            transform: `rotateY(${transformX}deg) rotateX(${transformY}deg)`,
            duration: 0.2,
        });
        document.querySelector('#x').innerHTML = `event.alfa ${parseInt(event.alpha)}`
        document.querySelector('#y').innerHTML = `event.beta ${parseInt(event.beta)}`
        document.querySelector('#z').innerHTML = `event.gamma ${parseInt(event.gamma)}`
    })

}





