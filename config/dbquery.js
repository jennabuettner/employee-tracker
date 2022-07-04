const db = require('./connection');
const dbConnection = require('../server');
const allTables = ('console.table');

addEmployee(employee) {
    const sql = `INSERT INTO employees(firstname, lastname, role) VALUES (?, ?, ?);`;
    db.query(sql, (params), (err,data) => {
        console.log(table)
    })
}

function displayDept() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (params), (err,data) => {
        if (err) {
            console.error(err);
        } else {
            console.log('\n');
            console.table(data);
            console.log('\n');
        }
        console.log('-------------------------')
        mainSplash();
    });
}


function displayEmployees() {
    const sql = `SELECT employee.id, 
    employee.first_name AS First, employee.last_name AS Last, 
    role.title AS Title, 
    role.salary AS Salary, 
    department.name AS Department, 
    CONCAT(manager.first_name, '', manager.last_name) AS Manager 
    FROM employee employee 
    LEFT JOIN employee manager 
    ON employee.manager_id = manager.id, 
    JOIN department 
    ON role.department_id = department.id, 
    JOIN role ON employee.role_id = role.id;`;
    db.query(sql, (params), (err,data) => {
        if (err) {
            console.error(err);
        } else {
            console.log('\n');
            console.table(data);
            console.log('\n');
        }
        console.log('-------------------------')
        mainSplash();
    });
}

function displayRoles() {
    const sql = `SELECT 
    role.title,
    role.id,
    role.salary,
    department.name
    FROM role
    LEFT JOIN department
    ON role.department_id = department.id;`;
    db.query(sql, function (err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log('\n');
            console.table(data);
            console.log('\n');
        }
        console.log('~~~~~~~~~~~~~~~~~~~~~~');
        mainSplash();
    });
}

    mainSplash()