//THIS FILE IS FOR DATA SEED. IN CASE DATABASE IS RESET, RUN NODE DATASEED.JS

const mongoose = require("mongoose");
const User = mongoose.model('User');
const Recipe = mongoose.model('Recipe');

require('./db');




const gingerPeachChicken = new Recipe({
  user: '5c01b2c5f4caaa194b0eee02', //Lily
  name: 'Grilled Ginger-Peach Chicken Breast',
  description: "Ginger and peach form a great flavor combination. Especially here, where the ginger and peach flavors are enhanced by the element of smoke flavoring on the grill.",
  method: [
    "Combine peach preserves, vinegar, horseradish, ginger, salt, and pepper in microwave-safe bowl. Microwave on high until preserves are melted, stirring once halfway through the cooking time, 30 to 60 seconds. Remove and cool to room temperature.",
    "Rinse chicken breasts, pat dry, and place in a resealable plastic bag. Pour cooled marinade over chicken, seal, and refrigerate for 6 to 24 hours, turning chicken occasionally.",
    "Preheat an outdoor grill for medium-high heat and lightly oil the grate.",
    "Place chicken on preheated grill over indirect heat, cover, and grill until chicken is browned and cooked through, about 30 minutes."
  ],
  picture_url: 'https://images.media-allrecipes.com/userphotos/600x600/6813108.jpg'
})
gingerPeachChicken.save()

const mexicanSteak = new Recipe({
  user: '5c01b2c5f4caaa194b0eee00', //Chang
  name: 'Grilled Mexican Steak',
  description: "This is a great way to serve skirt or flank steak. The two day marinade is worth the wait.",
  method: [
    "Toast the cumin seeds in a medium saute pan over medium-low heat for 5 minutes, or until fragrant.",
    "In a blender, combine the cumin seeds, jalapenos, garlic, pepper, lime juice, and salt. Pulse the blender to finely chop ingredients. Add the oil and cilantro and puree until smooth.",
    "Lightly score both sides of the meat with a knife so that the marinade will penetrate. Place the meat in a large plastic bag or bowl, pour in the marinade, and coat well. Marinate in the refrigerator for 24 to 48 hours.",
    "Preheat an outdoor grill for high heat and lightly oil grate.",
    "Remove the meat from the marinade and discard the remaining marinade. Cook on high, 1 to 2 minutes per side, to sear the meat. Turn the heat down to low and cook for an additional 3 to 4 minutes per side, or until the it has reached the desired doneness."
  ],
  picture_url: 'https://images.media-allrecipes.com/userphotos/600x600/2254695.jpg'
})
mexicanSteak.save()
const yucatanPork = new Recipe({
  user: "5c01b2c5f4caaa194b0eee01", //Peter
  name: "Yucatan-Style Grilled Pork",
  description: "It has vibrant citrus/chile flavors and a beautiful orange hue from ground annatto.",
  method: [
    "Place orange juice, lemon juice, and lime juice in a bowl. Add garlic, kosher salt, annatto powder, chipotle powder, ground cumin, cayenne, oregano, and black pepper. Whisk until well blended.",
    "Cut the tenderloins in half crosswise; cut each piece in half lengthwise. Place pieces in marinade and thoroughly coat with the mixture. Cover with plastic wrap with the wrap touching the surface of the meat and marinade. (Or transfer mixture to a resealable plastic bag.) Refrigerate 4 to 6 hours.",
    "Transfer pieces of pork from marinade to a paper-towel-lined bowl to absorb most of the moisture. Discard paper towels. Drizzle vegetable oil and a bit more annatto powder on the pork.",
    "Preheat an outdoor grill for medium-high heat and lightly oil the grate.",
    "Place pieces evenly spaced on a hot grill. Allow meat to sear onto the grate until pieces can be easily turned, 4 or 5 minutes. Turn and grill on the other side another 4 or 5 minutes. An instant-read thermometer inserted into the center should read 135 to 140 degrees F (63 degrees C). Transfer onto a serving platter and allow meat to rest about 5 minutes before serving."
  ],
  picture_url: "https://images.media-allrecipes.com/userphotos/720x405/3699662.jpg"
})


