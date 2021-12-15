# Backend
This directory contains our backend server, a node application with expressJS as http framework.

## Code Structure
**controllers** \
The folder *controllers* contains all the application logic. 
Controllers contain functions, which implement the business logic that 
should be executed by an API call. The functions are called from the 
routes. Error handling is also done in the controllers.

**models** \
The folder *models* contains everything connected to our database. 
We define schemas and models in here, which are used in the 
application to access the database. We are utilizing the JavaScript
framework *mongoose* to simplify database access and request handling.

**routes** \
The folder *routes* contains the definition of all API endpoints of
our application and call controller functions to execute application
logic.

**index.js** \
The file *index.js* is the entrypoint of our application. The express
app is started, middleware is defined and added, and routes are added
to the application.

## Installation
After cloning the repository to your local development environment,
run ```npm install``` in the */server* directory to install all 
dependencies specified in *package.json*. After the dependencies are 
installed, run ```npm start``` to start the application. The server
will run on localhost:5555.

## API Endpoints
Our application will have several API endpoints that are used to
get, create, modify and delete objects. Here is a list of all 
endpoints the application will have, once our project is completed:

### /items

#### GET /items
This endpoint returns a list of all items.

#### POST /items/create
This endpoint accepts a new item in the form of ```{"name":"Pizza"}```
in the request body and adds it to the database.

#### GET /items/:id
This endpoint returns a single item, defined by its id as a url
parameter.

#### DELETE /items/:id
This endpoint removes an item from the database, defined by its id 
as a url parameter.

### /lists
#### GET /lists
This endpoint returns a list of all shopping lists.

#### POST /lists/create
This endpoint accepts a new shopping list in the form of ```{"listName":"Home"}```
in the request body and adds it to the database.

#### GET /lists/:id
This endpoint returns a single list, defined by its id as a url
parameter.

#### PUT /lists/:id
This endpoint accepts an updated list and updates the database. It
is used to add and remove items from the shopping list.

#### DELETE /lists/:id
This endpoint removes a list from the database, defined by its id
as a url parameter.

### /users
#### POST /login
This endpoint accepts a username and password to authenticate a user,
returning a JWT token.

#### POST /signup
This endpoint accepts a username and password to create a new user
and add it to the database.





