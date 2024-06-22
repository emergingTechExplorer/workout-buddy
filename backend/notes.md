To install nodemon globally, do "npm install -g nodemon"

API Endpoints = routes
we will interact with database using API

GET /workouts           --> Gets all the workout documents
POST /workouts          --> Creates a new workout document
GET /workouts/:id       --> Gets a single workout document
DELETE /workouts/:id    --> Deletes a single workout
PATCH /workouts/:id     --> Updates a single workout

Mongoose is an ODM (Object Data Modelling) library. It wraps mongodb with an extra layer which allows us to use methods to read and write database documents. It also gives us a way to declare models and schemas to ensure a more strict data structure. For example you can make a schema for a blog document which says every blog must have a title, body and all the other properties and it must all be strings as well. Mongoose will also be used to connect to the database inside server.js.

A model will apply a schema for a particular model and then we use the model to interact with a collection of that name. Such as we use Workout model to interact with the Workouts collection. Example: Workout.find() will find all of the workouts within the Workouts collection.