const spicyShrimp = new Recipe({
  user: "5d2f6901e7179a26a971daa5", //Jack
  name: "Spicy Grilled Shrimp",
  description: "So fast and easy to prepare, these shrimp are destined to be the hit of any barbeque.",
  method: [
    "Preheat grill for medium heat.",
    "In a small bowl, crush the garlic with the salt. Mix in cayenne pepper and paprika, and then stir in olive oil and lemon juice to form a paste. In a large bowl, toss shrimp with garlic paste until evenly coated.",
    "Lightly oil grill grate. Cook shrimp for 2 to 3 minutes per side, or until opaque. Transfer to a serving dish, garnish with lemon wedges, and serve."
  ],
  picture_url: "https://images.media-allrecipes.com/userphotos/600x600/1384969.jpg"
})

const crabCakes = new Recipe({
  user: "5c01b2c5f4caaa194b0eee00", //Chang
  name: "Best Ever Crab Cakes",
  description: "Serve with coarse mustard on the plate or your favorite mustard sauce.",
  method: [
    "In a medium bowl, whisk together egg, mayonnaise, lemon juice, red pepper flakes, tarragon, and scallions.",
    "Gently stir in crabmeat, being careful not to break up meat. Gradually mix in cracker crumbs, adding until desired consistency is achieved.",
    "Heat butter in a skillet over medium heat. Form crab mixture into 4 patties.",
    "Place patties in skillet, and cook until golden brown, about 5 to 6 minutes on each side."
  ],
  picture_url: "https://images.media-allrecipes.com/userphotos/720x405/5103019.jpg"
})

const mexicanCorn = new Recipe({
  user: "5c01b2c5f4caaa194b0eee01", //Peter
  name: "Mexican Grilled Corn",
  description: " The way the mild, subtly salted cheese works with an ancho-lime mayonnaise, along with that buttery, smoky corn, is a magnificent combination of flavors.",
  method: [
    "Preheat an outdoor grill for high heat and lightly oil the grate.",
    "Combine mayonnaise, lime juice, ancho chile powder, and smoked paprika in a bowl; whisk until smooth.",
    "Bring a large pot of salted water to a boil. Boil corn in the salted water for 5 minutes.",
    "Place ears of corn on hot grill and cook until the kernels begin to brown and caramelize, 2 to 3 minutes.",
    "Turn the corn and continue to cook, turning ears after 1 to 2 minutes, until they are browned with slightly charred, caramelized spots.",
    "Generously brush corn with melted butter and ancho-lime mayonnaise until kernels are coated."
  ],
  picture_url: "https://images.media-allrecipes.com/userphotos/600x600/4814257.jpg"
})

const zucchiniLasagna = new Recipe({
  user: "5c01b2c5f4caaa194b0eee02", //Peter
  name: "Zucchini Lasagna",
  description: "This lasagna is perfect in the summer with your garden-fresh veggies and herbs, or in the winter when you need a comforting meal.",
  method: [
    "Slice zucchini lengthwise into very thin slices. Sprinkle slices lightly with salt; set aside to drain in a colander.",
    "To prepare the meat sauce, cook and stir ground beef and black pepper in a large skillet over medium high heat for 5 minutes.",
    "Add in green pepper and onion; cook and stir until meat is no longer pink. Stir in tomato paste, tomato sauce, wine, basil, and oregano, adding a small amount of hot water if sauce is too thick.",
    "To assemble lasagna, spread 1/2 of the meat sauce into the bottom of prepared pan. Then layer 1/2 the zucchini slices, 1/2 the ricotta mixture, all of the spinach, followed by all of the mushrooms, then 1/2 the mozzarella cheese.",
    "Bake for 45 minutes. Remove foil; raise oven temperature to 350 degrees F (175 degrees C), and bake an additional 15 minutes."
  ],
  picture_url: "https://images.media-allrecipes.com/userphotos/720x405/6287281.jpg"
})

const macaroniSalad = new Recipe({
  user: "5d2f6901e7179a26a971daa5", //Jack
  name: "Macaroni Salad",
  description: "this deli-style macaroni salad will always be a crowd favorite, as long as you pay attention to a few key details.",
  method: [
    "Whisk 1 cup mayonnaise, vinegar, Dijon mustard, salt, black pepper, and cayenne pepper together in a bowl until well blended.",
    "Stir in celery, red bell pepper, carrot, onions, and jalapeno and poblano peppers.",
    "Cook elbow macaroni in the boiling water, stirring occasionally until cooked through, 8 to 10 minutes.",
    "Allow macaroni to drain in a colander about 5 minutes, shaking out moisture from time to time",
    "Pour dressing over macaroni and stir until dressing is evenly distributed."
  ],
  picture_url: "https://images.media-allrecipes.com/userphotos/720x405/2343032.jpg"
})

