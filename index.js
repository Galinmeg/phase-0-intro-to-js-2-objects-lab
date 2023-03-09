const employee = {} ;
employee;
employee.name = 'Sam'
employee.streetAddress = '11 Broadway';


function updateEmployeeWithKeyAndValue(employee, name, streetAddress)  {
   const newEmployee = {...employee};
   newEmployee[name] = streetAddress;
   return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress
    return employee 
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {employee};
    delete newEmployee.streetAddress;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}





