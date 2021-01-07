for (i=0; i<256; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.className = "gridSquares";
    gridSquare.style.height = '20px';
    gridSquare.style.width = '20px';
    gridSquare.style.float = 'right';
    document.getElementById('gridContainer').appendChild(gridSquare);
}

const allSquares = document.querySelectorAll(".gridSquares");

allSquares.forEach(square => {
    square.addEventListener('mouseenter', event => {
        event.target.style.backgroundColor = 'green';
    })
})