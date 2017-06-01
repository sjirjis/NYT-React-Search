var mongoose = require("mongoose");

var articlesSchema = mongoose.Schema({
    title: String,
    date: String,
    url: String
});

var articles = mongoose.model('articles', articlesSchema);

module.exports = articles;