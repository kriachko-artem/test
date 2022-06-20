
document.querySelector('.getPerm').addEventListener('click',()=>{
    if (typeof DeviceMotionEvent.requestPermission === 'function'){
        document.querySelector('.message').innerHTML = 'is Function'
        DeviceMotionEvent.requestPermission()
            .then(() =>{
                getOrientation()
            }).catch(permission =>{
            console.log(permission)
        })
    } else {
        getOrientation()
        document.querySelector('.message').innerHTML = 'is NOT Function'
        alert('not function')
    }
})
function getOrientation(){
    const initialOffset = {
        x: null,
        y: null,
    };
    window.addEventListener('devicemotion',(event)=>{
        if (initialOffset.x === null){

            console.log(event)
            initialOffset.x = 0;
            initialOffset.y = 0;
        }
        initialOffset.x += event.rotationRate.gamma;
        initialOffset.y += event.rotationRate.beta;
        gsap.to('#box',{
            transform: `rotateY(${initialOffset.x}deg) rotateX(${initialOffset.y}deg)`,
            duration: 0.2,
        });
        document.querySelector('#x').innerHTML = `event.alfa ${parseInt(event.rotationRate.alpha)}`
        document.querySelector('#y').innerHTML = `event.beta ${parseInt(transformX)}`
        document.querySelector('#z').innerHTML = `event.gamma ${parseInt(transformY)}`
    })

}





