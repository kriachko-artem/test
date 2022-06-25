
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
        x: 0,
        y: 0,
    };
    window.addEventListener('devicemotion',({rotationRate: {alpha, beta, gamma}})=>{
        // if (initialOffset.x === null){
        //     console.log(event)
        //     initialOffset.x = event.gamma;
        //     initialOffset.y = event.beta;
        // }
        // if ((event.beta > 0 && event.beta < 80)){
            // let transformX = initialOffset.x - event.gamma,
            //     transformY = initialOffset.y - event.beta;
        initialOffset.x += Math.round(alpha/10);
        initialOffset.y += Math.round(beta/10)
            gsap.to('#box',{
                transform: `rotateY(${initialOffset.y}deg) rotateX(${initialOffset.x}deg)`,
                duration: 1,
            });
        // }
        document.querySelector('#x').innerHTML = `event.alfa ${parseInt(alpha/10)}`
        document.querySelector('#y').innerHTML = `event.beta ${parseInt(beta/10)}`
        document.querySelector('#z').innerHTML = `event.gamma ${parseInt(gamma/10)}`
    })

}





