function setSVGLength(svgId){
    document.querySelectorAll(svgId).forEach(item=>{
        const length = Math.round(item.getTotalLength());
        let zero = 0;
        function drawSvg(){
            if (zero<=length){
                zero+=10
                item.setAttribute('stroke-dasharray',zero)
            }
            requestAnimationFrame(drawSvg)
        }
        drawSvg()
    })
}

console.log(new Date().toLocaleDateString('en-EN',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
setSVGLength('.svg svg path')