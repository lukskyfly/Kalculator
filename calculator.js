const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const remove = document.querySelector('.delete')
const equal = document.querySelector('.equal')
const currentScore = document.querySelector('.currentAction')
const previousScore = document.querySelector('.previousAction')

let currentAction = ''
let previousAction = ''
let opration = undefined

const updateScore = () => {
    currentScore.innerText = currentAction
    previousScore.innerText = previousAction
}

const addNumber = (number) =>{
    if(currentAction.includes('.') ){
        return
    }
currentAction = currentAction.toString() + number.toString()
}

numbers.forEach((number)=>{
number.addEventListener('click', ()=>{
    addNumber(number.innerText)
    updateScore()
})
})
const removeNumber = () =>{
    currentAction = currentAction.toString().slice(0,-1)
}
remove.addEventListener('click', ()=>{
    removeNumber()
    updateScore()
})