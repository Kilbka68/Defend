
let score = 0
let replenishmen = 0
let expenses = 0
function trueanswer(){
    score = score + 100
    replenishmen = replenishmen + 100
    document.getElementById("score1").textContent = score
    document.getElementById("score2").textContent = score
    document.getElementById("score3").textContent = score
    document.getElementById("score4").textContent = score
    document.getElementById("score5").textContent = score
    document.getElementById("score6").textContent = score

    document.getElementById("replenishment").textContent = replenishmen
}

function falseanswer() {
    score = score - 100
    expenses = expenses + 100

    document.getElementById("score1").textContent = score
    document.getElementById("score2").textContent = score
    document.getElementById("score3").textContent = score
    document.getElementById("score4").textContent = score
    document.getElementById("score5").textContent = score
    document.getElementById("score6").textContent = score
    document.getElementById("expenses").textContent = expenses
}













function question1(){
    let questionfirst = document.getElementById('queshon1')
    let questionsecond = document.getElementById('queshon2')
    questionfirst.style.display = 'none'
    questionsecond.style.display = 'block'
}

function question2(){
    let questionfirst = document.getElementById('queshon2')
    let questionsecond = document.getElementById('queshon3')
    questionfirst.style.display = 'none'
    questionsecond.style.display = 'block'
}


function question3(){
    let questionfirst = document.getElementById('queshon3')
    let questionsecond = document.getElementById('queshon4')
    questionfirst.style.display = 'none'
    questionsecond.style.display = 'block'
}


function question4(){
    let questionfirst = document.getElementById('queshon4')
    let questionsecond = document.getElementById('queshon5')
    questionfirst.style.display = 'none'
    questionsecond.style.display = 'block'
}

function question5(){
    let questionsecond = document.getElementById('scores')
    questionsecond.style.display = 'block'
}

function returnstart(){
    let questionfirst = document.getElementById('scores')
    let questionsecond = document.getElementById('queshon1')
    let questionthird = document.getElementById('queshon5')
    questionfirst.style.display = 'none'
    questionthird.style.display = 'none'
    questionsecond.style.display = 'block'

    document.getElementById("score1").textContent = 0
    document.getElementById("score2").textContent = 0
    document.getElementById("score3").textContent = 0
    document.getElementById("score4").textContent = 0
    document.getElementById("score5").textContent = 0
    document.getElementById("score6").textContent = 0
    return score = 0, replenishmen = 0, expenses = 0
}








