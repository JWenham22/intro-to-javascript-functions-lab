


// Exercise 1: maxOfTwoNumbers()
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x
    } else {
        return y
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9))


//Exercise 2: isAdult()
const isAdult = (age) => {
    if (age >= 18) {
        return 'Adult'
    } else {
        return 'Minor'
    }
}

console.log('Exercise 2 Result:', isAdult(21))


//Exercise 3: isCharAVowel()
const isCharAVowel = (char) => {
    if (char === 'a, e, i, o, u') {
        return 'true'
    } else {
        return 'false'
    }
}

console.log('Exercise 3 Result:', isCharAVowel('a'))



// Exercise 4: generateEmail()
function generateEmail(nameFirstLast, domain) {
    return `${nameFirstLast}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"))



// Exercise 5: greetUser()
const greetUser = (name, timeOfDay) => {
    return `Good ${timeOfDay}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"))



// Exercise 6: maxOfThree()
const maxOfThree = (x, y, z) => {
    if (x > y && x > z) {
        return x
    } else if (y > x && y > z) {
        return y
    } else  {
        return z
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))



// Exercise 7: calculateTip()
function calculateTip(billAmount, tipPercentage) {
    return (billAmount * tipPercentage) / 100
}

console.log('Exercise 7 Result:', calculateTip(50, 20))



// Exercise 8: convertTemperature()
function convertTemperature(temperature, scale) {
    if (scale === "C") {
        return (temperature * 9/5) + 32
    } else (scale === "F") 
        return (temperature - 32) * 5/9
    }

console.log('Exercise 8 Result:', convertTemperature(32, "C"))



// Exercise 9: basicCalculator

function basicCalculator(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2
    } else if (operation === 'subtract') {
        return num1 - num2 
    } else if (operation === 'divide') {
        return num1 / num2
    } else if (operation === 'multiply') {
        return num1 * num2
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'))



//Exercise 10: calculateGrade

function calculateGrade(grade) {
    if (grade >= 90) {
        return 'A'
    } else if (grade >= 80) {
        return 'B'
    } else if (grade >= 70) {
        return 'C'
    } else if (grade >= 60) {
        return 'D'
    } else (grade > 60) 
        return 'F'
}
 
console.log('Exercise 10 Result:', calculateGrade(85))



//Exercise 11: createUsername()

function createUsername(firstName, lastName) {
    const firstPart = firstName.slice(0, 3) 
    const lastPart = lastName.slice(0, 3)
    const totalLength = firstName.length + lastName.length
    const username = firstPart + lastPart + totalLength
    return username
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"))



