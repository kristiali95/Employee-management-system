const departamentData = require('../data/departaments');

exports.getAllDepartaments = function() {
    return departamentData;
};

exports.findById = function(id) {
    const department = departamentData.find(department => department.id === id);
    return department;
};

exports.createDepartment = function(department) {
    departamentData.push(department);

    return department;
}

exports.updateDepartment = function(department, departmentData) {
    department.name = departmentData.name;

    return department;
}

exports.delete = function(id) {
    const departmentIndex = departamentData.findIndex(department => department.id === id);
    const deletedDepartment = departamentData[departmentIndex];

    departamentData.splice(departmentIndex, 1);

    return deletedDepartment;

}