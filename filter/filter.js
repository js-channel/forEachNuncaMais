const { movies } = require('./filterData');

// let topRatingMovies = [];

// movies.forEach(movie => {
//     if (movie.rating === 5) {
//         topRatingMovies.push(movie);
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
const topRatingMovies = movies.filter(ratingFive);

console.log(JSON.stringify(topRatingMovies, null, 4));