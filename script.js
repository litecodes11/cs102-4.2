// Function to move the meme image
function moveMeme() {
    const meme = document.getElementById('meme'); // Get the meme image element
    let x = 0; // Initialize x-coordinate
    let y = 0; // Initialize y-coordinate

    // Function to move the image
    function move() {
        x += 1; // Increment x-coordinate
        y += 1; // Increment y-coordinate
        meme.style.left = x + 'px'; //Update left position
        meme.style.top = y + 'px'; // Update top position
        requestAnimationFrame(move); // Call move function
    }

    move(); // start moving the image
}

// Function to enable/disable Start button and start moving the meme
function startMoving() {
    const audio = document.getElementById('audio');
    audio.play();
    const startButton = document.getElementById('startButton'); // Get the start button element
    const stopButton = document.getElementById("stopButton"); // Get the stop button element

    startButton.disabled = true; // Disable Start Button
    stopButton.disabled = false; // Enable Stop button

    moveMeme(); // Start moving the meme image
}

// Function to enable/disable Stop button and stop moving the meme image
function stopMoving() {
    const startButton = document.getElementById('startButton'); // Get the start button element
    const stopButton = document.getElementById('stopButton'); // Get the stop button element

    startButton.disabled = false; // Enable Stop button
    stopButton.disabled = true; // Disable Stop button
}
document.addEventListener("DOMContentLoaded",onStart)
function onStart() {
    console.log("loaded")
// Event listener for Start button click event
document.getElementById('startButton').addEventListener('click', startMoving);
//Element listener for Stop button click event
document.getElementById('stopButton').addEventListener('click', stopMoving);
}
