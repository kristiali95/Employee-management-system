const employeeService = require('../services/employee.service');

exports.getAllEmployees = async function(req, res){
    try {
        const employees = await employeeService.getAllEmployees();
        return res.status(200).json(employees);
    } catch(error) {
        res.status(404).json({
            message: error.message
        })
    }
    
}

exports.getEmployeeById = async function(req, res) {
   try {
    const employee = await employeeService.findEmployeeById(req.params.id);
    return res.status(200).json(employee);

   } catch(error) {
        res.status(404).json({
            message: error.message
        })
   }  
};

exports.createEmployee = async function (req, res) {
  try {
    const newEmployee = await employeeService.createEmployee(req.body);
    return res.status(201).json(newEmployee);

  } catch(error) {
    res.status(404).json({
        message: error.message
    })
  }
};

exports.updateEmployee = async function(req, res) {
    try {
        const employee = await employeeService.updateEmployee(req.params.id, req.body);
        return res.status(200).json(employee);
    } catch(error) {
        res.status(404).json({
            message: error.message
        })
    }
}

exports.deleteEmployee = async function(req , res) {
    try {
        await employeeService.deleteEmployee(req.params.id);
        return res.status(200).json({
            message: "Employee deleted successfully"
        });
    } catch(error) {
        res.status(404).json({
            message: error.message
        })
    }
}
