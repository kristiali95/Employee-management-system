const employeeRepository = require('../repositories/employee.repository');


exports.getAllEmployees = function() {
    return employeeRepository.findAll();
}

exports.findEmployeeById = function(id){
    return employeeRepository.findById(id);
}

exports.createEmployee = function(employeeData) {
    const {name, age} = employeeData;

    if (!name || !age) {
        throw new Error('Name and age are required');
    }

    const newEmployee = {
        id: Date.now(),
        name,
        age
    };

    return employeeRepository.create(newEmployee);
 
}

exports.updateEmployee = function(id,employeeData) {
    const existingEmployee = exports.findEmployeeById(parseInt(id));

    if (!existingEmployee) {
        throw new Error('This employee doesnt exist')
    }

    return employeeRepository.update(existingEmployee, employeeData);

}

exports.deleteEmployee = function(id) {
    const existingEmployee =  exports.findEmployeeById(parseInt(id));

    if (!existingEmployee) {
        throw new Error('This employee doesnt exist')
    }

    return employeeRepository.delete(parseInt(id));

}