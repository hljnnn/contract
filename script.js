const box = document.getElementById("box");
const ring = document.getElementById("ring");

box.addEventListener("click", (e) => {
    // If the user clicks the ring, don't close the box
    if (e.target.closest('#ring')) return;

    box.classList.toggle("open");

    // Remove spin if box is closed
    if (!box.classList.contains("open")) {
        ring.classList.remove("spinning");
    }
});

ring.addEventListener("click", (e) => {
    // Stops the click from reaching the 'box' listener
    e.stopPropagation();

    // Only allow spinning if the box is open
    if (box.classList.contains("open")) {
        ring.classList.toggle("spinning");
    }
});