const { movies } = require('./filter/filterData');
const { log } = require('./helpers');

// This is the resolution for filter() exercises
// If you want to try it, check this link: jsbin.com/vivosej
// Resolution in this video: https://youtu.be/H8ginSxcTbU?list=PLhxF6V44XvXQzeZqn3Xd95RKm_Gr7JT7y 

const propEquals = propName => value => obj => 
    obj[propName] === value

const pick = props => obj =>
    props.reduce((accu, curr) => { accu[curr] = obj[curr]; return accu; }, {})

const byRatingEquals5 = propEquals('rating')(5)
const toIdAndTitle = pick(['id', 'title'])

const topRatingMovies = movies
    .filter(byRatingEquals5)
    .map(toIdAndTitle);

log(topRatingMovies);
