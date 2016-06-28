const { videos } = require('./mapData');

Array.prototype.map = function (modifierFunction) {
    let result = [];

    this.forEach(item => result.push(modifierFunction(item)));

    return result;
};

const toPairsOfIdAndTitle = video => ({ id: video.id, title: video.title });

const videosWithIdAndTitle = videos.map(toPairsOfIdAndTitle);

console.log(videosWithIdAndTitle);