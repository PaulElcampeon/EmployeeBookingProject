const Booking = require("./Booking");

class Employee{
    constructor(payrollNo,name,email,holidayAllowance){
        this.payrollNo = payrollNo;
        this.name = name;
        this.email = email;
        this.holidayAllowance = holidayAllowance;
        this._booking =[];

    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////FUNCTION THAT RETURNS THE BOOKING LIST OF AN EMPLOYEE////////////////////////////////////////////
    get booking(){
        return this._booking;

    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////FUNCTION THAT STOPS A USER FROM INCORRECTLY ASSIGNING A BOOKING//////////////////////////////////
    set booking(stuff){
        throw "sorry you cannot do this"
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////FUNCTION THAT ALLOWS AN EMPLOYEE TO MAKE A BOOKING///////////////////////////////////////////////////
    makeBooking(startDate, endDate){
        this._booking.push(new Booking(new Date(startDate),new Date(endDate)));
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////FUNCTION THAT RETURNS CURRENT HOLIDAY ALLOWANCE////////////////////////////////////////////////
    daysRemaining(){
        for(let booking of this._booking){
            this.holidayAllowance-=booking.numberOfDays();
        }
        return this.holidayAllowance;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////FUNCTION THAT RETURNS THE NUMBER OF DAYS BOOKED BY AN EMPLOYEE////////////////////////////////////////
    daysBooked(){
        let daysBookedOff = 0
        for(let booking of this._booking){
            daysBookedOff+=booking.numberOfDays();
        }
        return daysBookedOff;
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////FUNCTION TO RETURN THE NUMBER OF DAYS AUTHORIZED AND BOOKED////////////////////////////////////////////
    daysBookedAndAutorized(){
        let num = 0;
        this._booking.filter(function(obj){
            if(obj.authorized == true){
                num+=obj.numberOfDays();
            }
        })
        return num;
    }

    //#####################################################################################################################################//
    //#####################################################################################################################################//
    //############## NONE OF THE FUNCTIONS BELOW WILL RETURN A BOOKING IF THE START DATE IS THE SAME AS THE CURRENT DATE ##########//////////
    //#####################################################################################################################################//
    //#####################################################################################################################################//



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////FUNCTION THAT RETURNS A LIST OF FUTURE BOOKINGS RELATIVE TO THE CURRENT DATE EITHER AUTHORIZED (TRUE) OR ALL(FALSE)//////////
    futureBookings(status){
        if(status == undefined || status == false || status!=true){
            let futureBooks = this._booking.filter(function(obj){
                if(obj.startDate > new Date()){
                    return obj;
                }
            })
            return futureBooks;
        }else if(status == true){
            let futureBooks = this._booking.filter(function(obj){
                if(obj.startDate > new Date() && obj.authorized == true){
                    return obj;
                }
            })
            return futureBooks;
        }
    }
    

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////FUNCTION THAT RETURNS A LIST OF PAST BOOKINGS RELATIVE TO THE CURRENT DATE EITHER AUTHORIZED (TRUE) OR ALL(FALSE)//////////
    pastBookings(status){
        if(status == undefined || status == false){
            let pastBooks = this._booking.filter(function(obj){
                if(obj.startDate < new Date()){
                    return obj;
                }
            })
            return pastBooks;
        }else if(status == true){
            let pastBooks = this._booking.filter(function(obj){
                if(obj.startDate < new Date() && obj.authorized == true){
                    return obj;
                }
            })
            return pastBooks;
        }
    }
}







module.exports = Employee