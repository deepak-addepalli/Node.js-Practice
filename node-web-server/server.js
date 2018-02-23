const express = require('express');
const hbs = require('hbs');
var app = express();
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs'); // To set HBS as view engine and Express takes file from Views folder

app.use(express.static(__dirname + '/public')); // __dirname points to the current directory we are working in, to that we concatenate /public path.
// Its the relative path that we set for our html page to render.

app.use((req,res,next) => {
  var now = new Date().toString();
  console.log(now);
  next();
});

// Express Middleware

app.use((req,res,next) => {
  res.render('maintainance.hbs');

});

app.get('/',(req, res) => {
  res.render('home.hbs', {
    pageTitle : 'Header Title',
    welcomeMessage: 'Hi! Welcome to my Website',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req,res) => {
  res.render('about.hbs', {
    pageTitle : 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req,res) => {
  res.send({
    errorMessage: 'Unable to process the request'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
}); //listening port
