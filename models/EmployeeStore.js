const fs = require("fs");


class EmployeeStore{
    constructor(){

    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////FUNCTION TO SAVE EMPLOYEE TO DATA////////////////////////////////////////////////////////
    static save(employee){
        let tempEmp = employee;
        let employeeJSONFile = fs.readFileSync('../Bookingproject/data/employee.json',"utf-8") 
        var parsedFile = JSON.parse(employeeJSONFile);
        parsedFile.list.push(tempEmp);
        var stringifiedFile = JSON.stringify(parsedFile,null,4);
        fs.writeFileSync('../Bookingproject/data/employee.json', stringifiedFile, "utf-8");
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////FUNCTION TO LOAD EMPLOYEE DATA///////////////////////////////////////////////////////////
    static load(){        
        let object = fs.readFileSync('../Bookingproject/data/employee.json',"utf-8")             
        return JSON.parse(object).list
    }

}





module.exports = EmployeeStore