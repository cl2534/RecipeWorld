# cl2534-final-project

Recipe World

Overview

Recipe World is where people share their own recipe along with pictures. After login/sign up, users can make post and "like" other people's recipe. Every week, top 5 "liked" recipes will be shown. They can also see their "liked" recipes in their profile, allowing user to revisit a specific recipe post. Based on the "tags" created in every post, users can search recipes for related menus.   


Data Model

The application will store Users, RecipePosts, and Tags

users can have multiple recipe posts
each post can have multiple tags
each post can have multiple likes



An Example User:

{
  username: "recipeworld",
  hash: // a password hash,
  likedRecipe: // an array of references to Likes
  posts: //an array of reference to Posts
}


An Example List with Embedded Items:

{
  user: // a reference to a User object
  name: "Breakfast foods",
  likedRecipe: [
    { name: "pancakes", recipeId: 1},
    { name: "ramen", recipeId: 2},
  ],
  myRecipe: [
    { name: "pancakes", recipeId: 1},
    { name: "ramen", recipeId: 2},
  ],
  createdAt: // timestamp
}


[Link to Commented First Draft Schema] (https://github.com/nyu-csci-ua-0480-001-003-fall-2018/cl2534-final-project/blob/master/db.js)


Wireframes
(TODO: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/user/:id - page for user profile based on id

/recipes - page for showing list of recipe posts

/recipes/:id - page for each recipe based on id

/recipe/create - page for creating recipe post

Site map
(TODO: draw out a site map that shows how pages are related to each other)

User Stories or Use Cases
(TODO: write out how your application will be used through user stories and / or use cases)

as non-registered user, I can register a new account with the site
as a user, I can log in to the site
as a user, I can create my recipe post
as a user, I can view all of my recipe post in my profile
as a user, I can like other people's recipe posts
as a user, I can delete my recipe post

Research Topics

(2 points) Use a Bootstrap for CSS framework throughout your site

  I will try to learn how to implement Bootstrap into my app.

(3 points)  Perform client side form validation using custom JavaScript or JavaScript library

  Errors integrated into DOM

(4 points) Using React.js

  I have previously learned React.js and want to use it to solidify the concepts


Link to Initial Main Project File
(TODO: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js)

Annotations / References Used
(TODO: list any tutorials/references/etc. that you've based your code off of)

[tutorial on React.js] (https://www.youtube.com/watch?reload=9&v=MhkGQAoc7bc)
