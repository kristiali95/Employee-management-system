const express = require('express');
const departamentController = require('../controllers/department.controller')

const router = express.Router();

router.get('/', departamentController.getAllDepartaments);
router.get('/:id',departamentController.getDepartmentById);
router.post('/',departamentController.createDepartment)
router.put('/:id', departamentController.updateDepartment);
router.delete('/:id', departamentController.deleteDepartment);


module.exports = router;