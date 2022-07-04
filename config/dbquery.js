const db = require('');
const dbConnection = require('../server');
const allTables = ('console.table')

function queries() {
    function displayDept() {
        const sql = `SELECT * FROM departments;`;
        db.query(sql, (params), (err,data) => {
            console.table(table)
        })
    };

    function displayEmployees() {
        const sql = `SELECT * FROM employees;`;
        db.query(sql, (params), (err,data) => {
            console.table(table)
        })
    };

    function displayRoles() {
        const sql = `SELECT * FROM role;`;
        db.query(sql, (params), (err,data) => {
            console.log(table)
        }) 
    };

    addEmployee(employee) {
        const sql = `INSERT INTO employees(firstname, lastname, role) VALUES (?, ?, ?);`;
        db.query(sql, (params), (err,data) => {
            console.log(table)
        })
    };
};