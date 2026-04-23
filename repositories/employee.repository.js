const employeesData = require('../data/employees');

exports.findAll = function() {
    return employeesData;
}

exports.findById = function(id) {
    const employee = employeesData.find(emp => emp.id === id);
    return employee;
};

exports.create = function(employee) {
    employeesData.push(employee);
    return employee;
}

exports.update = function (existingEmployee, employeeData) {
     existingEmployee.name = employeeData.name;
     existingEmployee.age = employeeData.age

     return existingEmployee;
}

exports.delete = function(id) {
    const employeeIndex = employeesData.findIndex(employe => employe.id === id);
    employeesData.splice(employeeIndex, 1);

    const deletedEmployee = employeesData[employeeIndex];

    return deletedEmployee;
}
