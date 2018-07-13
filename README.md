#Zenca Holdiday Booking Application

The Zenca Holdiday Booking Application would ideally be used by companies that need an electronic based holiday booking system for their employees. 
This application would allow for employees to be craeted and added to a database and to be able to create bookings which can be authorized by managers. Employees can alsocheck how many days they have booked off and their current holiday allownace, they can also check their future bookings and past bookings.

##Prerequisites ---> none
##DEPENDENCIES** ---> this application does not need any external dependices to operate

##HOW TO CREATE AN EMPLOYEE ---> new Employee(payrollNo,name,email,holidayAllowance)

###EMPLOYEE CONSTRUCTOR TAKES 4 ARGUMENTS ---> listed below

**payrollNo** ---> type:string<br>
**name** ---> type:string<br>
**payrollNo** ---> type:string<br>
**email** ---> type:string<br>
**holidayAllowance** ---> type:integer<br>

##EMPLOYEE INTERFACE

**makeBooking(startDate,endDate)** ---> dates have to be in format e.g 2018-09-02 this being 2nd of September 2018<br>
**daysRemaining()** ---> returns current holiday allownace<br>
**daysBooked()** ---> returns the number of days booked<br>
**daysBookedAndAutorized()** ---> returns the number of days booked that have been authorized<br>
**futureBookings()** ---> returns a list of your future bookings<br>
**pastBookings()** ---> returns a list of your past bookings<br>


####################################################################################################################################
####################################################################################################################################
####################################################################################################################################

##EMPLOYEESTORE ---> allows for the storing of employees into a database

##EMPLOYEESTORE INTERFACE

**EmployeeStore.save(employee)** ---> takes an employee object and saves it into a database<br>
**EmployeeStore.load()** ---> returns an array of all the employees saved into the database<br>


####################################################################################################################################
####################################################################################################################################
####################################################################################################################################



##Built With

NODE.js (JavaScript)


##Authors

Paul Oladele [**MyGitHub**](https://github.com/PaulElcampeon)