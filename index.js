let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

window.prompt(weeklyExpenseQuestions[0])
let answer = window.prompt(weeklyExpenseQuestions[0])
console.log(answer)
let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
let numberAnswer = parseFloat(stringAnswer)
console.log(numberAnswer)
let answer1 = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
console.log(answer)
let weeklyExpenses1 = 0
let monthlyExpenses1 = 0
let annualExpenses1 = 0

let answer2 = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
weeklyExpenses = weeklyExpenses + answer
let weeklyExpenses2 = 0
let monthlyExpenses2 = 0
let annualExpenses2 = 0

let answer3 = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
weeklyExpenses = weeklyExpenses + answer
let weeklyExpenses3 = 0
let monthlyExpenses3 = 0
let annualExpenses3 = 0

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}

window.prompt(monthlyExpenseQuestions[0])
let answer4 = window.prompt(monthlyExpenseQuestions[0])
console.log(answer)
let stringAnswer4 = window.prompt(monthlyExpenseQuestions[0])
let numberAnswer4 = parseFloat(stringAnswer)
console.log(numberAnswer)
let answer5 = parseFloat(window.prompt(monthlyExpenseQuestions[0]))
console.log(answer)
let weeklyExpenses4 = 0
let monthlyExpenses4 = 0
let annualExpenses4 = 0

let answer6= parseFloat(window.prompt(monthlyExpenseQuestions[0]))
monthlyExpenses = monthlyExpenses + answer
let weeklyExpenses5 = 0
let monthlyExpenses5 = 0
let annualExpenses5 = 0

let answer7 = parseFloat(window.prompt(monthlyExpenseQuestions[0]))
monthlyExpenses = monthlyExpenses + answer
let weeklyExpenses6 = 0
let monthlyExpenses6 = 0
let annualExpenses6 = 0

for(let i = 0; i < monthlyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer
}

window.prompt(annaulExpenseQuestions[0])
let answer8 = window.prompt(annaulExpenseQuestions[0])
console.log(answer)
let stringAnswer8 = window.prompt(annaulExpenseQuestions[0])
let numberAnswer8 = parseFloat(stringAnswer)
console.log(numberAnswer)
let answer9 = parseFloat(window.prompt(annaulExpenseQuestions[0]))
console.log(answer)
let weeklyExpenses7 = 0
let monthlyExpenses7 = 0
let annualExpenses7 = 0

let answer10= parseFloat(window.prompt(annaulExpenseQuestions[0]))
annaulExpenses = annaulExpenses + answer
let weeklyExpenses8 = 0
let monthlyExpenses8 = 0
let annualExpenses8 = 0

let answer11 = parseFloat(window.prompt(annaulExpenseQuestions[0]))
annaulExpenses = annaulExpenses + answer
let weeklyExpenses9 = 0
let monthlyExpenses9 = 0
let annualExpenses9 = 0

for(let i = 0; i < annaulExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    annualExpenses = annaulExpenses + answer
}





