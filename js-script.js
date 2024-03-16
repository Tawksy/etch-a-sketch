// Applying flex to main body 
const mainbody = document.getElementById('mainbody');
mainbody.style.display = 'flex';
mainbody.style.justifyContent = 'center';
mainbody.style.alignContent = 'center';

//Creating and applying Flex to main container
const container = document.getElementById('container');
container.style.width = '600px';
container.style.height = '600px';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'space-between';
container.style.alignContent = 'space-between';
mainbody.appendChild(container);

// create 16*16 grid of divs
for (let i = 0; i < 256; i++){
    const newDiv = document.createElement('div');
    container.appendChild(newDiv);
    newDiv.style.backgroundColor = 'black';
    newDiv.style.margin = '2px';
    newDiv.style.height = '8px';
    newDiv.style.width = '8px';
    newDiv.addEventListener("mouseenter", function() {
        this.style.backgroundColor = 'red'; 
    });
}

//creating the button to reset the grid
const button_reset = document.createElement('button');
button_reset.textContent = 'Create new Grid';
button_reset.style.height = '24px';
mainbody.appendChild(button_reset);

button_reset.addEventListener("click", function() {
    let usergrid;
    do {
        usergrid = prompt("Enter new grid size (per side)");
        if (!usergrid || isNaN(parseInt(usergrid)) || parseInt(usergrid) <= 0) {
            alert("Invalid input. Please enter a valid positive number.");
        }
    } while (!usergrid || isNaN(parseInt(usergrid)) || parseInt(usergrid) <= 0);

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Creating the new Grid with userinput
    const gridSize = parseInt(usergrid) * parseInt(usergrid);
    console.log(gridSize);
    for (let i = 0; i < gridSize; i++) {
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.style.backgroundColor = 'black';
        newDiv.style.flexGrow = '1';
        newDiv.style.margin = '1px';

        newDiv.addEventListener("mouseenter", function() {
            this.style.backgroundColor = 'red'; 
        });
    }
})





