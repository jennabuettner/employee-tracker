INSERT INTO department (name)
VALUES
('Finance and Accounting'),
('Sales and Marketing'),
('Operations Management'),
('Human Resources'),
('IT');

INSERT INTO role (title, salary, department)
VALUES
('Financial Analyst', 75000, 1)
('Accountant', 55000, 1)
('Marketing Manager', 120000, 2)
('Sales officer', 70000, 2)
('Operations Manager', 110000, 3)
('Project Manager', 100000, 3)
('Chief Human Resources Officer', 140000, 4)
('Recruiter', 85000, 4)
('Full Stack Developer', 130000, 5)
('Software Engineer', 110000, 5);

INSERT INTO employee (firstname, lastname, role, manager)
VALUES
('Peter', 'Pot', 1, NULL)
('Chanz', 'Holo', 2, 1)
('Minerva', 'Mouse', 3, NULL)
('Dee', 'Bugger', 4, 3)
('Elle', 'Leven', 5, NULL)
('Daria', 'Spark', 6, 5)
('Tobias', 'Henderson', 7, NULL)
('Brock', 'Ovana', 8, 7)
('Rue', 'Hadley', 9, NULL)
('Yu', 'Da', 10, 9)