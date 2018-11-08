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


Link to Commented First Draft Schema


Wireframes
(TODO: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/list/create - page for creating a new shopping list

list create

/list - page for showing all shopping lists

list

/list/slug - page for showing specific shopping list

list

Site map
(TODO: draw out a site map that shows how pages are related to each other)

Here's a complex example from wikipedia, but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

User Stories or Use Cases
(TODO: write out how your application will be used through user stories and / or use cases)

as non-registered user, I can register a new account with the site
as a user, I can log in to the site
as a user, I can create my recipe post
as a user, I can view all of my recipe post in my profile
as a user, I can like other people's recipe posts
as a user, I can delete my recipe post

Research Topics
(TODO: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

(5 points) Perform client side form validation using a JavaScript library

(5 points) Using React.js



(4 points) Perform client side form validation using a JavaScript library
see cs.nyu.edu/~jversoza/ait-final/my-form
if you put in a number that's greater than 5, an error message will appear in the dom
(5 points) vue.js
used vue.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points
10 points total out of 8 required points (TODO: addtional points will not count for extra credit)

Link to Initial Main Project File
(TODO: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js)

Annotations / References Used
(TODO: list any tutorials/references/etc. that you've based your code off of)

passport.js authentication docs - (add link to source code that was based on this)
tutorial on vue.js - (add link to source code that was based on this)
