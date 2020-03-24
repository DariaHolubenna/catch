const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const ArticleSchema = new Schema({
  title: {
    type: String,
    maxlength: 200,
    required: true,
  },
  content: {
    type: String,
    minlength: 50,
    required: true,
  },
  keywords: [{
    type: String,
    require: true,
  }],
  author: {
    type: String,
    minlength: 10,
    unique: true,
  },
});

const ArticleModel = mongoose.model('article', ArticleSchema);

module.exports = ArticleModel;
