
document.querySelector('.getPerm').addEventListener('click',()=>{
    if (typeof DeviceOrientationEvent.requestPermission === 'function'){
        document.querySelector('.message').innerHTML = 'is Function'
        DeviceOrientationEvent.requestPermission()
            .then(permission =>{
                alert(permission)
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
    document.querySelector('#x').innerHTML = `event.alfa ${parseInt(event.alpha)}`
    document.querySelector('#y').innerHTML = `event.beta ${parseInt(event.beta)}`
    document.querySelector('#z').innerHTML = `event.alfa ${parseInt(event.gamma)}`

}





