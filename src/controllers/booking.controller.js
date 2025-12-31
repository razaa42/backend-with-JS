import Booking from "../models/Booking.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// ✅ Create booking
export const createBooking = asyncHandler(async (req, res) => {
  const { userId, busId, seatNumber, date } = req.body;

  if (!userId || !busId || !seatNumber || !date) {
    throw new ApiError(400, "All fields are required");
  }

  // ✅ Check if seat is already booked
  const existingBooking = await Booking.findOne({ busId, seatNumber, date });
  if (existingBooking) {
    throw new ApiError(400, "Seat already booked for this bus on this date");
  }

  // ✅ Create booking
  const booking = await Booking.create({ userId, busId, seatNumber, date });

  // ✅ Populate references after creation
  const populateBooking = await Booking.findById(booking._id).populate([
    { path: "userId", select: "fullName email" },
    { path: "busId", select: "busNumber from to totalSeats" }
  ]);

  res
    .status(201)
    .json(new ApiResponse(201, populateBooking, "Seat booked successfully"));
});

// ✅ Get all bookings
export const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find().populate([
    { path: "userId", select: "fullName email" },
    { path: "busId", select: "busNumber from to totalSeats" }
  ]);

  res
    .status(200)
    .json(new ApiResponse(200, bookings, "Bookings fetched successfully"));
});
