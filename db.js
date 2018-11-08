// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

// users
// - authentication needed
// - require username and password upon log in.
// - user can see his/her liked recipes by recipeId
// - user can see his/her own recipes by recipeId
const User = new mongoose.Schema({
  // username provided by authentication plugin
  // password hash provided by authentication plugin
  likedRecipe:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
  myRecipe:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
});

// recipe has name, description, likes (to track down likes), tags: referenced by tagId
const Recipe = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  name: {type: String, required: true},
  description: {type: String, required: true}},
  likes: {type: Number, required: true}},
  tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
  createdAt: {type: Date, required: true},
  {
    _id: true
  });

// for tags.
const Tags = new mongoose.Schema({
  name: {type: String, required: true}
})
