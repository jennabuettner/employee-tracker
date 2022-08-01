const inquirer = require('inquirer')
const Department = require("./resources/department")
const Employee = require("./resources/employee")
const Role = require("./resources/role")
const fs = require('fs')
const renderTeam = require('./')


module.exports = { Department, Employee, Role };
