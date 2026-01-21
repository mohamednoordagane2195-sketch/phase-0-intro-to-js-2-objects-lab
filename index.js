
// employee object required by the tests
const employee = {
  name: "John",
  age: 30,
  role: "Developer"
};

// NON-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}
// Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
// NON-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
}
// Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
