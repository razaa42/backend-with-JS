import mongoose from "mongoose";

// 1️⃣ Booking Schema
const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    busId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bus",
      required: true
    },

    seatNumber: {
      type: Number,
      required: true
    },

    date: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// 2️⃣ COMPOUND UNIQUE INDEX (⬅️ YAHAN ADD HOGA)
bookingSchema.index(
  { busId: 1, seatNumber: 1, date: 1 },
  { unique: true }
);

// 3️⃣ Model creation
const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
