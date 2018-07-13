const Employee = require("./models/Employee");
const EmployeeStore = require("./models/EmployeeStore");
const Booking = require("./models/Booking");



var employee1 = new Employee("Sax","dan","red@gmail.com",25);

employee1.makeBooking(new Date("2018-9-5"), new Date("2018-9-11"));

var boo = employee1.booking;
boo[0].authorize("Mr Gants", new Date("2018-07-13"));


console.log(boo[0].isAuthorized());
console.log(boo[0].authorizedBy());
console.log(boo[0].authorizedOn());






const repl = require("repl").start({

    useColors:true,
    terminal:true
})

repl.context.Employee = Employee;
repl.context.EmployeeStore = EmployeeStore;
repl.context.Booking = Booking;
