require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'Dresses', items: [], sortOrder: 10 },
        { name: 'Tops', items: [], sortOrder: 20 },
        { name: 'Skirts', items: [], sortOrder: 30 },
        { name: 'Hats', items: [], sortOrder: 40 },
        { name: 'Women', items: [], sortOrder: 50 },
        { name: 'Men', items: [], sortOrder: 60 }
    ]);
  
    await Item.deleteMany({});
    

    const items = await Item.create([
        {title: 'Gothic Victorian purple Gown', desc: 'handmade',img:"https://i.imgur.com/kT1anQr.jpg", categories:[categories[0],categories[4]],size:'XS',color:"purple", price: 100},
  
        {title: 'Royal Queen Dress', desc: 'handmade',img:"https://i.imgur.com/Qc0bE5S.png", categories:[categories[0],categories[4]],size:'XS',color:"green", price: 100},

        {title: 'Royal ball Dress', desc: 'handmade',img:"https://i.imgur.com/0RNeRxL.png", categories:[categories[0],categories[4]],size:'XS',color:"cream", price: 100},
  
        {title: 'Embroidered red Cotton Blouse', desc: 'handmade',img:"https://i.imgur.com/SJnzFBV.jpg", categories:[categories[1],categories[4]],size:'XS',color:"red", price: 30},
  
        {title: 'White Satin Blouse', desc: 'handmade',img:"https://i.imgur.com/b5EtpHJ.jpg", categories:[categories[1],categories[4]],size:'XS',color:'white', price: 30},
  
        {title: 'black ruffle Blouse', desc: 'handmade',img:"https://i.imgur.com/9i3G8Te.jpg", categories:[categories[1],categories[4]], size:'XS',color:'black',price: 30},

        {title: 'green linen Blend Blouse', desc: 'handmade',img:"https://i.imgur.com/w6zf41n.jpg", categories:[categories[1],categories[4]], size:'XS',color:'green',price: 30},
  
        {title: 'red Stripe Linen Blend Skirt', desc: 'handmade',img:"https://i.imgur.com/PyEgJXM.jpg", categories:[categories[2],categories[4]],size:'XS',color:'red', price: 50},
  
        {title: 'Satin Jacquard Skirt', desc: 'handmade',img:"https://i.imgur.com/TJ6BqyK.jpg", categories:[categories[2],categories[4]],size:'XS',color:'red', price: 50},
  
        {title: 'women burgendy hat', desc: 'handmade',img:"https://i.imgur.com/n8AQtzq.png", categories:[categories[3],categories[4]],size:'XS',color:'burgendy', price: 30},

        {title: 'women rose pattern', desc: 'handmade',img:"https://i.imgur.com/2fDAwVO.png", categories:[categories[3],categories[4]], size:'XS',color:'red',price: 30},

        {title: 'women white sun hat', desc: 'handmade',img:"https://i.imgur.com/mnF0Wb2.png", categories:[categories[3],categories[4]], size:'XS',color:'white',price: 30},

        {title: 'women grey hat', desc: 'handmade',img:"https://i.imgur.com/ShdSpBO.png", categories:[categories[3],categories[4]], size:'XS',color:'grey',price: 30},

        {title: 'women green hat', desc: 'handmade',img:"https://i.imgur.com/2IZW24h.png", categories:[categories[3],categories[4]], size:'XS',color:'green',price: 30},

        {title: 'men green tall hat', desc: 'handmade',img:"https://i.imgur.com/EymrTRm.png", categories:[categories[3],categories[5]],size:'XS',color:'green', price: 30},

        {title: 'men black tallhat 2', desc: 'handmade',img:"https://i.imgur.com/oXcNPuE.png", categories:[categories[3],categories[5]],size:'XS',color:'black', price: 30},

        {title: 'cream men shirt', desc: 'handmade',img:"https://i.imgur.com/jU0Q00x.png", categories:[categories[1],categories[5]],size:'XS',color:'cream', price: 30},
        
        {title: 'green men shirt', desc: 'handmade',img:"https://i.imgur.com/TNgvHgQ.png", categories:[categories[1],categories[5]],size:'XS',color:'green', price: 30},
      ]);
  
    console.log(items)
  
    for (const item of items) {
        for (const category of item.categories) {
          await Category.findOneAndUpdate(
            { _id: category._id },
            { $push: { items: item._id } },
            { new: true }
          );
        }
      }
  
     
      process.exit();
    
    })();