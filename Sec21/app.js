function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}

function collectEggs() {
    let totalEggs = 6;
}
collectEggs();
console.log(totalEggs)// 오류 발생(범위 밖에 있음)

let bird = 'Scarlet Macaw';
function birdwatch() {
    let bird = 'Great Blue Heron';
    console.log(bird)//Great Blue Heron
}

console.log(bird);//Scarlet Macaw

let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIII!';
}
console.log(radius);//8
console.log(PI);//오류 (if 문 내에서만 존재함)

//Lexical scope

function bankRobbery() {
    const heroes = ['스파이더맨', '울버린', '블랙 펜서'];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP ME,${hero.toUpperCase()}`);
        }
    }
    cryForHelp();
}//부모 함수의 변수에는 접근 가능하다.

// function add(x, y) {
//     return x + y;
// }
// add(3, 4);

//함수 표현식
const add = function (x, y) {
    return x + y;
}

//고차함수 
function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);//두 번 실행

function makeMysteryFunc() {

}

//메서드 : 함수에 포함되는 개념
const myMath = {
    PI: 3.14,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3
    }
}
//myMath.square(3) === 9

//this 키워드

const cat = {
    name: 'blue steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOWWWs`);
    }
}

//Try - Catch 문

try {
    hello.toUpperCase();
} catch {
    console.log('ERROR!')
}

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("제대로 쳐라")
    }
}