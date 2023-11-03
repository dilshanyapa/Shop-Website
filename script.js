// JavaScript to make the custom cursor follow the mouse
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


