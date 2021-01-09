//functions:

const gridClear = () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    };
};

const gridContainer = document.querySelector('#gridContainer');
gridContainer.style.height = '320px';
gridContainer.style.width = '320px';
let gridContainerSize = parseInt(gridContainer.style.width.slice(0,3));
let userInput = 16;

const gridInit = () => {
    gridClear();
    let gridSquare;
    for (i=0; i<userInput**2; i++) {

        gridSquare = document.createElement('div');
        gridSquare.className = "gridSquares";
        gridSquare.style.float = 'right';
        gridContainer.appendChild(gridSquare);
        gridSquare.style.height = (gridContainerSize / userInput) + 'px';
        gridSquare.style.width = (gridContainerSize / userInput) + 'px';
    };
    const allSquares = document.querySelectorAll(".gridSquares");
    allSquares.forEach(square => {
        square.addEventListener('mouseenter', event => {
            event.target.style.backgroundColor = 'limegreen';
        });
    });
};

gridInit();

textField.value = 16;

const inputValue = () => {
    if (textField.value <= 100) {
        userInput = textField.value;
        gridInit();
        valueTooHigh.textContent = '';
    } else {
        textField.value = 100;
        userInput = 100;
        gridInit();
        valueTooHigh.textContent = 'The value must be 100 or less.';
    };
};

const buttonToInverted = () => {
    submitButton.style.background = 'url(images/pix-submit.png';
    submitButton.style.backgroundRepeat = 'no-repeat';
    submitButton.style.backgroundPosition = 'center';
    submitButton.style.backgroundColor = 'limegreen';
};

const buttonToDefault = () => {
    submitButton.style.background = 'url(images/pix-submit-2.png';
    submitButton.style.backgroundRepeat = 'no-repeat';
    submitButton.style.backgroundPosition = 'center';
    submitButton.style.backgroundColor = 'black';
};

// event listeners:

const submit = document.querySelector('#submitButton');

submit.addEventListener('click', inputValue);

submit.addEventListener('mouseenter', buttonToInverted);

submit.addEventListener('mouseleave', buttonToDefault);

textField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        inputValue();
    };
});