const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");

const btn = document.querySelector("button");
btn.addEventListener("click", resetGrid);


function randColor(){
    R = Math.random()*256;
    G = Math.random()*256;
    B = Math.random()*256;
    return `rgba(${R}, ${G}, ${B})`;
}

function newGrid(n) {
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for (let i=0; i<n*n; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", function (){
            cell.style.backgroundColor = randColor();
    })
    container.appendChild(cell);
    }
}

function clearGrid(){
    container.innerHTML = '';
}

function resetGrid(){
    let size = 0;
    do {
        size = parseInt(prompt("N: "));
    } while ((size <= 0) || (size > 70));
    clearGrid();
    newGrid(size);
}

newGrid(16);
body.appendChild(container);