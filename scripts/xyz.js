
document.querySelector('.getPerm').addEventListener('click',()=>{
    if (typeof DeviceMotionEvent.requestPermission === 'function'){
        document.querySelector('.message').innerHTML = 'is Function'
        DeviceMotionEvent.requestPermission()
            .then(permission =>{
                alert(permission)
                window.addEventListener('devicemotion',getOrientation)
            }).catch(permission =>{
            console.log(permission)
        })
    } else {
        document.querySelector('.message').innerHTML = 'is NOT Function'
        alert('not function')
    }
})
function getOrientation(event){
    document.querySelector('#x').innerHTML = `event.alfa ${event.alpha}`
    document.querySelector('#y').innerHTML = `event.beta ${event.beta}`
    document.querySelector('#z').innerHTML = `event.alfa ${event.gamma}`

}





