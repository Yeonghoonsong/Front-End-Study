const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    if (input.value === "") {
        h1.innerText = "Enter Your Username"//입력이 비었을때
    } else h1.innerText = `Welcome, ${input.value}`;//뭔가를 입력했을때
})
//input 이벤트는 바로 입력값을 동기화함
