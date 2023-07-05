



function rotate(){
    let d = new Date()
    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()

    document.getElementById('hour').style.transform = `rotate(${(hour*30)+(min*0.5)}deg)`
    document.getElementById('min').style.transform = `rotate(${min*6}deg)`
    document.getElementById('sec').style.transform = `rotate(${sec*6}deg)`
}

setInterval(() => {
    rotate()
}, 1000);
