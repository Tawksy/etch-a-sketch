// Applying flex to main body 
const mainbody = document.getElementById('mainbody');
mainbody.style.display = 'flex';
mainbody.style.justifyContent = 'center';

//Creating and applying Flex to main container
const container = document.getElementById('container');
container.style.width = '640px';
container.style.height = '640px';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';
container.style.alignContent = 'center';
mainbody.appendChild(container);

// create 64 divs
for (let i = 0; i < 256; i++){
    const newDiv = document.createElement('div');
    container.appendChild(newDiv);
    newDiv.style.backgroundColor = 'black';
    newDiv.style.width = '32px';
    newDiv.style.height = '32px';
    newDiv.style.margin = '4px';

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
        if (usergrid <= '0') {
            alert("Invalid");
        }
    } while (usergrid <= '0');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Creating the new Grid with userinput
    const gridSize = parseInt(usergrid);
    for (let i = 0; i < gridSize; i++){
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.style.backgroundColor = 'black';
        newDiv.style.width = '32px';
        newDiv.style.height = '32px';
        newDiv.style.margin = '4px';

        newDiv.addEventListener("mouseenter", function() {
            this.style.backgroundColor = 'red'; 
        });
    }

})




