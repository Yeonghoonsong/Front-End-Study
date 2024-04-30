const allImages = document.getElementsByTagName('img');
//HTML 컬렉션을 반환.배열은 아님.
for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');
//css와 똑같은 선택자 선택

for (let link of links) {
    console.log(link.href)
}