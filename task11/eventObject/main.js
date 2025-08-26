document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
    if (e.altKey) alert("Alt pressed");
    if (e.ctrlKey) alert("Ctrl pressed");
    if (e.shiftKey) alert("Shift pressed");
});
document.getElementById("num").addEventListener("keypress", e => {
    if (e.key < '0' || e.key > '9') e.preventDefault();
});