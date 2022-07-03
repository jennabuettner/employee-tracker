DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    id: INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name: VARCHAR(30)
)

CREATE TABLE role (
    id: INT PRIMARY KEY AUTO_INCREMENT PRIMARY KEY,
    title: VARCHAR(30),
    salary: DECIMAL,
    departmend_id: INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id),
    ON DELETE SET NULL,
)

CREATE TABLE employee (
    id: INT PRIMARY KEY AUTO_INCREMENT PRIMARY KEY,
    first_name: VARCHAR(30),
    last_name: VARCHAR(30),
    role_id: INT NOT NULL
    manager_id: INT NOT NULL
    CONSTRAINT (fk_manager),
    FOREIGN KEY (manager_id)
    REFERENCES (employee_id),
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    ON DELETE SET NULL
)