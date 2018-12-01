// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

// users
// - user can see his/her liked recipes by recipeId
// - user can see his/her own recipes by recipeId
const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  myRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
});

// recipe has name, description, likes (to track down likes), tags: referenced by tagId
const RecipeSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  name: {type: String, required: true},
  description: {type: String, required: true},
  picture_url: {type: String, required: true}
  // likes: {type: Number, required: true},
  // tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
  // {
  //   _id: true
  // });
})

// for tags.ß
const TagSchema = new mongoose.Schema({
  name: {type: String, required: true}
})

// let dbconf;
// if (process.env.NODE_ENV === 'PRODUCTION') {
//  // if we're in PRODUCTION mode, then read the configration from a file
//  // use blocking file io to do this...
//  const fs = require('fs');
//  const path = require('path');
//  const fn = path.join(__dirname, 'config.json');
//  const data = fs.readFileSync(fn);
//
//  // our configuration file will be in json, so parse it and set the
//  // conenction string appropriately!
//  const conf = JSON.parse(data);
//  dbconf = conf.dbconf;
// } else {
//  // if we're not in PRODUCTION mode, then use
//  dbconf = 'mongodb://localhost/cl2534'
// }
const User = mongoose.model('User', UserSchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);
// mongoose.connect(dbconf);
module.exports = User;
module.exports = Recipe;
