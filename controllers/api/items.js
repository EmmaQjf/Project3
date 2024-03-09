const Item = require('../../models/item');


module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const items = await Item.find({}).sort('title').populate('categories').exec();
    // re-sort based upon the sortOrder of the categories
    items.sort((a, b) => a.categories.sortOrder - b.categories.sortOrder);
    res.status(200).json(items);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

// async function showCategory(req, res) {
//   try{
//     const foundCategory = await Category.findOne({ _id: req.params.id });
//     res.status(200).json(foundCategory);
//   }catch(e){
//     res.status(400).json({ msg: e.message });
//   }  
// }
//itemsCtrl.showCategory
