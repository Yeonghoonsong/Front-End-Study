const form = document.querySelector('form');
const list = document.querySelector('#list');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');

form.addEventListener('submit', function (e) {
    e.preventDefault();//기본 동작 방지
    const productName = product.value; //입력 상품 저장
    const qtyNum = qty.value;//입력 개수 저장
    const newLi = document.createElement('li');//li요소생성
    newLi.innerText = `${qtyNum} ${productName}`;//li요소에 텍스트 대입
    list.appendChild(newLi);//list(ul 요소) 의 자식요소에 newLI(li 요소) 넣기
    product.value = "";//상품 값 초기화
    qty.value = "";//상품 수량 초기화
})