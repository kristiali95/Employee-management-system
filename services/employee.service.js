const employeeRepository = require('../repositories/employee.repository');
const departamentsService = require('../services/department.service')


exports.getAllEmployees = async function() {
    return await employeeRepository.findAll();
}

exports.findEmployeeById = async function(id){
    const employee = await employeeRepository.findById(parseInt(id));

    if(!employee){
        throw new Error('Employee not found');
    };

    return employee;
}

exports.createEmployee =async function(employeeData) {
    const {name, age, email} = employeeData;
    const  departmentId = parseInt(employeeData.departmentId)

    if (isNaN(departmentId)) {
        throw new Error('Valid departmentId is required');
    }

    if (!name || !name.trim()) {
        throw new Error('Name field is required');
    }

    if(!age) {
        throw new Error('Age field is required')
    }


    await departamentsService.findById(departmentId);

    const newEmployee = {
        name: name.trim(),
        age,
        email,
        departmentId
    };

    return await employeeRepository.create(newEmployee);
 
}

exports.updateEmployee = async function(id, employeeData) {
    const { name, age, email } = employeeData;

    const parsedId = parseInt(id);
    const parsedAge = parseInt(age);
    const parsedDepartmentId = parseInt(employeeData.departmentId);

    if (isNaN(parsedId)) {
        throw new Error('Invalid employee id');
    }

    if (!name || !name.trim()) {
        throw new Error('Name field is required');
    }

    if (isNaN(parsedAge)) {
        throw new Error('Valid age is required');
    }

    if (!email || !email.trim()) {
        throw new Error('Email field is required');
    }

    if (isNaN(parsedDepartmentId)) {
        throw new Error('Valid departmentId is required');
    }

    await exports.findEmployeeById(parsedId);
    await departamentsService.findById(parsedDepartmentId);

    const updatedEmployee = {
        name: name.trim(),
        age: parsedAge,
        email: email.trim(),
        departmentId: parsedDepartmentId
    };

    return await employeeRepository.update(parsedId, updatedEmployee);
};

exports.deleteEmployee = async function(id) {
    const existingEmployee = await exports.findEmployeeById(parseInt(id));

    if (!existingEmployee) {
        throw new Error('This employee doesnt exist')
    }

    return await employeeRepository.delete(parseInt(id));

}