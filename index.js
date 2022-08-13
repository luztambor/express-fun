//adding express
import express from "express";

//initializing express
const app = express();

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

//listen on port
app.listen(3000, () => console.log('Server running at http://localhost:3000'));