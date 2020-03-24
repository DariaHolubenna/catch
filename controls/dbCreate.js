const mongoose = require('mongoose');
require('../bin/dbConnect')();
const Article = require('../models/articles');


Article.create({
  title: 'test name one',
  content: 'test st=est s=tehhst mnogo mnogo testa vor escho test i echo test test nado testa na 50t simbyl nu vsto dumayu fatit testa dlya testov aga aga',
  keywords: ['testOne', 'testTwo', 'testTri'],
  author: 'AliBaba i 40k Razboynikov ibo popugay',
}).then(article => {
  console.log('was created: ', article);
}).catch(err => {
  console.log('error creating', err)
});
