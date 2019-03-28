const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create employee Schema + Model

const EmployeeSchema = new Schema({
        
    employeeID: { 
        type: String,
        required: [true, 'Employee ID field is required']
    },
    name: {
        type: String,
    },
    department: {
        type: String
    },
    
    });

const Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee;

