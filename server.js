
require('./db');
const express = require('express');
const logger = require("morgan");
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
const API_PORT = 3001;
const router = express.Router();
const User = mongoose.model('User');
const Recipe = mongoose.model('Recipe');
const MONGODB_URL = "mongodb://cl2534:chfhd156@ds151951.mlab.com:51951/cl2534";
// I KNOW THIS CREDENTIAL SHOULD NOT BE HERE. IT IS ALSO SAVED IN .ENV. SINCE OUR REPO IS PRIVATE, I WILL JUST USE IT HERE.

// enable sessions
const session = require('express-session');
// const sessionOptions = {
//     secret: 'secret cookie thang (store this elsewhere!)',
//     resave: true,
//       saveUninitialized: true
// };
// app.use(session(sessionOptions));
const mongoURL = "mongodb://cl2534:chfhd156@ds151951.mlab.com:51951/cl2534";
mongoose.connect(
  mongoURL,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection failed:"));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
//
// body parser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
// serve static files
app.use(express.static(path.join(__dirname, 'public')));

router.get("/getRecipes", (req, res) => {
  Recipe.find((err, recipes) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({recipes});
  });
});

router.get("/getUsers", (req, res) => {
  User.find((err, user) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({user});
  });
});

router.post('/getRecipes', function(req, res) {
  Recipe.create({
    user: req.body.userId,
    name: req.body.name,
    description: req.body.description,
    picture_url: req.body.picture_url
  }).then(recipe => {
    res.json(recipe)
  });
});

router.get("/getUsers/:id", (req, res) => {
  let userId = req.params.id
  User.findById(userId, function(err, user) {
    if (err) return res.json({ success: false, error: err });
    return res.json({user});
  })
})

router.get("/getRecipes/:id", (req, res) => {
  let recipeId = req.params.id
  Recipe.findById(recipeId, function(err, recipe) {
    if (err) return res.json({ success: false, error: err });
    return res.json({recipe});
  })
})

router.delete("/getRecipes", (req, res) => {
  const { id } = req.body;
  Recipe.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json();
  });
});
// newRecipe.save(function(err) {
//   if (err) return err
// })
 // userId, name, description, picture_url
// this is our update method
// this method overwrites existing data in our database
router.post("/updateRecipe", (req, res) => {
  const { id, update } = req.body;
  Recipe.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteRecipe", (req, res) => {
  const { id } = req.body;
  Recipe.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create ㅇhttps://damp-lake-70786.herokuapp.com/
// this method adds new data in our database
router.post("/postRecipe", (req, res) => {
  let recipe = new Recipe();

  const { userId, name, description, picture_url } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  recipe.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});



app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
module.exports = app
// app.get('/', (req, res) => {
//   res.render('index');
// });
//
// app.listen(process.env.PORT || 3000);
