const { movieCategories } = require('./concatAllData');
const { log } = require('./../helpers');

// Solving Problem Using forEach()
// ===============================

// const movieIds = []; 

// movieCategories.forEach(category =>
//     category.videos.forEach(video =>
//         movieIds.push(video.id) 
//     )
// );


// Implementing concatAll()
// ========================

// [1,2,3].concat([4,5,6]) // [1,2,3,4,5,6]

Array.prototype.concatAll = function() {
    let result = [];

    this.forEach(items => 
        result = result.concat(items)
    );

    return result;
}


// Refactoring Problem Using concatAll()
// =====================================

const movieIds = movieCategories
    .map(category => category.videos.map(v => v.id))
    .concatAll();

log(movieIds);


// Exercises
// =========

// jsbin.com/rijiju


// Exercises Resolution
// ====================

// ./../challenges/challenge-2.js
