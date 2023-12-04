const express = require('express');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');


// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));


//Static files
app.use(express.static('public'))
app.use('css', express.static(__dirname + 'public/css'));
app.use('scripts', express.static(__dirname + 'public/scripts'));
app.use('assets', express.static(__dirname + 'public/assets'));



//Setup routes

const homeRouter = require('./routes/home');
const mealsRouter = require('./routes/meals');
const newsRouter = require('./routes/news');
const aboutRouter = require('./routes/about');



app.use('/', homeRouter);
app.use('/meals', mealsRouter);
app.use('/news', newsRouter);
app.use('/about', aboutRouter);




app.listen(port, ()=>{
    console.log(`listening on port localhost ${port}`);
});