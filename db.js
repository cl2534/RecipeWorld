
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  myRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
});

// recipe has name, description, likes (to track down likes), tags: referenced by tagId
const RecipeSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  name: {type: String, required: true},
  description: {type: String, required: true},
  method: {type: Array, required: true},
  picture_url: {type: String, required: true}
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
