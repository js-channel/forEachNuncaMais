const { movieCategories } = require('./../reduce/reduceData.js');
const { log } = require('./../helpers.js');

// This is the resolution for concatAll exercises
// If you want to try it, check this link: jsbin.com/rijiju
// Resolution in this video: https://www.youtube.com/watch?v=19fPoHRI2ec&index=8&list=PLhxF6V44XvXQzeZqn3Xd95RKm_Gr7JT7y

const idsSum = movieCategories.concatMap(c => c.videos)
    .map(v => v.id)
    .reduce((accu, curr) => accu + curr);

log(idsSum);
