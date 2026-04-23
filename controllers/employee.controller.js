const { json } = require('express');
const employeeService = require('../services/employee.service');

exports.getAllEmployees = function(req, res){
    const employees = employeeService.getAllEmployees();
    res.status(200).json(employees);
    
}

exports.getEmployeeById = function(req, res) {
   const id = parseInt(req.params.id);

   const employee = employeeService.findEmployeeById(id);

   if(!employee){
      return res.status(404).json({
         message: 'Employee not found'
      });
   }

   return res.status(200).json(employee);
};

exports.createEmployee = async function (req, res) {
   const newEmployee = await employeeService.createEmployee(req.body);

    return res.status(201).json(newEmployee);
};

exports.updateEmployee = function(req, res) {
   const employee = employeeService.updateEmployee(req.params.id, req.body);
    return res.status(200).json(employee);
}

exports.deleteEmployee = function(req , res) {
    employeeService.deleteEmployee(req.params.id);

    return res.status(200).json({
        message: "Employee deleted successfully"
    });
}
