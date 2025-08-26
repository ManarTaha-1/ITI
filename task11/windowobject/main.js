function openChild() {
    let child = window.open("", "ChildWindow", "width=400,height=300");
    child.document.writeln("<h2>This is the child window</h2>");
    child.document.writeln("<p>It will close in 5 seconds...</p>");
    setTimeout(function() {
        if (!child.closed) {
            child.close();
        }
    }, 5000);
}