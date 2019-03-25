const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Employee = require('../models/timesheet');

// set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/employeedb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//add new employee in db
app.post('/employee', function(req, res){
    Employee.create(req.body);
    res.send({type: 'POST',
            employeeID: req.body.employeeID,
            name: req.body.name,
            department: req.body.department
    });

});

//retrieve emp data
app.get('/empinfo', function(req, res){
    res.send({type: 'POST'});
    console.log(req);
});

//clock in
app.post('/clockin', function(req, res){
    res.send({type: 'POST'});
    console.log(req);
});

//clock out 
app.post('/clockout', function(req, res){
    res.send({type: 'POST'});
    console.log(req);
});

app.listen(process.env.port || 8080, function(){
    console.log('now listening for requests');
});