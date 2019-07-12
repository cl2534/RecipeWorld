//THIS FILE IS FOR DATA SEED. IN CASE DATABASE IS RESET, RUN NODE DATASEED.JS
require('./db');
const mongoose = require("mongoose");
const User = mongoose.model('User');
const Recipe = mongoose.model('Recipe');



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
  picture_url: 'https://www.allrecipes.com/recipe/274372/grilled-ginger-peach-chicken-breast/photos/6813108/'
})


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
  picture_url: 'https://www.allrecipes.com/recipe/47844/grilled-mexican-steak/photos/2254695/'
})

const yucatanPork = new Recipe({
  user: '5c01b2c5f4caaa194b0eee01', //Peter
  name: 'Yucatan-Style Grilled Pork',
  description: 'It has vibrant citrus/chile flavors and a beautiful orange hue from ground annatto.',
  method: [
    "Place orange juice, lemon juice, and lime juice in a bowl. Add garlic, kosher salt, annatto powder, chipotle powder, ground cumin, cayenne, oregano, and black pepper. Whisk until well blended.",
    "Cut the tenderloins in half crosswise; cut each piece in half lengthwise. Place pieces in marinade and thoroughly coat with the mixture. Cover with plastic wrap with the wrap touching the surface of the meat and marinade. (Or transfer mixture to a resealable plastic bag.) Refrigerate 4 to 6 hours.",
    "Transfer pieces of pork from marinade to a paper-towel-lined bowl to absorb most of the moisture. Discard paper towels. Drizzle vegetable oil and a bit more annatto powder on the pork.",
    "Preheat an outdoor grill for medium-high heat and lightly oil the grate.",
    "Place pieces evenly spaced on a hot grill. Allow meat to sear onto the grate until pieces can be easily turned, 4 or 5 minutes. Turn and grill on the other side another 4 or 5 minutes. An instant-read thermometer inserted into the center should read 135 to 140 degrees F (63 degrees C). Transfer onto a serving platter and allow meat to rest about 5 minutes before serving."
  ],
  picture_url: 'https://images.media-allrecipes.com/userphotos/720x405/3699662.jpg'
})
//
// const greekSalad = new Recipe({
//   user: '5c01b2c5f4caaa194b0eee02', //Lily
//   name: 'Greek Salad',
//   description: 'Combine first five ingredients. Toss with olive oil and vinegar, and add salt and pepper to taste.',
//   picture_url: 'http://www.whfoods.com/recipeimages/greeksalad.jpg'
// })
//
// const bagel = new Recipe({
//   user: '5c01b2c5f4caaa194b0eee03', //Lucy
//   name: 'Breakfast Bagel',
//   description: 'Bring water and 1 tsp vinegar to a light boil in a shallow pan. Make sure there is enough water to cover egg.While water is coming to a boil, slice bagel in half and toast.Place tomato, avocado, and cheese on top of toasted bagel. poach eggs, crack into water and cook about 5 minutes, just until the white is set and the yolk has filmed over. Remove with slotted spoon. Place on top of bagel. Season with salt and pepper to taste. Serve open faced.',
//   picture_url: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Ham---Cheese-Bagels_exps33050_SD2232457B08_18_3b_RMS.jpg'
// })
//
// const oatmeal = new Recipe({
//   user: '5c01b2c5f4caaa194b0eee00', //Chang
//   name: '10-Minute Energizing Oatmeal',
//   description: 'Bring the water and salt to a boil in a saucepan, then turn the heat to low and add the oats.Cook for about 5 minutes, stirring regularly so that the oatmeal will not clump together. Add cinnamon, raisins and almonds, stir, cover the pan and turn off heat. Let sit for 5 minutes. Serve with milk and sweetener.',
//   picture_url: 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/medium_2x/public/1515172142/1801w-basic-oatmeal-recipe.jpg?itok=1Xp6xEkU'
// })
//
// const poachedEgg = new Recipe({
//   user: '5c01b2c5f4caaa194b0eee01', //Peter
//   name: 'Poached Egg over Spinach and Mushroom',
//   description: 'Heat broth in a 10-12 inch stainless steel skillet. Healthy Sauté mushrooms for 4 minutes over medium heat stirring frequently.Add the spinach and stir for 1 minute. Toss with Mediterranean Dressing and top with two poached eggs.',
//   picture_url: 'http://www.whfoods.com/recipeimages/poachedeggsspinachmushrooms.jpg'
// })
//
// const grapefruitSunrise = new Recipe({
//   user: '5c01b2c5f4caaa194b0eee02', //Lily
//   name: 'Grapefruit Sunrise',
//   description: 'Place grapefruit juice, orange juice, 1 cup strawberries, and honey in blender and blend until smooth. Strain into 2 chilled glasses.Top with grapefruit sections and sliced strawberries.',
//   picture_url: 'http://www.whfoods.com/recipeimages/grapefruitsunrise.jpg'
// })
//
// const blueberryTrifle = new Recipe({
//   user: '5c01b2c5f4caaa194b0eee03', //Lucy
//   name: 'Blueberry Trifle',
//   description: 'Divide blueberries into two bowls. Top each with 1/2 half of the carton of yogurt. Top with shaved chocolate or chocolate pieces.',
//   picture_url: 'http://www.whfoods.com/recipeimages/blueberrytruffle.jpg'
// })
//
// const steamedSalmon = new Recipe({
//   user: '5c01b2c5f4caaa194b0eee00', //Chang
//   name: 'Steamed Salmon and Asparagus with Mustard Dill Sauce',
//   description: 'Bring 2 inches of lightly salted water to a boil in a steamer with a tight fitting lid. While water is coming to a boil, put all sauce ingredients except olive oil in a blender and begin to blend on high speed for about one minute. While blender is running, drizzle olive oil in a little at a time. Set aside. Snap off tough asparagus ends. When water is at a full boil place asparagus in steamer basket, cover, and cook until asparagus is tender, about 3-5 minutes, depending on thickness. Remove from steamer, toss with 1 TBS lemon juice, 1 TBS olive oil, salt and pepper. Rub salmon with 1 TBS lemon juice and season with a little salt and pepper. Place salmon in the same steamer basket and steam until pink inside, about 3-4 minutes. Place salmon on a plate and pour desired amount of sauce over it and the asparagus.',
//   picture_url: 'http://www.whfoods.com/recipeimages/steamedsalmonasparagus.jpg'
// })
//
//
// const pastaClams = new Recipe({
//   user: '5c01b2c5f4caaa194b0eee03', //Lucy
//   name: 'Pasta with Clams',
//   description: 'Bring water to a boil and cook pasta according to package instructions. While water is coming to a boil and pasta is cooking, heat 1 TBS broth over medium heat in a 10-12 inch stainless steel skillet. Healthy Sauté onion in broth for about 4 minutes stirring frequently. Add tomato paste and diced tomatoes. Cook for another 10 minutes on high heat to reduce and intensify sauce. Add clams and cook for another 2 minutes. Add pressed garlic, chopped basil, olive oil, salt, pepper and chili flakes. Remove from heat immediately and toss with cooked, drained pasta.',
//   picture_url: 'http://www.whfoods.com/recipeimages/pastaclams.jpg'
// })
//
// const lamb = new Recipe({
//   user: '5c01b2c5f4caaa194b0eee00', //Chang
//   name: 'Roast Leg of Lamb',
//   description: 'Cut off excess fat from leg of lamb. Lay leg of lamb out flat in glass baking dish. Press garlic and chop rosemary. Rub leg with both making sure you get it into the crevices. Pour fresh lemon juice over lamb and sprinkle with salt. Cover and refrigerate overnight. Preheat the oven to 425°F (218°C). Cut vegetables and place around lamb in baking dish. Sprinkle with pepper. Roast lamb and vegetables for about 15 minutes, then turn the heat down to 350°F (177°C). After about 20 minutes, check the internal temperature of the lamb with an instant reading meat thermometer. Continue to check in thickest part of leg every 5 minutes until internal temperature reaches 130°F (55°C) for medium rare. Let it rest for a few minutes before carving. Serve with vegetables and pan juices.',
//   picture_url: 'http://www.whfoods.com/recipeimages/roastlegoflamb.jpg'
// })

// Recipes List
// pastaClams.save()
// lamb.save()
// steamedSalmon.save()
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


// Chang.save()
// Peter.save()
// Jack.save()
// Lucy.save()
