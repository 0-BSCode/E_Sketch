const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");

const btn = document.querySelector("button");
btn.addEventListener("click", resetGrid);


function findSize(N) {
    return Math.round(100/N);
}

function createGrid(n){
    const size = findSize(n);
    for (let i=0; i<n; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.width = "100%";
        row.style.height = `${size}%`;
        row.style.margin = "auto";
        for (let j=0; j<n; j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("data-key", i);
            cell.style.width = `${size}%`;
            cell.style.height = "100%";
            cell.addEventListener("mouseover", function (){
                if (cell.style.backgroundColor === "green"){
                    cell.style.backgroundColor="white";
                } else {
                    cell.style.backgroundColor="green";
                }
            });
            // cell.addEventListener("mouseout", function(){
            //     cell.style.backgroundColor="white";
            // })
            console.log(cell);
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function randColor(){
    R = Math.random()*256;
    G = Math.random()*256;
    B = Math.random()*256;
    return `rgba(${R}, ${G}, ${B})`;
}

function clearGrid(){
    container.innerHTML = '';
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