// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

// users
// - authentication needed
// - require username and password upon log in.
// - user can see his/her liked recipes by recipeId
// - user can see his/her own recipes by recipeId
const user = new mongoose.Schema({
  // username provided by authentication plugin
  // password hash provided by authentication plugin
  likedRecipe:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
  myRecipe:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
});

// recipe has name, description, likes (to track down likes), tags: referenced by tagId
const recipeSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  name: {type: String, required: true},
  description: {type: String, required: true},
  picture_url: {type: String, required: true}
  likes: {type: Number, required: true},
  tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
  createdAt: {type: Date, required: true},
  {
    _id: true
  });

// for tags.
const tagSchema = new mongoose.Schema({
  name: {type: String, required: true}
})

let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fs = require('fs');
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://cl2534:tShgqzYX@class-mongodb.cims.nyu.edu/cl2534'
}
mongoose.model('User', user);
mongoose.model('Recipe', recipeSchema);
mongoose.model('Tag', tagSchema);
mongoose.connect(dbconf);
