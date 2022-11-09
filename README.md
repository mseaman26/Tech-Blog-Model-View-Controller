
  ## Description

This application is a website for posting blogs.  A user can create a username and password to gain access to the full functionality.  Once the user is logged in, they can view posts, comment on posts, create their own posts, and delete a post that they've created. Posts and comments are displayed with the creator's username along with the date that they were created.

  [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)


  ## Link to a Demo Video of the Application
  https://youtu.be/2LzritDXc4I

  ## Table of Contents

 
  * [Technologies Used](#technologies-used)
  * [Notable Features](#notable-features)
  * [Notable Methods](#notable-methods)
  * [Code Snippets](#code-snippets)
  * [Installation](#installation)<br />
  * [Contributing to This Repository](#how-to-contribute-to-this-repository)<br />
  * [Tests](#to-run-tests-run-the-following-command)<br />
  * [Questions](#questions)<br />

  ## Technologies Used
  - Sequelize
  - Handlebars
  - Connect Session Sequelize
  - Javascript
  - Node.JS
  - Express.JS
  - Insomnia (for testing routes)
  - Dotenv
  - Express 
  - Nodemon
  ## Notable Features
  - Creates and retains user data
  - protects parts of the application from being accessed by users who are not logged in
  - Data models that have relationships with one another, allowing for intended functionality
  - Web page and it's contents are dynamically generated through Handlebars
  - 

  ## Notable Methods
  - This application followed the MVC structure.  It includes abundant modularization of routes, models, view files, front-end JS files, and more
  - Creating Sequelize data models that have relationships with others
  - creating many RESTful routes
  - Dynamically web pages with Handlebars and the associated helper functions

 ## Code Snippets
    Here are our Sequelize associations.  They are vital when it comes to building the behavior of the data tables
```javascript
    // Products belongsTo Category
Product.belongsTo(Category, {foreignKey: "category_id", onDelete: 'CASCADE'});
// Categories have many Products
Category.hasMany(Product, {foreignKey: "category_id"});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag, foreignKey: "product_id",});
// // Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag, foreignKey: "tag_id"});
```
Here is an example of a route.  This particular route is for update a tag, referencing it by its ID number
```javascript
    router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = Tag.update({
      tag_name: req.body.tag_name
    },
    {
      where:{
        id: req.params.id
      }
    })
    res.status(200).json({message: "tag has been updated!"})
  }
  catch (err){
    res.status(400).json(err)
  }
});
```
 ## Installation

   To install this program, navigate to the root folder of the project in your terminal.  Then run the command: npm init, followed by the command: npm install. Then navigate into the "db" folder and sign into mysql shell with the command: mysql -u root -p.  Then, load the database, run the command: source schema.sql. Then navigate back to the root folder and enter the command: npm run seed. Now that the database is seeded with data, run the command: node server.js.  Once the server is up and running, interact with the routes using the program Insomnia

    
  ## How to Contribute to This Repository:

    Contact me via email (see below)
    
  ## To run tests, run the following command:

    no tests required

    
  ## Questions
  If you have any questions about this project, feel free to reach out to me at:
  <a href="MSeaman26@gmail.com">MSeaman26@gmail.com</a>.  
  To see more of my work, please visit:
  <a href="https://github.com/MSeaman26">My Github Page</a>






