

const boxes = document.querySelectorAll('.box');

const colorsArray = ['pink', 'orange', 'red', 'yellow', 'skyBlue'];

boxes.forEach((box, index) => {
    if (index < colorsArray.length) {
        box.style.backgroundColor = colorsArray[index];
    }
});
