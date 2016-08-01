const { concatMap } = require('./../extensions');
const { boxarts, movies, movieCategories } = require('./reduceData');
const { log } = require('./../helpers');

// Solving Problem Using forEach()
// ===============================

// let largestSize = -Infinity;
// let largestBoxart;

// boxarts.forEach(boxart => {
//     const currentSize = boxart.width * boxart.height;

//     if (currentSize > largestSize) {
//         largestSize = currentSize;
//         largestBoxart = boxart;
//     }
// });

// log(largestBoxart);


// How reduce() Works
// ==================

// const sum = [1,2,3,4,5].reduce((accumulatedValue, currentValue) => {
//     log(`${accumulatedValue}, ${currentValue}`);
//     return accumulatedValue + currentValue;
// });

// log(sum);

// #1 - (1, 2) -> return 1 + 2
// #2 - (3, 3) -> return 3 + 3
// #3 - (6, 4) -> return 6 + 4
// #4 - (10, 5) -> return 10 + 5
// 15


// Implementing reduce() Partially
// ===============================

// Array.prototype.reducee = function (operate) {
//     let accumulatedValue = this[0];

//     for (var i = 1; i < this.length; i++) {
//         accumulatedValue = operate(accumulatedValue, this[i]);
//     }

//     return accumulatedValue;
// }

// const sum = [1,2,3,4,5].reducee((accumulatedValue, currentValue) => {
//     log(`${accumulatedValue}, ${currentValue}`);
//     return accumulatedValue + currentValue;
// });

// log(sum);

//
// Refactoring Problem Using reduce()
// ==================================

// const largestBoxart = boxarts.reducee((largestBoxart, currentBoxart) => {
//     const largestSize = largestBoxart.width * largestBoxart.height;
//     const currentSize = currentBoxart.width * currentBoxart.height;

//     return currentSize > largestSize ? currentBoxart : largestBoxart;
// });

// log(largestBoxart);


// Exercises - Challenge 3
// ======================

// jsbin.com/toqibu


// Exercises Resolution
// ====================

// ./../challenges/challenge-3.js


// reduce() - Part 2
// =================


// Presenting a New Problem
// ========================

// What we've done so far:

// [
//     {
//         "70111470": "Die Hard"
//     },
//     {
//         "654356453": "Bad Boys"
//     }
//     ...
// ]

// log(movieCategories
//     .concatMap(category => category.videos)
//     .map(video => ({ [video.id]: video.title }))
// );

// But now we need:

// {
//     "70111470": "Die Hard",
//     "654356453": "Bad Boys",
//     "65432445": "The Chamber",
//     "675465": "Fracture"
// }


// Solving New Problem Using forEach()
// ===================================

// let ids = {};

// movieCategories
//     .concatMap(category => category.videos)
//     .forEach(video => ids[video.id] = video.title);

// log(ids);


// How Initial Value Works on reduce()
// ===================================

// [1,2,3,4,5].reducee((accu, curr) => accu + curr, 10)

// #1 - (10, 1) -> return 10 + 1
// #2 - (11, 2) -> return 11 + 2
// ...


// Refactoring reduce() Implementation For Use an Initial Value
// ============================================================

Array.prototype.reducee = function (operate, initialValue) {
    let accumulatedValue = initialValue || this[0];

    const startIndexAt = initialValue ? 0 : 1;

    for (var i = startIndexAt; i < this.length; i++) {
        accumulatedValue = operate(accumulatedValue, this[i]);
    }

    return accumulatedValue;
}


// Refactoring Problem Using reduce() with Inital Value
// ====================================================

const ids = movieCategories
    .concatMap(category => category.videos)
    .reducee((result, video) => {
        result[video.id] = video.title;
        return result;
    }, {});

log(ids);


// Exercises - Challenge 4 
// =======================

// jsbin.com/gecolu


// Exercises Resolution
// ====================

// ./../challenges/challenge-4.js
