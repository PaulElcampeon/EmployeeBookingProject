const chai = require("chai");
const expect= chai.expect;

var Employee = require("../models/Employee");
const EmployeeStore = require("../models/EmployeeStore");

describe("functions for saving and loading data",function(){
    
    it("saves and loads data into the database",function(){
        let employee1 = new Employee("www","ed","ed@gmail.com",25);
        EmployeeStore.save(employee1)//saving data into database
        let result = EmployeeStore.load().length
        expect(result).to.equal(1)
    });

})



