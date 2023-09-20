const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
    });
});

app.get('/test', (req, res) => {
    res.render('test');
});

app.post('/message', (req, res) => {
    console.log(req.body);
    return res.json({
        message: 'recieved',
        name: req.body,
    });
});

app.listen(process.env.APP_PORT || 7000, () =>
    console.log(`Server running on port ${process.env.APP_PORT || 7000}`)
);
