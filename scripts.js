const mainContainer = document.querySelector(".main-container");

// Create all divs for the grid
let row = 16;
let columns = 16;
for (let i = 0; i < (row * columns); i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    mainContainer.appendChild(block);
}

// Hover effect on blocks
const blocks = document.querySelectorAll(".block");
blocks.forEach((block) => {
    block.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = 'blue';
    })
})