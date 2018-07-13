const chai = require("chai");
const expect = chai.expect;

var Employee = require("../models/Employee");
var Booking = require("../models/Booking");

describe("Checks that an Employee object has been created",function(){
    it("checks that an employee has a payrollNo, name, email, holidayAllowance",function(){
        let employee1 = new Employee("E123","joe bloggs","joe@bloggs.com",25);
        let payRollNo = employee1.payrollNo;
        let name = employee1.name;
        let email = employee1.email;
        let holidayAllowance = employee1.holidayAllowance;
        expect(payRollNo).to.eql("E123");
        expect(name).to.eql("joe bloggs");
        expect(email).to.eql("joe@bloggs.com");
        expect(holidayAllowance).to.equal(25);
    })
})

describe("Stops person from changing bookingss",function(){
    it("should throw an error when someone tries to change bookings",function(){
        let employee1 = new Employee("E123","joe bloggs","joe@bloggs.com",25);
        expect(function(){employee1.booking = "nonsense"}).to.throw('sorry you cannot do this');
    })
})

describe("Number of days left",function(){
    
    let employee1 = new Employee("E123","joe bloggs","joe@bloggs.com",25);
    employee1.makeBooking("2018-09-01","2018-09-03");
    employee1.makeBooking("2018-01-01","2018-01-04");

    it("should return the number of days left for holiday allowance",function(){
        let result = employee1.daysRemaining();
        expect(result).to.equal(20);
    })

    it("should return the number of days you have booked",function(){
        let result = employee1.daysBooked();
        expect(result).to.equal(5);
    })

    it("should return the number of days you have booked that have also been authorized",function(){
        employee1.futureBookings()[0].authorize("Damien");
        let result = employee1.daysBookedAndAutorized();
        expect(result).to.equal(2);
    })

    it("should return an array of future bookings",function(){
        employee1.makeBooking("2018-08-10","2018-08-12");
        let result = employee1.futureBookings();
        expect(result[1]).to.eql(new Booking(new Date("2018-08-10"),new Date("2018-08-12")));
    })

    it("should return an array of past bookings",function(){
        let result = employee1.pastBookings();
        expect(result).to.eql([new Booking(new Date("2018-01-01"), new Date("2018-01-04"))]);
    })

    it("should return an array of future bookings that have been authorized",function(){
        let result = employee1.futureBookings(true);
        console.log(result)
        expect(result).to.eql([{startDate:new Date("2018-09-01"), endDate:new Date("2018-09-03"), authorized:true, authorizer: "Damien", authorizedDate: null}]);
    })

    it("should return an array of past bookings that have been authorized",function(){
        employee1.pastBookings()[0].authorize("casper")
        let result = employee1.pastBookings(true);
        expect(result).to.eql([{startDate:new Date("2018-01-01"), endDate:new Date("2018-01-04"), authorized:true, authorizer: "casper", authorizedDate: null}]);
    })
})




