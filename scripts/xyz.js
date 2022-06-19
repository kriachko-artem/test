

if (typeof DeviceMotionEvent.requestPermission === "function"){
    DeviceMotionEvent.requestPermission()
        .then(permitionState =>{
            if (permitionState === 'granted'){
                alert('good')
            } else {
                alert('bad')
            }
        })
}


