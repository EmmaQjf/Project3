# Chinese Learning API
Welcome to the Victorian Vintage Shop MERN App! This full-stack web application is designed to provide users with a delightful shopping experience for Victorian-style clothing and accessories. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this application offers a seamless interface for browsing and purchasing vintage clothing items inspired by the Victorian era.

## Table of content  
- [**Getting Started**](#getting-started)
   - [**Installing**](#installing)
   - [**Start the app**](#steps)
- [**Database**](#database)
   - [**User routes Table**](#user-routes-table)
   - [**Word routes Table**](#word-routes-table)
   - [**Label routes Table**](#label-routes-table)
   - [**Wordset routes Table**](#wordset-routes-table)
- [**User Story**](#user-story)
 
  
  
## Getting Started 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Installing

1. copy the url
2. Open Terminal and change the current working directory to the location where you want the cloned directory.
3. clone the repo to the local directory: `git clone git@github.com:EmmaQjf/Chinese-learning-4models.git`
4. cd into the clone directionary.
5. Open the code in VS `code .`  
6. Install all the packages: express, mongoose, dotenv, nodemon, bcrypt, jsonwebtoken, mongodb-memory-server,morgan, jest, supertest:  `npm i`
7. Create a file .env and put in your MONGO_URI and SECRET
8. Config the seed file:  `node config/seed`
   
   
## Steps

**Install Gulp Globally**
```bash
npm i -g gulp-cli
```

**Start the dev server**
```bash
npm run dev
```
### or
```bash
yarn dev
```

**Start the dev server with proxy**
```bash
npm run proxy
```

**Build files for production**
```bash
yarn build
```
### or

```bash
npm run build
```

**Deploy for production script**
```bash
npm start
```
### or
```bash
yarn start
```
### [:arrow_up: Back to Top](#table-of-content)

### <a name="dev-mode"></a>Start the app in the dev mode 
`npm run dev`

### <a name="no-dev-mode"></a>Start the app without dev mode 
`npm run start`

### [:arrow_up: Back to Top](#table-of-content)

## Database
### User routes table
| method | url | purpose  & token | 
| :---         |     :---:      |          ---: |
| post | /api/users/login | login in user , no token|
| post | /api/users | create a user, no token |


### Category routes table
| method | url | purpose & token |
| :---         |     :---:      |          ---: |
| get | /api/categories | show all the categories & token needed |
| get | /api/categories/:name | show a catetory info & token needed |

### Item routes table
| method | url | purpose & token |
| :---         |     :---:      |          ---: |
| get | /api/items | show all items, token needed |
| get | /api/items/:id | show an item info, token needed|
|

### Order routes table
| method | url | purpose & token |
| :---         |     :---:      |          ---: |
| get | /api/orders/cart | show the cart, token needed |
| get | /api/orders/cart/history | show all the paid orders, token needed |
| post | /api/orders/cart/items/:id | Add an item to the cart, token needed|
| post | /api/orders/cart/checkout| Update the cart's isPaid property to true, token needed |
| put | /api/orders/cart/qty' | Updates an item's qty in the cart, token needed|
### [:arrow_up: Back to Top](#table-of-content)


## USER STORY

+ As a user, I can land on a page when I can clicks at the login or sign up buttons and be navigated to a page where I can log in or sign up.
+ As a user, I should be able to land on a page and see a category bar and be navigated to a page where I see a list of clothes in the selected category.
+ As a user, I should be able to click a button and be navigated to a page where I see a detailed information about the cloth.
+ As a user, I should be able to  click a button and check out all the cloth in my cart. 
+ As a user, I should be able to click a link to navigate to a page where I see a list of my order history.
+ As a user, I should be able to click on the cart icon and see a detailed info about the items in the cart. 

### [:arrow_up: Back to Top](#table-of-content)
