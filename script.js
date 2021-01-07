//styling:
const gridContainer = document.querySelector('#gridContainer')
gridContainer.style.height = '320px';
gridContainer.style.width = '320px';
gridContainer.style.backgroundColor = 'black';


let userInput = 16;
let gridContainerSize = parseInt(gridContainer.style.width.slice(0,3));



const gridClear = () => {
while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild)
};
}


const gridInit = () => {

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




// event listeners:

const submit = document.querySelector('#submit');


const changeSquareCount = () => {
    userInput = textField.value;
}

submit.addEventListener('click', () => {
    console.log(textField.value); 
});


textField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log(textField.value);
    };
});

clearButton.addEventListener('click', () => {
    gridClear();
    gridInit();
})