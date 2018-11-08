
(___TODO__: your project name_)

# Recipe World

## Overview

Recipe World is where people share their own recipe along with pictures. After login/sign up, users can make post and "like" other people's recipe. Every week, top 5 "liked" recipes will be shown. They can also see their "liked" recipes in their profile, allowing user to revisit a specific recipe post. Based on the "tags" created in every post, users can search recipes for related menus.   

## Data Model

The application will store Users, RecipePosts, and Tags

users can have multiple recipe posts
each post can have multiple tags
each post can have multiple likes


An Example User:

```javascript
{
  username: "recipeworld",
  hash: // a password hash,
  likedRecipe: // an array of references to Likes
  myRecipe: //an array of reference to Posts
}
```

An Example List with Embedded Items:

```javascript
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
```


## [Link to Commented First Draft Schema](db.js)

## Wireframes

/user/:id - page for user profile based on id

/recipes - page for showing list of recipe posts

/recipes/:id - page for each recipe based on id

/recipe/create - page for creating recipe post


## Site map


## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create my recipe post
4. as a user, I can view all of my recipe post in my profile
5. as a user, I can like other people's recipe posts
6. as a user, I can delete my recipe post

## Research Topics

* (2 points) Use a Bootstrap for CSS framework throughout your site

  * I will try to learn how to implement Bootstrap into my app.

* (3 points)  Perform client side form validation using custom JavaScript or JavaScript library

  * Errors integrated into DOM

* (4 points) Using React.js

  * I have previously learned React.js and want to use it to solidify the concepts


## [Link to Initial Main Project File](app.js)

## [Link to my React Setup] (recipeworld)

## Annotations / References Used

1. [tutorial on React.js](https://reactjs.org/docs/getting-started.html)
2. [tutorial on bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
