const mainContainer = document.querySelector(".main-container");

// Create all divs for the grid
let rows = 16;
let addBorder = true;

// Function declaration
// Hover effect on blocks
function blockColorSetting() {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = 'blue';
        })
    })
}
function createSketchPad(rows) {

    // First, delete previous sketchpad
    const previousBlocks = document.querySelectorAll(".block");
    previousBlocks.forEach((block) => {
        block.remove();
    })

    for (let i = 0; i < (Math.pow(rows, 2)); i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        // Set block size
        block.style.flex = `1 0 ${100 / rows}%`;
        block.style.paddingTop = `${100 / rows}%`;
        // Set border
        if(addBorder){
            block.style.border = "1px solid";
        }
        mainContainer.appendChild(block);
    }

    blockColorSetting();

    return;
}

// Start with base sketchpad
createSketchPad(rows);

// Ask user for new sketch dimension
const createButton = document.querySelector("#create-sketchpad-button");
createButton.addEventListener(("click"), () => {
    rows = prompt("Please write the number of columns per row you want");
    // Check that rows are under 100
    while(rows > 100 || rows <= 0 || !Number.isInteger(+rows)){
        alert("Keep canvas size under 100 and above 0");
        rows = prompt("Please write the number of columns per row you want");
    }
    if(rows > 30){
        addBorder = false;
    }else{
        addBorder = true;
    }
    createSketchPad(rows, addBorder);
})
