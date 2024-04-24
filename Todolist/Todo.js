let input = prompt('What would you like to do?'); // prompt 함수를 이용해 사용자로부터 입력을 받음
let todos = [];// 배열 선언

while (input !== 'quit') {
    if (input === 'new') {
        let newTodo = prompt('Enter new todo')// prompt 함수를 이용해 사용자로부터 입력을 받음;
        todos.push(newTodo);// 배열에 입력받은 값을 추가
        console.log('Todo added: ' + newTodo); // 새로운 할 일을 추가할 때 바로 콘솔에 출력
    }
    if (input === 'list') {
        console.log('**********');
        todos.forEach(function (todo, i) {
            console.log(i + "번째 할일: " + todo);
        });
        // foreach 함수 이용해 각 배열을 순회하여 출력
        console.log('**********');
    }
    if (input === 'delete') {
        let index = parseInt(prompt('Enter index to delete')); // 사용자로부터 입력받은 인덱스를 정수로 변환
        if (index < todos.length && index >= 0) { // 인덱스가 유효한 범위 내에 있는지 확인
            let deletedTodo = todos.splice(index, 1); // 해당 인덱스의 항목을 배열에서 제거
            console.log('Deleted Todo:', deletedTodo);
        } else {
            console.log('Invalid index');
        }
    }
    if (input !== 'new' && input !== 'list' && input !== 'delete') {
        console.log('Invalid command');
    } // 사용자가 new, list, delete, quit 이외의 값을 입력했을 때 경고 메시지 출력

    input = prompt('What would you like to do?'); // 마지막에 입력을 다시 받음
}

console.log('OK, YOU QUIT THE APP'); // 사용자가 quit을 입력하면 종료
