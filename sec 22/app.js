// forEach 메서드
const numbers = [1, 2, 3, 4, 5];
// function print(element) {
//     console.log(element)
// }

// numbers.forEach(print)

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})

//map 메서드

numbers.map(function (num) {
    return num * 2;
})
//  새 배열을 만듦

// 화살표 함수

const square = (x) => {
    return x * x;
}

// const add = (x, y) => {
//     return x + y;
// }

// 명시적 반환

const add = (a, b) => a + b
// 중괄호 대신 소괄호 사용, 대신 하나만 반환가능

// setTimeout 메서드
setTimeout(() => {
    console.log('hello')
}, 3000)

// setInterval 메서드

setInterval(() => {
    console.log(Math.random())
}, 2000);
//clearInterval 으로 종료 가능

// filter 메서드

numbers.filter(n => {
    return n === 4;
})
// 조건에 맞는 수만 새로운 배열에 추가하는 메서드(참,거짓 전달, 참인 경우에만 반환)


// some every 메서드(불리언)
const exams = [80, 92, 78, 96];

exams.every(score => score >= 75)//true (모든게 조건을 만족?)
exams.some(score => score >= 75)//하나라도 조건을 만족??

// reduce 메서드

[3, 5, 7, 9, 11].reduce((accumlulator, currentValue) => {
    return accumlulator + currentValue;
})
// 첫번째: 8, 두번째: 15 세번째: 24 네번째 :35 반환
// for of문과 비슷함

// 화살표 함수와 this 키워드

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: () => {
        return `${this.firstName} ${this.lastName}}`;
    }
}
// 이경우에는 this가 윈도우 객체를 가리킴
// 화살표 함수에서 this는 다르게 동작함.