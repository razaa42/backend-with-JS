PORT= 8000
MONGODB_URI=mongodb+srv://<password>@cluster0.myra7gd.mongodb.net
JWT_SECRET=ali_bus_booking_testing_secret_2025_nodejs

.env file content above
api postman hit

http://localhost:8000/api/user/signup
http://localhost:8000/api/loginUser/login
http://localhost:8000/api/bus  > for create bus  seat
http://localhost:8000/api/booking  for seat booking
post api above all
http://localhost:8000/api/booking > for get bookings get route


# Bus Booking API

## Description
A Node.js + Express + MongoDB project to manage bus bookings.

## Installation

```bash
git clone https://github.com/yourusername/bus-booking.git
cd bus-booking
npm install
