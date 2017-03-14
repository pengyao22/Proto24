var box = document.getElementById('box'), // the box
    boxPos = 10, // the box's position
    boxVelocity = 2, // the box's velocity
    limit = 300; // how far the box can go before it switches direction
 
function draw() {
    box.style.left = boxPos + 'px';
}

function update() {
    boxPos += boxVelocity;
    if (boxPos >= limit || boxPos <= 0) boxVelocity = -boxVelocity;
}

function mainLoop() {
    update();
    draw();
    requestAnimationFrame(mainLoop);
}
 
// Start things off
requestAnimationFrame(mainLoop);