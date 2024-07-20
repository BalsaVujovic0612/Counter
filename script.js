let counter = document.getElementById('counter')
let increaseBtn = document.getElementById('increase')
let decreaseBtn = document.getElementById('decrease')
let resetBtn = document.getElementById('reset')

let count = 0


function updateNumber(){
    counter.innerText = count
}



increaseBtn.addEventListener('click', function(){
    count ++
    updateNumber()
})



decreaseBtn.addEventListener('click', function(){
    count--
    updateNumber()
})



resetBtn.addEventListener('click', function(){
    count = 0
    updateNumber()
})