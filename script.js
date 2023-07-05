
// let tick = document.getElementById('tick').click()


function rotate() {
    let d = new Date()
    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()

    document.getElementById('hour').style.transform = `rotate(${(hour * 30) + (min * 0.5)}deg)`
    document.getElementById('min').style.transform = `rotate(${min * 6}deg)`
    document.getElementById('sec').style.transform = `rotate(${sec * 6}deg)`

    // new Audio('./ticking.mp3').play()
}

setInterval(() => {
    rotate()
    digitalClock()
}, 1000);


function digitalClock(){
    let d = new Date()
    let h = d.getHours()
    h = h>12 ? h%12 : h
    h = h<10 ? '0'+h : h
    let m = d.getMinutes()
    m = m<10 ? '0'+m : m
    let s = d.getSeconds()
    s = s<10 ? '0'+s : s

    document.getElementById('hr').innerHTML = h
    document.getElementById('minute').innerHTML = m
    document.getElementById('second').innerHTML = s
}

