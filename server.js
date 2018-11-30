
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



const blackberryTart = new Recipe({
  user: 1,
  name: 'Blackberry Tart',
  description: "Combine walnuts and pitted dates in a food processor. Process until well mixed and ground, but not smooth (about 40 seconds). It should have a coarse texture when done. Press into a 9-inch tart pan. Set in refrigerator while making the filling.If you are using frozen blackberries make sure they are completely thawed. If not, they will dilute the filling as they thaw and make it runny.Place 2 cups of the berries along with the arrowroot in a blender. Add water or blackberry juice. Blend into a puree. Place puree in a small saucepan along with honey and cook over medium heat stirring constantly for about 3-4 minutes. It should lose its cloudiness and thicken. When it thickens and the cloudiness is gone remove it from heat. Mix with rest of the blackberries and fill tart shell. Refrigerate for at least 3 hours. Make sure it is covered so it doesn't pick up moisture from the refrigerator.",
  picture_url: 'http://www.whfoods.com/recipeimages/blackberrytart.jpg'
})


const asianChicken = new Recipe({
  user: 1,
  name: 'Asian Chicken with Ginger and Bok Choy',
  description: 'Heat broth in a stainless steel skillet. When broth begins to steam, add scallions and Healthy Saute for 2 minutes. Add ginger and continue to sauté for another minute. Add chicken and continue to sauté for 2-3 minutes.Add shiitake mushrooms and bok choy. Continue to sauté for another 3-4 minutes, and then add rice vinegar and season with salt, pepper, and soy sauce to taste.',
  picture_url: 'http://www.whfoods.com/recipeimages/stirfrychickenbokchoy.jpg'
})

const clamChowder = new Recipe({
  user: 1,
  name: 'Oyster and Clam Chowder',
  description: 'Prepare onion, garlic, and celery. Heat 1 TBS broth in medium soup pot. Healthy Sauté onion, garlic, and celery in broth over medium heat for about 5 minutes stirring often. Add rest of broth, tomato sauce, and Italian herbs. Simmer for another 25 minutes.Drain and rinse both oysters and clams. If oysters are big, add to chowder about 2 minutes before canned clams. Heat for another 5 minutes. Season with salt and pepper to taste and sprinkle with chopped parsley.',
  picture_url: 'http://www.whfoods.com/recipeimages/oysterclamchowder.jpg'
})

const greekSalad = new Recipe({
  user: 1,
  name: 'Greek Salad',
  description: 'Combine first five ingredients. Toss with olive oil and vinegar, and add salt and pepper to taste.',
  picture_url: 'http://www.whfoods.com/recipeimages/greeksalad.jpg'
})

const bagel = new Recipe({
  user: 1,
  name: 'Breakfast Bagel',
  description: 'Bring water and 1 tsp vinegar to a light boil in a shallow pan. Make sure there is enough water to cover egg.While water is coming to a boil, slice bagel in half and toast.Place tomato, avocado, and cheese on top of toasted bagel. poach eggs, crack into water and cook about 5 minutes, just until the white is set and the yolk has filmed over. Remove with slotted spoon. Place on top of bagel. Season with salt and pepper to taste. Serve open faced.',
  picture_url: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Ham---Cheese-Bagels_exps33050_SD2232457B08_18_3b_RMS.jpg'
})

const oatmeal = new Recipe({
  user: 2,
  name: '10-Minute Energizing Oatmeal',
  description: 'Bring the water and salt to a boil in a saucepan, then turn the heat to low and add the oats.Cook for about 5 minutes, stirring regularly so that the oatmeal will not clump together. Add cinnamon, raisins and almonds, stir, cover the pan and turn off heat. Let sit for 5 minutes. Serve with milk and sweetener.',
  picture_url: 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/1515172142/1801w-basic-oatmeal-recipe.jpg?itok=1Xp6xEkU'
})

const poachedEgg = new Recipe({
  user: 1,
  name: 'Poached Egg over Spinach and Mushroom',
  description: 'Heat broth in a 10-12 inch stainless steel skillet. Healthy Sauté mushrooms for 4 minutes over medium heat stirring frequently.Add the spinach and stir for 1 minute. Toss with Mediterranean Dressing and top with two poached eggs.',
  picture_url: 'http://www.whfoods.com/recipeimages/poachedeggsspinachmushrooms.jpg'
})

