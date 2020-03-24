const Article = require('../models/articles');


const modelFind = async () => {
  try  {
    const methodFind = await Article.find();
    return methodFind;
  }catch (err) {
    return err;
  }
};


module.exports = modelFind;


// пишу обычый роутер реквайрю контроллер в котором одна строка - реквайер артикл модцуль и функция которую я буду дергать а в функции одна строка - авейт файнд
// const models = await Article.findOne({_id: req.params.id});
// const models = await Article.findById(req.params.id);