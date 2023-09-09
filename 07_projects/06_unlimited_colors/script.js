const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

function colorChange(){
    document.body.style.backgroundColor = randomColor()
}

function startChanging(){
    intervalId = setInterval(colorChange, 1000)
}

function stopChanging(){
    clearInterval(intervalId)
}

start.addEventListener("click", startChanging)
stop.addEventListener("click", stopChanging)