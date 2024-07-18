// Get a reference to the button element by its ID 
const clickButton = 
document.getElementById('clickButton'); 
// Add a click event listener to the button 
clickButton.addEventListener('click', function() { 
// Change the text of the button when clicked 
clickButton.innerText = 'Clicked!'; 
// Change the background color of the <h1> element when the button is clicked 
const heading = document.querySelector('h1'); 
heading.style.backgroundColor = 'lightblue'; 
}); 

const hoverElement = 
document.getElementById('hoverElement'); 
 
    // Event listener for when the mouse enters the element (mouseover or mouseenter) 
    hoverElement.addEventListener('mouseover', function() { 
        hoverElement.style.backgroundColor = 'lightgreen'; 
    }); 
 
    // Event listener for when the mouse leaves the element (mouseout or mouseleave) 
    hoverElement.addEventListener('mouseout', function() { 
        hoverElement.style.backgroundColor = 'lightblue'; 
    });