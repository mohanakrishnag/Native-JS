(function () {
    var loadElements = function () {
        var mainDiv = document.createElement("div");
        mainDiv.className = 'container';

        var searchDiv = document.createElement("div");
        mainDiv.appendChild(searchDiv);

        document.getElementById("YouTubeSearch").appendChild(mainDiv);
    };

    //window.onload = loadElements;
})();
