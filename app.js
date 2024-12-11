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

