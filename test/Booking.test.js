const chai = require("chai");
const expect = chai.expect;

var Booking = require("../models/Booking");

describe("Allows us to create a booking with a start date and end date",function(){
    
    it("creates a booking with a start date and end data",function(){
        let booking = new Booking(new Date("2018-09-01"), new Date("2018-09-05"));
        let startDate = booking.startDate;
        let endDate = booking.endDate;
        expect(startDate).to.eql(new Date("2018-09-01"));
        expect(endDate).to.eql(new Date("2018-09-05"));
    })

    it("it returns the number of days for the holiday",function(){
        let booking = new Booking(new Date("2018-09-01"), new Date("2018-09-05"));
        let result = booking.numberOfDays();
        expect(result).to.equal(4);
    })

})

describe("Authorisations of the bookings",function(){
   
    let booking = new Booking(new Date("2018-09-01"), new Date("2018-09-05"));
    booking.authorize("Damien",new Date("2018-08-16"));

    it("check if booking has been authorized",function(){
        let isAuthorized = booking.isAuthorized();
        expect(isAuthorized).to.equal(true);
    })

    it("checks who authorized the booking",function(){
        let isAuthorizedBy = booking.authorizedBy(); 
        expect(isAuthorizedBy).to.eql("Damien");
    })

    it("checks booking authorizedDate",function(){
        let authorizedDate = booking.authorizedOn();
        expect(authorizedDate).to.eql(new Date("2018-08-16"));
    })
    
})

