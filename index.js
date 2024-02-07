// Write your solution in this file!
const employee ={
    name: "Fletcher Stone",
    streetAddress: "123 Main street"
        
}
//saving copy to a variable to reuse
function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value
    return employee
  }
//when we use dot notation- it has to be specific
  function deleteFromEmployeeByKey(employee,key){
        const newObj={...employee}
        delete newObj[key]
    return newObj
  }

  function destructivelyDeleteFromEmployeeByKey(employee,key){
    console.log("This is the employee object",employee)
    console.log("This is the key:", key)
        delete employee[key]
        return employee
  }
 
