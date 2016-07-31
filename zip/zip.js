const { movies, bookmarks } = require('./zipData.js');
const { log } = require('./../helpers.js');

// const xs = [1,2,3];
// const ys = [4,5,6,7];

// #1 - (1, 4) => 1 + 4 === 5
// #2 - (2, 5) => 2 + 5 === 7
// #3 - (3, 6) => 3 + 6 === 9

// [5,7,9]

// [ { movieId, bookmarkId }, ... ]

// let idPairs = [];

// for (var i = 0; i < bookmarks.length; i++) {
//     idPairs.push({ movieId: movies[i].id, bookmarkId: bookmarks[i].id });
// }

// log(idPairs);

Array.zip = function (xs, ys, modify) {
    let result = [];

    for (var i = 0; i < Math.min(xs.length, ys.length); i++) {
        result.push(modify(xs[i], ys[i]));        
    }

    return result;
}

const idPairs = Array.zip(movies, bookmarks, (movie, bookmark) => ({
    movieId: movie.id,
    bookmarkId: bookmark.id
}));

log(idPairs);

// exercises
// jsbin.com/sevazoj