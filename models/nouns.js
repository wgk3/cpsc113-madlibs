var lodash = require('lodash');

var nouns = [
    ‘The Big Lebowski’,
    ‘lemon’,
    ‘Tom ‘Brady
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(nouns);
};