// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here
const firstNames = fullNames.map(function (name) {
    return name.first;
})

// 처음에 return fullNames.first 라 해서 잘못됨, name 이란 인수로 받았으면 그걸로 반환해야지.