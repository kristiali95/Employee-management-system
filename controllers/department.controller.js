const departamentsService = require('../services/department.service')

exports.getAllDepartaments = function(req, res) {
    const departaments = departamentsService.findAll();

    return res.status(200).json(departaments);
}

exports.getdepartmentById = function(req, res) {
    const department = departamentsService.findById(req.params.id);

    return res.status(200).json(department);
}

exports.createDepartment = function(req, res) {
    const department = departamentsService.createDepartment(req.body);

    return res.status(201).json(department);

}

exports.updateDepartment = function(req, res) {
    const updatedDepartment = departamentsService.updateDepartment(req.params.id, req.body);

    return res.status(200).json(updatedDepartment);
}

exports.deleteDepartment = function(req, res) {
    const deletedDepartment = departamentsService.deleteDepartment(req.params.id);

    return res.status(200).json(deletedDepartment);
}