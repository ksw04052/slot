const lever = document.getElementById("lever")
const slotImg = document.getElementById("slotImg")
const firstImg = document.getElementById("firstImg")
const secondImg = document.getElementById("secondImg")
const thirdImg = document.getElementById("thirdImg")
const tryn = document.getElementById("tryn")
const reset = document.getElementById("reset")

let timePassed = 0
let attempts = 0
let num = 0

lever.addEventListener('mousedown',pressed)
lever.addEventListener('mouseup',released)
reset.addEventListener('click',resetnum)

function resetnum(){
    num = 0
    tryn.innerHTML = num
}

function randBetween(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function imgInfo(num){
    let img_src
    if(num == 1){
        img_src = "am.png"
    }
    else if(num == 2){
        img_src = "cg.png"
    }
    else if(num == 3){
        img_src = "rcg.png"
    }
    else if(num == 4){
        img_src = "rs.png"
    }
    else if(num == 5){
        img_src = "rc.png"
    }
    else if(num == 6){
        img_src = "bc.png"
    }
    else{
        img_src = "ec.png"
    }
    return img_src
}

function pressed(){
    slotImg.src = "slotc2.png"
}

function released(){
    slotImg.src = "slotc.png"
    lever.removeEventListener('mousedown',pressed)
    lever.removeEventListener('mouseup',released)

    if(attempts=0){
    let interId = setInterval(function(){
        if(timePassed<=500){
            let firstRand = randBetween(1,7)
            let secondRand = randBetween(1,7)
            let thirdRand = randBetween(1,7)
            firstImg.src = imgInfo(firstRand)
            secondImg.src = imgInfo(secondRand)
            thirdImg.src = imgInfo(thirdRand)
            timePassed = timePassed + 100
        }
        else{
            stop()
        }
    },100)
    }
    else{
        interId = setInterval(function(){
            if(timePassed<=500){
                let firstRand = randBetween(1,7)
                let secondRand = randBetween(1,7)
                let thirdRand = randBetween(1,7)
                firstImg.src = imgInfo(firstRand)
                secondImg.src = imgInfo(secondRand)
                thirdImg.src = imgInfo(thirdRand)
                timePassed = timePassed + 100
            }
            else{
                stop()
            }
        },100)
    }
    
}

function stop(){
    clearInterval(interId)
    timePassed = 0
    num++
    tryn.innerHTML = num
    lever.addEventListener('mousedown',pressed)
    lever.addEventListener('mouseup',released)
}


