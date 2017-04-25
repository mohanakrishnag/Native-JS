var searchService = (function (searchText) {
    var maxResults = 15;
    var searchApi = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDc3C5q7k3JHC-GW5ViwoqeeFFyrzTnvYY' + '&part=snippet&maxResults=' + maxResults + '&q=' + searchText;
    var statisticsApi = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDc3C5q7k3JHC-GW5ViwoqeeFFyrzTnvYY';
    var results = [];

    return {
        getVideos: function () {
            return results;
        }
    }

}());
