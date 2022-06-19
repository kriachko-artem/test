
if (typeof DeviceMotionEvent.requestPermission === 'function'){
    DeviceMotionEvent.requestPermission()
        .then(permition =>{
            alert(permition)
        }).catch(permition =>{
        console.log(permition)
    })
} else {alert('not function')}



