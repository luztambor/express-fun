import express from "express";
//import the router
import Router from "./routes/routes.js";

//initializing express
const app = express();

// use router instead
app.use(Router);

// NO LONGER NEEDED BECAUSE OF routes.js
/*
//home route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

//about route
app.get('/about', (req, res) => {
    res.send('about page');
});

//store route
app.get('/shop', (req, res) => {
    res.send('Buy products here');
});
*/

//listen on port
app.listen(3000, () => console.log('Server running at http://localhost:3000'));