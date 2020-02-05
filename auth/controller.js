const DoctorModule = require('./model');
const jwt = require('jsonwebtoken');
const express = require('express')

const app = express()

let Signup = (req, res) => {
    console.log('CHal gai')
    // mock user
    let user = {
        id: 1,
        name: 'Ubaid',
        email: 'ubaid@gmail.com'
    }

    jwt.sign({
        user
    }, 'secretkey', (err, token) => {
        res.json({
            token
        })
    })
    // const newUser = new DoctorModule({username: 'Ubaid', email: 'abc@gmail.com', password: '123455'});
    // newUser
    //     .save()
    //     .then(success => {
    //         console.log('Data : ', success);
    //         res.send({status: true, data: success})
    //     })
    //     .catch(err => res.send({status: false, data: err }));
}

let Home = (req, res) => {
    verifyToken(req, res)
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created...',
                authData
            });
        }
    });
}

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
let verifyToken = (req, res, next) => {
    console.warn('abc')
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    console.warn('abc 1')

    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}
module.exports = {
    Signup,
    Home
}