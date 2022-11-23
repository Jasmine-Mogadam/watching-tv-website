$( document ).ready(function() {
    var viewportH = document.getElementById("viewport").style.height;
    var controlPanelH = document.getElementById("control-panel").style.height;
    var remainingHeight = window.innerHeight - viewportH;
    if (controlPanelH < remainingHeight)
      controlPanelH = remainingHeight;
    console.log("v:" + viewportH + "\n" + controlPanelH + "\n" + window.innerHeight + "\n" + remainingHeight)
});
