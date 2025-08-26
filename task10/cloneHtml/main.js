// clone html when it is clicked and change background of new copy to rand color then append to the body
var myBox = document.getElementById("myBox");
myBox.addEventListener("click", function() {
    var clone = myBox.cloneNode(false);
    clone.style.backgroundColor = getRandomColor();
    document.body.appendChild(clone);
});

function getRandomColor() {
    var colors = ["red","blue","green","Yellow","orange","purple","pink","brown","black","rose"];
    return colors[Math.floor(Math.random() * colors.length)];
}

