const Category = require('../../models/category');

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const categories = await Category.find({}).sort('name').populate('items').exec();
    // re-sort based upon the sortOrder of the categories
    categories.sort((a, b) => a.sortOrder - b.sortOrder);
    res.status(200).json(categories);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}



async function show(req, res) {
  try{
    const foundCategory = await Category.findOne({ name: req.params.name }).populate('items').exec();
    res.status(200).json(foundCategory);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}