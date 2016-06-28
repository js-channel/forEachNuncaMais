const { videos } = require('./filterData');

// let topRatingVideos = [];

// videos.forEach(video => {
//     if (video.rating === 5) {
//         topRatingVideos.push(video);
//     }
// });

Array.prototype.filter = function (predicate) {
    let result = [];

    this.forEach(item => {
        if (predicate(item)) {
            result.push(item);
        }
    })

    return result;
};

const topRatingVideos = videos.filter(video => video.rating === 5);

console.log(topRatingVideos);