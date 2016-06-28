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

const ratingFive = item => item.rating === 5;
const topRatingVideos = videos.filter(ratingFive);

console.log(topRatingVideos);