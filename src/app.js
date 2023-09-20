const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('test');
});

app.post('/api/message', (req, res) => {
    console.log(req.body);
    return res.json({
        message: 'recieved',
        name: req.body,
    });
});

module.exports = app;
