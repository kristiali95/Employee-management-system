const employeesData = require('../data/employees');
const prisma = require('../utils/prisma');

exports.findAll =async function() {
    return await prisma.employee.findMany();
}

exports.findById =async function(id) {
   return await prisma.employee.findUnique({
        where: {
            id
        }
   });
};

exports.create =async function(employee) {
   return await prisma.employee.create({
        data: {
            name: employee.name,
            age: employee.age,
            email: employee.email,
            departmentId: employee.departmentId   
        }
   });
}

exports.update =async function (id, employeeData) {
    return await prisma.employee.update({
        where: {
           id: id
        },
        data :{
            name: employeeData.name,
            age: employeeData.age,
            email: employeeData.email,
            departmentId: employeeData.departmentId
        }
    });
}

exports.delete = async function(id) {
  return await prisma.employee.delete({
    where: {
        id:id
    }
  })
}

exports.findEmployeesByDepartmentId = async function(departmentId) {
    return await prisma.employee.findMany({
        where: {
            departmentId: departmentId
        }
    })
}
