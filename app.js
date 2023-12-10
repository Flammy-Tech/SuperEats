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
const credentialsRouter = require('./routes/credentials');
const mealsRouter = require('./routes/meals');
const newsRouter = require('./routes/news');
const aboutRouter = require('./routes/about');
const errorRouter = require('./routes/error');
const recoverRouter = require('./routes/recover');



app.use('/', homeRouter);
app.use('/credentials', credentialsRouter);
app.use('/meals', mealsRouter);
app.use('/news', newsRouter);
app.use('/about', aboutRouter);
app.use('/error', errorRouter);
app.use('/recover', recoverRouter);




app.listen(port, () => {
    console.log(`
        \x1b[35m╔═══════════════════════════════════════════════════════╗
        ║               Server is running!                      ║
        ║               listening on port localhost ${port}        ║
        ║                                                       ║
        ║   Available Routes:                                   ║
        ║   - Home                                              ║
        ║   - Meals                                             ║
        ║   - News                                              ║
        ║   - About                                             ║
        ║   - Privacy                                           ║
        ║                                                       ║
        ╚═══════════════════════════════════════════════════════╝\x1b[0m
    `);
});
