const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const CORS = require('cors');

const app = express();
const PORT = process.env.port || 4000;

// connect db
require('./dbConnection');

app.use(CORS());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser())

// get model
let authModule = require('./auth/router');

app.get('/', (req, res) => {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
})
app.use('/api', authModule)
// routes 

// server connection
app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
})