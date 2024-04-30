const div = document.querySelector('#container');
for (let i = 0; i < 100; i++) {
    const newButton = document.createElement('button');
    newButton.innerText = 'wow!';
    div.appendChild(newButton);
}