const { names, videos } = require('./mapData');
const { log } = require('./../helpers.js');

// Examples
// ========

// for(let i = 0; i < names.length; i++) {
//     log(names[i]);
// }

// names.forEach(name => log(name));

// or, refactoring to simpler way

// names.forEach(log);


// Solving Problem With forEach()
// ==============================

// const videosWithIdAndTitle = [];
// 
// videos.forEach(video => videosWithIdAndTitle.push({ id: video.id, title: video.title }));
// 
// log(videosWithIdAndTitle);


// Implementing map()
// ==================

Array.prototype.map = function (modifierFunction) {
    let result = [];

    this.forEach(item => result.push(modifierFunction(item)));

    return result;
};


// Refactoring Problem With map()
// ==============================
 
const toPairsOfIdAndTitle = video => ({ id: video.id, title: video.title });

const videosWithIdAndTitle = videos.map(toPairsOfIdAndTitle);

log(videosWithIdAndTitle);
