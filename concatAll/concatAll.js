const { movieCategories } = require('./concatAllData');
const { log } = require('./../helpers');

// const movieIds = []; 

// movieCategories.forEach(category =>
//     category.videos.forEach(video =>
//         movieIds.push(video.id) 
//     )
// );

[1,2,3].concat([4,5,6]) // [1,2,3,4,5,6]

Array.prototype.concatAll = function() {
    let result = [];

    this.forEach(items => 
        result = result.concat(items)
    );

    return result;
}

const movieIds = movieCategories
    .map(category => category.videos.map(v => v.id))
    .concatAll();

log(movieIds);