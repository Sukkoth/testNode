const app = require('./api/index');
app.listen(process.env.APP_PORT || 7000, () =>
    console.log(`Server running on port ${process.env.APP_PORT || 7000}`)
);
