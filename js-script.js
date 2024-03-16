// Applying flex to main body 
const mainbody = document.getElementById('mainbody');
mainbody.style.display = 'flex';
mainbody.style.justifyContent = 'center';
mainbody.style.alignContent = 'center';
mainbody.style.height = '100vh'; // ensures the whole viewport is used

//Creating and applying Flex to main container
const container = document.getElementById('container');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.width = '600px';
container.style.height = '600px';

// mainbody.appendChild(container);

// create 16*16 grid of divs
for (let i = 0; i < 256; i++){
    const newDiv = document.createElement('div');
    container.appendChild(newDiv);
    newDiv.style.backgroundColor = 'black';
    newDiv.style.margin = '0px';
    newDiv.style.flex = '0 0 auto';
    newDiv.style.boxSizing = 'border-box'; // Include border in element's size
    newDiv.style.borderStyle = 'solid';
    newDiv.style.borderColor = 'grey';
    newDiv.style.borderWidth = '0.1px';
    newDiv.style.width = 'calc(100% / 16)';
    newDiv.style.height = 'calc(100% / 16)';
    newDiv.addEventListener("mouseenter", function() {
        this.style.backgroundColor = 'red'; 
    });
}

//creating the button to reset the grid
const button_reset = document.createElement('button');
button_reset.textContent = 'Create new Grid';
button_reset.style.height = '24px';
button_reset.style.marginTop = '10px';
mainbody.appendChild(button_reset);

button_reset.addEventListener("click", function() {
    let usergrid;
    do {
        usergrid = prompt("Enter new grid size (per side)");
        if (!usergrid || isNaN(parseInt(usergrid)) || parseInt(usergrid) <= 0 || parseInt(usergrid) > 100) {
            alert("Invalid input. Please enter a valid positive number.");
        }
    } while (!usergrid || isNaN(parseInt(usergrid)) || parseInt(usergrid) <= 0 || parseInt(usergrid) > 100);

    // Convert user input to integer
    const gridSize = parseInt(usergrid);

    // Clear existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Creating the new Grid with user input
    for (let i = 0; i < gridSize * gridSize; i++){
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.style.backgroundColor = 'black';
        newDiv.style.margin = '0px';
        newDiv.style.flex = '0 0 auto';
        // Border
        newDiv.style.boxSizing = 'border-box'; // Include border in element's size
        newDiv.style.borderStyle = 'solid';
        newDiv.style.borderColor = 'grey';
        newDiv.style.borderWidth = '0.1px';
        // 
        newDiv.style.width = `calc(100% / ${gridSize})`;
        newDiv.style.height = `calc(100% / ${gridSize})`;
        newDiv.addEventListener("mouseenter", function() {
            this.style.backgroundColor = 'red'; 
        });
    }
})





