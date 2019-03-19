# Friend-Finder
A simple tool that helps you find friends with common interests.

# Built With:

* Express
* Node
* Bootstrap
* Hosted on Heroku
![Friend-Finder](https://friend-finder-mario.herokuapp.com/)

## Introduction
 This project focuses on working with setting up API routes to retrieve and append data to a simple JSON file.

## Challenges
One of the challenges I overcame during the implementation of this project was forgetting to setup the 'app.use(express.urlencoded({ extended: true }) middleware.  This consumed about 40 mins of my time.  I kept getting 'null' or undefine objects when trying to append to the JSON file.
