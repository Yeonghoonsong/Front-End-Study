const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
// const rainbow = document.querySelectorAll('span');

// rainbow.forEach((span, index) => {
//     span.style.color = colors[index];
// });

const rainbow = document.querySelectorAll('span');

for (let i = 0; i < rainbow.length; i++) {
    rainbow[i].style.color = colors[i];
}