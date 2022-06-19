
if (typeof Notification.requestPermission === 'function'){
    Notification.requestPermission()
        .then(permition =>{
            alert(permition)
        }).catch(permition =>{
        console.log(permition)
    })
} else {alert('not function')}



