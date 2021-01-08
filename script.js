//styling:

const gridContainer = document.querySelector('#gridContainer')
gridContainer.style.height = '320px';
gridContainer.style.width = '320px';
gridContainer.style.backgroundColor = 'black';

//functions:

let userInput = 16;
textField.value = 16;
let gridContainerSize = parseInt(gridContainer.style.width.slice(0,3));

const gridClear = () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    };
}

const gridInit = () => {
    gridClear();
    for (i=0; i<userInput**2; i++) {
        let gridSquare;
        gridSquare = document.createElement('div');
        gridSquare.className = "gridSquares";
        gridSquare.style.float = 'right';
        document.getElementById('gridContainer').appendChild(gridSquare);
        gridSquare.style.height = (gridContainerSize / userInput) + 'px';
        gridSquare.style.width = (gridContainerSize / userInput) + 'px';
        };
        const allSquares = document.querySelectorAll(".gridSquares");
        allSquares.forEach(square => {
            square.addEventListener('mouseenter', event => {
                event.target.style.backgroundColor = 'green';
            });
    });
}

gridInit();

const inputValue = () => {
    if (textField.value <= 100) {
        userInput = textField.value;
        gridInit();
    } else {
        textField.value = 100;
        userInput = 100;
        gridInit();
        valueTooHigh.textContent = 'The value must be 100 or less.';
    }
};
// event listeners:

const submit = document.querySelector('#submit');

submit.addEventListener('click', inputValue);

textField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        inputValue();
    }
});