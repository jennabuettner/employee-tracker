const { Separator } = require("inquirer");
const inquirer = require("inquirer");
const {
  displayEmployees,
  addEmployee,
  displayDepts,
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
          displayDepts();
        console.log(choices[0]);
            break;

        case choices[1]:
          displayRoles();
          console.log(choices[1]);
            break;

        case choices[2]:
          displayEmployees();
          console.log(choices[2]);
            break;

        case choices[3]:
          addDept();
          console.log(choices[3]);
            break;

        case choices[5]:
          addRole();
          console.log(choices[5]);
            break;

        case choices[6]:
          addEmployee();
          console.log(choices[6]);
            break;

        case choices[7]:
          updateEmployee();
          console.log(choices[7]);
            break;

          case choices[8]:
          exit();
          console.log('Thanks!');
            break;
   
  

        // case 

        // default:
        //   break;
      }
    });
    // .prompt([
    //   {
    //     type: "list",
    //     name: "choice",
    //     message: Who 
    //   }
    // ])
}

init();
