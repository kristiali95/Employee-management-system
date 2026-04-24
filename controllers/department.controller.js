const departamentsService = require('../services/department.service')

exports.getAllDepartaments =async function(req, res) {
    const departaments =await departamentsService.findAll();

    return res.status(200).json(departaments);
};

exports.getDepartmentById = async function(req, res) {
   try {
    const department = await departamentsService.findById(req.params.id);
    return res.status(200).json(department);
   } catch(error) {
    return res.status(404).json({
        message: error.message
    })
   }
};

exports.createDepartment =async function(req, res) {
    try {
        const department = await departamentsService.createDepartment(req.body);
        return res.status(201).json(department);
    } catch(error) {
        return res.status(400).json({
            message: error.message
        });
    }

};

exports.updateDepartment = async function(req, res) {
    try{
        const updatedDepartment = await departamentsService.updateDepartment(req.params.id, req.body);
        return res.status(200).json(updatedDepartment);
    } catch(error) {
        return res.status(404).json({
            message: error.message
        })
    }
};

exports.deleteDepartment =async function(req, res) {
    try{
        const deletedDepartment = await departamentsService.deleteDepartment(req.params.id);
        return res.status(200).json(deletedDepartment);
    } catch(error) {
        return res.status(404).json({
            message: error.message
        })
    }
    
};