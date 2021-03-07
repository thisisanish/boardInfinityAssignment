## Board Infinity Assignment

Hosted on [Heroku](https://secret-escarpment-87881.herokuapp.com/)


`/list ` GET https://secret-escarpment-87881.herokuapp.com/list.

`/add ` POST https://secret-escarpment-87881.herokuapp.com/add

This todo app follows classic pattern of seperating code into routes, controllers and models. 

- app.js - is the starting point.  
- routes (folder) - Contains todo.js which stores relevant routes and connects them with the controller. 
- controlles (folder) - Contains todo.js which contains the main logic when hitting any route and doing any manupulation with the database .  
- models (folder) - Contains todo.js which stores the model of the database and is a bridge between controller and database

To run this app, clone the app and run the following commands on the root of this folder.   

1) Create a file with name `.env` (optional)
2) Paste the Following Line  `MONGO_PASSWORD = rYTfzatAOOqNC1Xl` and save. You can replace my password with your own MongoDB's Password. (optional)
3) Run the Following Commands on a terminal
    ```
    npm i
    node app.js
    ```
4) Vist '`http://localhost:5000/list`' to see the list of task
5) In Postman, visit `'http://localhost:5000/add'` with Method as POST and use the following in the requests Body (raw-JSON) to create a task
   ```
   {
	"taskName":"Task Uno",
	"taskDesc": "A Long Description",
	"creator": "God",
	"duration":5
   }
    ```
      
