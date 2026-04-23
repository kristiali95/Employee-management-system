const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employee.routes');
const departamentRoutes = require('./routes/department.routes');

app.use(express.json());

app.get('/',(req, res, next)=>{
    res.send('<h1>Welcome to entry page </h1>');
});

app.use('/employees',employeeRoutes);
app.use('/departaments',departamentRoutes)


module.exports = app;