const departamentRepository = require('../repositories/department.repository');

exports.findAll = async function() {
    return await departamentRepository.getAllDepartaments();
}

exports.findById = async function(id){
    const department = await departamentRepository.findById(parseInt(id));
    if(!department) {
        throw new Error('Department not found')
    }

    return department;
}

exports.createDepartment =async function(departmentData) {
    const {name} = departmentData;

     if (!name || !name.trim()) {
        throw new Error('Department name is required');
    }

    const newDepartment = {
        name: name.trim()
    };

    return await departamentRepository.createDepartment(newDepartment);
}

exports.updateDepartment = async function(id, departmentData) {
   const parsedId = parseInt(id);

   const { name } = departmentData;

   if (!name || !name.trim()) {
        throw new Error('Department name is required');
    }

    await exports.findById(parsedId);

    return await departamentRepository.updateDepartment(parsedId, {name: name.trim()});

}

exports.deleteDepartment =async function(id) {
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
        throw new Error('Invalid department id');
    }

    await exports.findById(parsedId);

    return await departamentRepository.delete(parsedId);
}