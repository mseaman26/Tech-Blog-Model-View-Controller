
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
   Here is an example of a route.  This one renders a single post, followed by its associated comments
   ```javascript
//view single post 
router.get('/post/:id', withAuth, async (req, res) => {
    const dbPost = await Post.findByPk(req.params.id,{
        include: [{
            model: User
        }]
    })
    req.session.post_id = req.params.id
    const post = dbPost.get({ plain: true })
    const dbPostComments = await Comment.findAll({
        where: {
            post_id: req.session.post_id,
        },
        include: [{
            model: User
        }]
    })
    const postComments = dbPostComments.map((post) => 
            post.get({ plain: true }))
    res.render('post', {
        post: post,
        postComments: postComments
    })
})
   ```
Here we have a section of Handlebars code.  This section utilizes a helper function to dynamically render the current user's posts within the dashboard
```javascript
{{#each myPosts as |post|}}
<a href="/posts/edit/{{post.id}}" class="post-card">
  <section class="custom-post-card" id="{{id}}">
        <h1>{{post.title}}</h1>
        <p>{{post.body}}</p>
        <p>{{format_date createdAt}}</p>
        <a href="/posts/edit/{{id}}" class="custom-small-button">
        <button type="button" class="btn btn-success edit-post-button">Edit Post</button>
        </a>
        <a href="#" class="custom-small-button"></a>
        <button type="button" class="btn btn-danger delete-post-button" id={{post.id}}>Delete Post</button>
    </section>
</a>
{{/each}}
<script src="/js/delete-post.js"></script>
```

    
  ## How to Contribute to This Repository:

    Contact me via email (see below)
    
  ## To run tests, run the following command:

    no tests required

    
  ## Questions
  If you have any questions about this project, feel free to reach out to me at:
  <a href="MSeaman26@gmail.com">MSeaman26@gmail.com</a>.  
  To see more of my work, please visit:
  <a href="https://github.com/MSeaman26">My Github Page</a>






