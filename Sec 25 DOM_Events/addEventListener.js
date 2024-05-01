// 클릭 이벤트 연습
// addEventListener를 사용하는 연습을 해보겠습니다. 각각 'hello'와 'goodbye'라는 id를 갖는 두 개의 버튼을 제공해 드렸습니다. 목표는 각 버튼에 클릭 리스너(click listener)를 추가하는 것입니다.

// hello 버튼을 클릭하면 "hello"라는 문구가 console.log 메서드를 통해 콘솔에 출력되어야 하고

// goodbye 버튼을 클릭하면 "goodbye"라는 문구가 console.log 메서드를 통해 콘솔에 출력되어야 합니다.

// 반드시 addEventListener를 사용하세요!

const hello = document.querySelector('#hello');
const goodbye = document.querySelector('#goodbye');

hello.addEventListener('click', function () {
    console.log("hello");
})
goodbye.addEventListener('click', function () {
    console.log("goodbye");
})