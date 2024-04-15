window.addEventListener('DOMContentLoaded',function(){
    const screenSize = this.document.getElementById('screenSize')
    const background = this.document.getElementById("background")

    let w = window.innerWidth
    screenSize.innerHTML += w
    console.log(w, "coucou")
})