const container = document.getElementById('container');
container.style.width = '640px';
container.style.height = '640px';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'space-between';

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



