const { concatMap } = require('./../extensions');
const { boxarts, movies, movieCategories } = require('./reduceData');
const { log } = require('./../helpers');

// 1 - Use forEach to find the largest box art

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

// 2 - How reduce works

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

// 3 - Implement reduce()

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

// 4 - Resolve problem with reduce

// const largestBoxart = boxarts.reducee((largestBoxart, currentBoxart) => {
//     const largestSize = largestBoxart.width * largestBoxart.height;
//     const currentSize = currentBoxart.width * currentBoxart.height;

//     return currentSize > largestSize ? currentBoxart : largestBoxart;
// });

// log(largestBoxart);

// 5 - Challenge 3

// - sum all video ids

// id 1: 7024
// id 2: 5612
// ===
// 7024 + 5612 + ...

// const sumResult = movieCategories
//     .concatMap(category => category.videos.map(video => video.id))
//     .reducee((accu, curr) => accu + curr);

// log(sumResult);

// We've done:

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

// let ids = {};

// movieCategories
//     .concatMap(category => category.videos)
//     .forEach(video => ids[video.id] = video.title);

// log(ids);

// 5 - Reducing with an initial value

// [1,2,3,4,5].reducee((accu, curr) => accu + curr, 10)

// #1 - (10, 1) -> return 10 + 1
// #2 - (11, 2) -> return 11 + 2
// ...

// 6 - Evolve reduce implementation with initial value

Array.prototype.reducee = function (operate, initialValue) {
    let accumulatedValue = initialValue || this[0];

    const startIndexAt = initialValue ? 0 : 1;

    for (var i = startIndexAt; i < this.length; i++) {
        accumulatedValue = operate(accumulatedValue, this[i]);
    }

    return accumulatedValue;
}

// 7 - Refactoring problem using reducee

const ids = movieCategories
    .concatMap(category => category.videos)
    .reducee((result, video) => {
        result[video.id] = video.title;
        return result;
    }, {});

log(ids);

// 8 - Challenge 4 (use this array: movieCategories):
// Exercises found in: jsbin.com/gecolu
// If you see a blank screen, click in "Edit in JSBin" button on top right corner

// - Retrieve the largest rating 

// RESULT: number

// - Retrive the calculated area of all largest boxarts, then sum them

// RESULT: number

// - Retrieve the id, title, and smallest box art url for every video

// RESULT:
// [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
//     }
// ] 

// - Reimplement map and filter using reduce() instead forEach()