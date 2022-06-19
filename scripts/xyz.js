
document.querySelector('.getPerm').addEventListener('click',()=>{
    if (typeof DeviceMotionEvent.requestPermission === 'function'){
        document.querySelector('#x').innerHTML = 'is Function'
        DeviceMotionEvent.requestPermission()
            .then(permission =>{
                alert(permission)
            }).catch(permission =>{
            console.log(permission)
        })
    } else {
        document.querySelector('#x').innerHTML = 'is NOT Function'
        alert('not function')
    }
})




