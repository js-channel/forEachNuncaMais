const { movies } = require('./filterData');
const { log } = require('./../helpers.js');

// Solving Problem Using forEach()
// ==============================

// let topRatingMovies = [];
// 
// movies.forEach(movie => {
//     if (movie.rating === 5) {
//         topRatingMovies.push(movie);
//     }
// });
// 
// log(topRatingMovies);


// Implementing filter()
// =====================

Array.prototype.filter = function (predicate) {
    let result = [];

    this.forEach(item => {
        if (predicate(item)) {
            result.push(item);
        }
    })

    return result;
};


// Refactoring Problem Using filter()
// ==================================

const ratingFive = item => item.rating === 5
const topRatingMovies = movies.filter(ratingFive);

log(topRatingMovies);


// Exercises
// =========

// jsbin.com/vivosej


// Exercises Resolution
// ====================

// ./../challenges/challenge-1.js
