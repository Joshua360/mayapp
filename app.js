const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));


const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards.js');

app.use(mainRoutes);
app.use('/cards', cardRoutes)



const port = proncess.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`App is running on port: ${port}`);
});


//so what do I wanna make? An app with 3 routes: home, hello, cards.