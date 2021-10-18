class claculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete () {
        this.currentOperand = this.currentOperand.tostring().slice(0, -1)

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.tostring() + number.tostring()
    }
    chooseOperation(operation) {
        if(this.currentOperand === '' ) return
        if(this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = '' 

    }
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat (this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev + current
                break
            case '*':
                computation = prev + current
                break
            case '÷':
                computation = prev + current
                break
            default:
                return
        }
        this.currentOperand= computation
        this.operation = undefined
        this.previousOperand = ''
    }
    
    updateDisplay() {
        this.currentOperandTextElement.innerText=this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const claculator = new claculator (previousOperandTextElement,currentOperandTextElement)

 numberButtons.forEach(button => {
    button.addEventListener ('click', () => {
         claculator.appendnumber(button.innerText)
         claculator.updateDisplay()
     })
 })

 operationButtons.forEach(button => {
    button.addEventListener ('click', () => {
        claculator.chooseOperation(button.innerText)
        claculator.updateDisplay()
    })
})

equalsButton.addEventListener('click',button => {
    claculator.compute()
    claculator.updateDisplay()
})

allClearButton.addEventListener('click',button => {
    claculator.clear()
    claculator.updateDisplay()
})

deleteButton.addEventListener('click',button => {
    claculator.deleteButton()
    claculator.updateDisplay()
})