
if (typeof Notification.requestPermission === 'function'){
    document.querySelector('#x').innerHTML = 'is Function'
    Notification.requestPermission()
        .then(permission =>{
            alert(permission)
        }).catch(permission =>{
        console.log(permission)
    })
} else {
    document.querySelector('#x').innerHTML = 'is NOT Function'
    alert('not function')
}



