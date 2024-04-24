//함수 정의 이후 실행
//function funcName(){
//do something
//}

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
singSong();
//함수를 정의한후 호출하기

//인수로 전달하기
// function greet(person) {
//     console.log(`Hi, ${person}!`);
// };
// greet("Hoon");
function greet(firstName, lastName) {
    console.log(`Hi, ${firstName} ${lastName}.`);
}
greet("Song", "YeongHoon");
//인수안에 값이없으면 undefined로 출력됨

function repeat(msg, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += msg;
    }
    console.log(result);
}
repeat("Hello", 5);

//return 키워드
//함수를 반환함, 함수를 중단시킴
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    } else {
        return x + y;
    }
}