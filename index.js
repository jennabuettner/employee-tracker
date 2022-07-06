const { Separator } = require("inquirer");
const inquirer = require("inquirer");
const {
  displayEmployees,
  addEmployee,
  displayDept,
} = require("./config/dbquery");

function init() {
  loadQuestions();
}

departmentArray = [
  "Finance and Accounting",
  "Sales and Marketing",
  "Operations Management",
  "Human Resources",
  "IT",
];

roleArray = [
  "Financial Analays",
  "Accountant",
  "Marketing Manager",
  "Sales Officer",
  "Operations Manager",
  "Project Manager",
  "Chief Human Resources Officer",
  "Recruiter",
  "Full Stack Developer",
  "Software Engineer",
];

employeeArray = [
  "Peter Pot",
  "Chanz Holo",
  "Minerva Mouse",
  "Dee Bugger",
  "Elle Leven",
  "Daria Spark",
  "Tobias Henderson",
  "Brock Ovana",
  "Rue Badley",
  "Yoh Da",
];

function loadQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          "View all departments.",
          "View all roles.",
          "View all employees.",
          "Add a department.",
          "Add a role.",
          "Add an employee",
          "Update employee role.",
          "Exit",
        ],
      },
    ])
    .then(({ choice }) => {
      switch (choice) {
        case choices[0]:
          displayDepartments();
        console.log(choices[0]);
            break;
        // case 

        // default:
        //   break;
      }
    });
}

init();
