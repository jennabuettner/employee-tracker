const db = require('./connection');
const dbConnection = require('..');
const allTables = ('console.table');

export function addEmployee(employee) {
    const sql = `INSERT INTO employees(firstname, lastname, role) VALUES (?, ?, ?);`;
    db.query(sql, (params), (err,data) => {
        console.log(table)
    })
}

export function displayDept() {
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


export function displayEmployees() {
    const sql = `SELECT * FROM employees`;
    db.query(sql,  (err,data) => {
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