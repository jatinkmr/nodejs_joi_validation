const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', require('./Routes'))

// error handler
app.use(function (err, req, res, next) {
    return res.status(500).send({
        error: true,
        errMessage: err
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`)
})
