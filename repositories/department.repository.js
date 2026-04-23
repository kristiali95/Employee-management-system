const departamentData = require('../data/departaments');
const prisma = require('../utils/prisma');

exports.getAllDepartaments = async function() {
    return await prisma.department.findMany();
};

exports.findById = async function(id) {
    return await prisma.department.findUnique({
        where: {
            id: id
        }
    })
};

exports.createDepartment = async function(department) {
  return await prisma.department.create({
    data:{
        name: department.name,  
    }
  })
}

exports.updateDepartment = async function(id, departmentData) {
    return await prisma.department.update({
        where: {
            id: id
        },
        data: {
            name: departamentData.name
        }
    });
}

exports.delete = async function(id) {
    return await prisma.department.delete({
        where: {
            id: id
        }
    })

}