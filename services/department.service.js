const departamentRepository = require('../repositories/department.repository');

exports.findAll = function() {
    return departamentRepository.getAllDepartaments();
}

exports.findById = function(id){
    const department =  departamentRepository.findById(parseInt(id));
    if(!department) {
        throw new Error('Department not found')
    }

    return department;
}

exports.createDepartment = function(departmentData) {
    const {name} = departmentData;

    if (!name) {
        throw new Error('Name field is required');
    }

    const newDepartment = {
        id: Date.now(),
        name
    };

    return departamentRepository.createDepartment(newDepartment);
}

exports.updateDepartment = function(id, departmentData) {
    const department = exports.findById(parseInt(id));

    if(!department ) {
        throw new Error('Department is not found');
    }

    return departamentRepository.updateDepartment(department, departmentData);

}

exports.deleteDepartment = function(id) {
    const deletedDepartment = exports.findById(parseInt(id));

    if(!deletedDepartment ) {
        throw new Error('Department is not found');
    }

    return departamentRepository.delete(parseInt(id));
}