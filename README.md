# My Vegan Kitchen
![MVK](/images/MVKHomepage.png)

*By Owen Beckles - [Visit My Vegan Kitchen](https://myvegankitchen.herokuapp.com/)*

**Table of Content**
* [Welcome to My Vegan Kitchen](#welcome-to-my-vegan-kitchen)
* [Technologies Used](#technologies-used)
* [MVP Feature List](#mvp-feature-list)
* [Dark Mode](#dark-mode)
* [Application Architecture](#application-architecture)
* [Database Schema](#database-schema)
* [Frontend Overview](#frontend-overview)
* [Backend Overview](#backend-overview)
* [Future Features](#future-features)

## Welcome to My Vegan Kitchen
My Vegan Kitchen is a full-stack social web application that allow users to browse through a plethora of vegan recipes catered just for their palette. Users are also able to read and share knowledgable blog posts, and comment their opinions on their favorite recipe.

## Technologies Used
* Frontend
    * Javascript
    * React.js
    * Redux.js
    * Tailwind CSS
* Backend
    * Python
    * Flask
    * SQLAlchemy
    * Docker
    * Heroku Deployment

## MVP Feature List
* User Authentification
    * Sign Up
        
        Users have the ability to sign up for an account by inputing the requested credentials.
        
        ![SigningUp](/images/MVKSigningUp.gif)
    * Login
         
         Users have the ability to login to the application by entering the information they used upon account sign up.
         
        ![Login](/images/MVKLoggingIn.gif)
    * Demo User

         If users want to access the site without creating an account first, they have the option of entering as a demo user.
         
        ![Demo User](/images/MVKDemoExample.gif)
* Comment on Recipes
    * Creating Comment
      
      Authenticated users have the ability to create anonymous comments under the recipe of their choosing.
      
      ![CreateComment](/images/MVKComments.gif)
    * Delete Comment

        Authenticated users can choose to delete the comment that they've created.
         
        ![CommentDelete](/images/MVKDeleteComments.gif)
    * Edit Comment

        Authenticated users can edit any comment that they've posted.

        ![CommentEdit](/images/MVKEditComment.gif)
* Blog Posts
    * Creating Blog Posts

         Authenticated users have the ability to create blog posts that can be read by other users.
         
         ![Creating](/images/MVKCreating.gif)
    * Deleting Blog Posts

         Authenticated users can delete any blog post that they've created.

         ![Deleting](/images/MVKDeleting.gif)
* User Settings

Authenticated users can edit the username and/or email associated with their account.

![Settings](/images/MVKSettings.gif)

## Dark Mode

   ![Dark](/images/DarkMode.png)

   ![One](/images/MVKDM1.gif)
   
   ![Two](/images/MVKDM2.gif)

## Application Architecture

### Database Schema
   
   ![DB](/images/MVKDatabaseSchema.png)

### Frontend Overview

My Vegan Kitchen's frontend was crafted utilizing a React.js / Redux.js data flow. I used Tailwind CSS to style the components and layout. I also used Material UI to render the switch used to change the theme from light mode to dark mode.

### Backend Overview

My Vegan Kitchen's backend framework was structured using Python/Flask. I arranged my database using SQLAlchemy.

## Future Features
* My Kitchen

"My Kitchen" is a feature that will allow the user to save their favorite recipes. Users will be able to navigate to a "My Kitchen" tab that will have these recipes stored and organized so that they can reference them in the future.
   
   * Google Maps API
    
      "My Kitchen" will also utilize Google Maps API so that users will be able to save the location of their favorite vegan spots in the area. If the user goes out        and finds a vegan restaurant that they like, they can come to the site after and pin that location on their personalized Google map.

* Added Blog Post Features

I plan to use AWS (Amazon Web Services) to allow users to add a picture of their choice to the plog posts that they create. 

* More Customizable User Settings

In this future installment, users will have more data to edit and customize other than just their username and email. I will also incoporate AWS to allow users to have a profile picture associated with their account. This profile picture will be present next to each comment they create.
