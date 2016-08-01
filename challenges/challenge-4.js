const { movieCategories } = require('./../reduce/reduceData.js');
const { concatAll, concatMap } = require('./../extensions.js');
const { log } = require('./../helpers.js');

// This is the resolution for concatAll exercises
// If you want to try it, check this link: jsbin.com/rijiju
// Resolution in this video: https://www.youtube.com/watch?v=WUp9iMOKmek&index=9&list=PLhxF6V44XvXQzeZqn3Xd95RKm_Gr7JT7y


// Exercise 1
// ==========

movieCategories
    .concatMap(category => category.videos)
    .map(video => video.rating)
    .reduce((largest, current) => current > largest ? current : largest);


// Exercise 2
// ==========

movieCategories
    .concatMap(category => category.videos)
    .map(video => {
        const smallestBoxart = video.boxarts
            .reduce((smallestBoxart, current) => {
                const smallestSize = smallestBoxart.width * smallestBoxart.height;
                const currentSize = current.width * current.height;
                
                return currentSize < smallestSize ? current : smallestBoxart;
            });

        return {
            id: video.id,
            title: video.title,
            boxart: smallestBoxart.url
        };
    });


// Exercise 3
// ==========

movieCategories
    .concatMap(category => category.videos)
    .map(video => {
        return video.boxarts
            .reduce((largestBoxart , currentBoxart) => {
                const largestSize = largestBoxart.width * largestBoxart.height;
                const currentSize = currentBoxart.width * currentBoxart.height;

                return currentSize > largestSize ? currentBoxart : largestBoxart;
            });
    })
    .map(boxart => boxart.width * boxart.height)
    .reduce((accumulated, current) => accumulated + current);


// Exercise 4
// ==========

Array.prototype.map = function(modify) {
    return this.reduce((accu, curr) => {
        accu.push(modify(curr));
        return accu;
    }, []);
}

Array.prototype.filter = function(predicate) {
    return this.reduce((accu, curr) => {
        if (predicate(curr)) {
            accu.push(curr);
        }

        return accu;
    } ,[]);
}
