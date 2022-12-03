const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const hbs = exphbs.create({ helpers });
const app = express();

const PORT = process.env.PORT || 3001;
// const SequelizeBlog = require('connect-session-sequilize')(session.Blog);
// const sess = {
//     secret: 'Super secret secret',
//     cookie: {
//         //stored in milliseconds, expires in 60 seconds 
//         maxAge: 60000
//      },
//      reverse: false,
//      saveUninitialized: true,
//      store: new SequelizeBlog({ 
//         db: sequelize
//      })
// };

// app.use(session(sess));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

