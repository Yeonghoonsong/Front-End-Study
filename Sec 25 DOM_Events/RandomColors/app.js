const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// 1.button 태그 button 객체에 저장
// 2.addEventListener로 버튼 클릭했을때 배경색깔이 바뀌도록
// doucument.body.style.backgroundColor = (색을 나타내는 객체(함수)) 에저장
// 3.그 객체이름을  newColor 라하고, 이 객체에 makeRandColor()라는 함수저장.
// 4. makeRandColor()는 r, g, b객체에 각각 255까지의 난수를 생성하고, "rgb(${r},${g},${b)"를 리턴하게함
// 5.마지막으로 h1도 쿼리셀렉터로 선택해서 innertext 이용해 newColor객체를 대입