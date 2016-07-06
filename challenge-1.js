const { movies } = require('./filter/filterData');
const { log } = require('./helpers');

// [
//     {
//         id: 1,
//         title: 'The Movie',
//         rating: 5
//     },
//     {
//         id: 2,
//         title: 'The Movie 2',
//         rating: 5
//     },
// ]

//     {
//         2: 'The Movie 2'
//     },

const propEquals = propName => value => obj => 
    obj[propName] === value

const pick = props => obj =>
    props.reduce((accu, curr) => { accu[curr] = obj[curr]; return accu; }, {})

const byRatingEquals5 = propEquals('rating')(5)
const toIdAndTitle = obj => pick(['id', 'title'])(obj)

const topRatingMovies = movies
    .filter(byRatingEquals5)
    .map(toIdAndTitle);

log(topRatingMovies);