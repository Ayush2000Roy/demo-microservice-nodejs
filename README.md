# Demo Microservice with NodeJs
A demo microservice that finds distance between two ZIP codes using ZIPCodeAPI api. [Source](https://nodesource.com/blog/microservices-in-nodejs/)

 ## Creating Microservices with Node.js
 Creating a microservice using Node.js which connects to an external API. The requirement for this service is to accept two Zip Codes, **preferably US & Canada** (due to the nature of the api), and return the distance between them in kms.
 
### Initial Steps
1. Have **Node.js** installed
2. Run `npm init` in the root folder for the project. This will create a package.json file that will prompt some questions about the package, if you are not sure how to answer you can use the default.
3. We are going to use two packages, **Express** and **Require** that can be installed like this:
`npm install express request --save`

### Creating a Server to Accept Requests
Create a file in the root folder for your project called *server.js* which will be our primary file. This file is creating our server and assigns routes to process all requests.

### Defining the routes
The next step is to define the routes for the microservices and then assign each to a target in the controller object (that will control the flow of data in the application). We’ll have two endpoints. One endpoint called *“about”* that returns information about the application. And a *“distance”* endpoint that includes two path parameters, both Zip Codes. This endpoint returns the distance, in kms, between these two Zip Codes.

### Adding Controller Logic
Within the controller file, we’re going to create a controller object with two properties. Those properties are the functions to handle the requests we defined in the routes module. We have two distinct parts to our controller.

We define a property called *about*. This property is a function which accepts request and response objects. We’ll only use the response object for this function. Using the name and version information from the package.json file, we’ll build a new object and return it as the response.

For the *getDistance* functionality, we’ll start by bringing in the distance module. We’ll pass the request and response objects to the find function within this module. This function also includes a callback function. This function accepts an error object (err) and a distance object (dist). If there is an error in the response, we return that with our response; otherwise, we send back the results of the find function.

### Making the External Call
This file handles the call to a third-party API. We’ll use the distance API provided by [ZIPCodeAPI](ZipCodeAPI.com). You need an API key to use this, and it is free if you register.

### Execution
Assuming there aren’t any typos, your application should be ready to execute. Open a console window and run the following command:
`npm start`

Assuming it starts correctly, and the port you define is 3000, you can now open your browser and navigate to:
[http://localhost:3000/about](http://localhost:3000/about) when you will see the name of the app and the version.

Now if you add two parameters, the two zip codes, you will see something like this:
[http://localhost:3000/distance/84010/97229](http://localhost:3000/distance/84010/97229)

Using microservices to know the distance between two zip codes!
