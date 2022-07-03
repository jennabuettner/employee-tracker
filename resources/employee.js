class Employee {
  constructor(firstname, lastname, role, manager) {
    this.first_name = firstname;
    this.last_name = lastname;
    this.role_id = role;
    this.manager_id = manager;
  }
}

module.exports = Employee;
