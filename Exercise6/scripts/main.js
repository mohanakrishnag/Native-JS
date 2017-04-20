(function () {
    var loadElements = function () {
        var mainDiv = document.createElement("div");
        var t = document.createTextNode("This is a paragraph.");
        mainDiv.appendChild(t);
        document.getElementById("YouTubeSearch").appendChild(mainDiv);
    };

    window.onload = loadElements;
})();