const bigMac = new Recipe({
  user: "5c01b2c5f4caaa194b0eee00", //Chang
  name: "Big Mac® Clone",
  description: "A very delicious, authentic, and most importantly great clone of a Big Mac® from McDonald's®.",
  method: [
    "Shape ground beef into 4 flat patties that will fit the hamburger buns. Place them on a tray lined with waxed paper.",
    "Mix mayonnaise, mustard, pickle relish, white wine vinegar, onion powder, garlic powder, and paprika in a bowl to make sauce.",
    "Preheat a large skillet over medium heat. Toast buns in batches until lightly golden, 1 to 2 minutes.",
    "Layer some of the sauce, 1 tablespoon minced onion, 2 tablespoons lettuce, and pickles on 2 bottom buns.",
    "Layer some of the sauce and remaining 1 tablespoon minced onion, 2 tablespoons lettuce, and American cheese on the other bottom buns.",
    "Cook in the hot skillet 2 at a time until browned, 3 to 4 minutes per side."
  ],
  picture_url: "https://images.media-allrecipes.com/userphotos/560x315/4313539.jpg"
})

const carrotSalad = new Recipe({
  user: "5c01b2c5f4caaa194b0eee00", //Chang
  name: "Sweet Carrot Salad",
  description: "Great for a BBQ or a pot luck and best when left to sit for an hour to let flavors meld."",
  method: [
    "In a large bowl, mix together the carrots, pineapple and raisins.",
    "Stir in the honey, mayonnaise and lemon juice until evenly coated.",
    "Refrigerate for at least 30 minutes before serving to let the flavors meld.",
  ],
  picture_url: "https://images.media-allrecipes.com/userphotos/560x315/2457392.jpg"
})














// Recipe.remove(function (err, recipe) {
//   if (err) return handleError(err);
//   Recipe.findById('5c01d38cf916561be5d1f0d7', function (err, product) {
//     console.log(product) // null
//   })
// })

// Recipe.remove(function (err, recipe) {
//   if (err) return handleError(err);
//   Recipe.findById('5c01d38cf916561be5d1f0d7', function (err, product) {
//     console.log(product) // null
//   })
// })


//Chang 5c01b2c5f4caaa194b0eee00 - Lamb, steamedSalmon, oatmeal, asianChicken
//Peter 5c01b2c5f4caaa194b0eee01 - poachedEgg, clamChowder,
//Lily 5c01b2c5f4caaa194b0eee02 - blackberryTart, grapefruitSunrise, greekSalad
//Lucy 5c01b2c5f4caaa194b0eee03 - pastaClams, blueberryTrifle, bagel



// const Chang = new User({
//   name: 'Chang',
//   id: 1
// })

//Chang
// User.findById('5c01b2c5f4caaa194b0eee00', function(err, user) {
//   if (err) {return err}
//   user.myRecipes.push('5c01d61f540c081c10f55411')
//   user.myRecipes.push('5c01d61f540c081c10f5540d')
//   user.myRecipes.push('5c01d61f540c081c10f55417')
//   user.myRecipes.push('5c01d61f540c081c10f55415')
//   user.save()
// })


// const Peter = new User({
//   name: 'Peter',
//   id: 2
// })

// User.findById('5c01b2c5f4caaa194b0eee01', function(err, user) {
//   if (err) {return err}
//   user.myRecipes.push('5c01d61f540c081c10f55412')
//   user.myRecipes.push('5c01d61f540c081c10f5540e')
//   user.save()
// })

// const Jack = new User({
//   name: 'Lily',
//   id: 3
// })
//
// User.findById('5c01b2c5f4caaa194b0eee02', function(err, user) {
//   if (err) {return err}
//   user.myRecipes.push('5c01d61f540c081c10f55413')
//   user.myRecipes.push('5c01d61f540c081c10f5540f')
//   user.myRecipes.push('5c01d61f540c081c10f5540c')
//   user.save()
// })


// const Lucy = new User({
//   name: 'Lucy',
//   id: 4
// })
//
// User.findById('5c01b2c5f4caaa194b0eee03', function(err, user) {
//   if (err) {return err}
//   user.myRecipes.push('5c01d61f540c081c10f55416')
//   user.myRecipes.push('5c01d61f540c081c10f55410')
//   user.myRecipes.push('5c01d61f540c081c10f55414')
//   user.save()
// })
// console.log('hi')

// Chang.save()
// Peter.save()
// Jack.save()
// Lucy.save()
