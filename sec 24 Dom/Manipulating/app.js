const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

document.querySelector('#banner').id = 'whoops';//id의 이름을 변경

//getAttribute 메서드


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

const h2 = document.querySelector('h2');
h2.classList.add('purple');
h2.classList.add('border');
h2.classList.remove('purple');
h2.classList.remove('border');
h2.classList.toggle('border');//off이면on, on이면 off

// parentElement // 부모의 요소 가져옴
// children //자식요소(모두) 가져옴, 첫번째 자식을 가져오려면 children[0] 사용
// nextElementSibling,previousElementSibling 
// const newImage = document.createElement('img')
// appendChild (자식추가)
//append 뒤에추가
//prepend 앞에추가
//removeChild():부모 요소를 parentElement로 불러온 뒤에 removeChild로 자식제거 
//ex)b.parentElement.removechild('b');
// remove() 는 바로 없애줌