const userResolvers = require('./user.js');
const postResolvers = require('./post');
const commentResolvers = require('./comment');

module.exports = [userResolvers, postResolvers, commentResolvers];