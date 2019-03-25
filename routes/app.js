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

//get a list of employees from db
app.get('/empinfo', function(req, res, next){
    // get a list of all employees from db
    Employee.find({}).then(function(employees){
        res.send(employees);
    });
    console.log(req);
});

//add new employee and save in db
app.post('/employee', function(req, res){
    Employee.create(req.body).then(function(employee){
    res.send(employee);  
    });


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