const grapefruitSunrise = new Recipe({
  user: 1,
  name: 'Grapefruit Sunrise',
  description: 'Place grapefruit juice, orange juice, 1 cup strawberries, and honey in blender and blend until smooth. Strain into 2 chilled glasses.Top with grapefruit sections and sliced strawberries.',
  picture_url: 'http://www.whfoods.com/recipeimages/grapefruitsunrise.jpg'
})

const blueberryTrifle = new Recipe({
  user: 1,
  name: 'Blueberry Trifle',
  description: 'Divide blueberries into two bowls. Top each with 1/2 half of the carton of yogurt. Top with shaved chocolate or chocolate pieces.',
  picture_url: 'http://www.whfoods.com/recipeimages/blueberrytruffle.jpg'
})

const steamedSalmon = new Recipe({
  user: 1,
  name: 'Steamed Salmon and Asparagus with Mustard Dill Sauce',
  description: 'Bring 2 inches of lightly salted water to a boil in a steamer with a tight fitting lid. While water is coming to a boil, put all sauce ingredients except olive oil in a blender and begin to blend on high speed for about one minute. While blender is running, drizzle olive oil in a little at a time. Set aside. Snap off tough asparagus ends. When water is at a full boil place asparagus in steamer basket, cover, and cook until asparagus is tender, about 3-5 minutes, depending on thickness. Remove from steamer, toss with 1 TBS lemon juice, 1 TBS olive oil, salt and pepper. Rub salmon with 1 TBS lemon juice and season with a little salt and pepper. Place salmon in the same steamer basket and steam until pink inside, about 3-4 minutes. Place salmon on a plate and pour desired amount of sauce over it and the asparagus.',
  picture_url: 'http://www.whfoods.com/recipeimages/steamedsalmonasparagus.jpg'
})


const pastaClams = new Recipe({
  user: 1,
  name: 'Pasta with Clams',
  description: 'Bring water to a boil and cook pasta according to package instructions. While water is coming to a boil and pasta is cooking, heat 1 TBS broth over medium heat in a 10-12 inch stainless steel skillet. Healthy Sauté onion in broth for about 4 minutes stirring frequently. Add tomato paste and diced tomatoes. Cook for another 10 minutes on high heat to reduce and intensify sauce. Add clams and cook for another 2 minutes. Add pressed garlic, chopped basil, olive oil, salt, pepper and chili flakes. Remove from heat immediately and toss with cooked, drained pasta.',
  picture_url: 'http://www.whfoods.com/recipeimages/pastaclams.jpg'
})

const lamb = new Recipe({
  user: 1,
  name: 'Roast Leg of Lamb',
  description: 'Cut off excess fat from leg of lamb. Lay leg of lamb out flat in glass baking dish. Press garlic and chop rosemary. Rub leg with both making sure you get it into the crevices. Pour fresh lemon juice over lamb and sprinkle with salt. Cover and refrigerate overnight. Preheat the oven to 425°F (218°C). Cut vegetables and place around lamb in baking dish. Sprinkle with pepper. Roast lamb and vegetables for about 15 minutes, then turn the heat down to 350°F (177°C). After about 20 minutes, check the internal temperature of the lamb with an instant reading meat thermometer. Continue to check in thickest part of leg every 5 minutes until internal temperature reaches 130°F (55°C) for medium rare. Let it rest for a few minutes before carving. Serve with vegetables and pan juices.',
  picture_url: 'http://www.whfoods.com/recipeimages/roastlegoflamb.jpg'
})
lamb.save()
// steamedSalmon.save()
// // pastaClams.save()
// blueberryTrifle.save()
// grapefruitSunrise.save()
// poachedEgg.save()
// oatmeal.save()
// bagel.save()
// greekSalad.save()
// clamChowder.save()
// blackberryTart.save()
// asianChicken.save()

// Recipe.remove(function (err, recipe) {
//   if (err) return handleError(err);
//   Recipe.findById(recipe._id, function (err, product) {
//     console.log(product) // null
//   })
// })
//
// const Chang = new User({
//   name: 'Chang',
//   id: 1
// })
//
// const Peter = new User({
//   name: 'Peter',
//   id: 2
// })
//
// const Jack = new User({
//   name: 'Lily',
//   id: 3
// })
//
// const Lucy = new User({
//   name: 'Lucy',
//   id: 4
// })
//
// Chang.save()
// Peter.save()
// Jack.save()
// Lucy.save()


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

// this is our create methid
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
// app.get('/', (req, res) => {
//   res.render('index');
// });
//
// app.listen(process.env.PORT || 3000);
