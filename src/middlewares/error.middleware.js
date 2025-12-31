import  ApiResponse  from "../utils/ApiResponse.js";

export const errorMiddleware = (err, req, res, next) => {
  // 1️⃣ Log error for debugging
  console.error(err);

  // 2️⃣ Set default status code
  const statusCode = err.statusCode || 500;

  // 3️⃣ Send structured response
  res.status(statusCode).json(
    new ApiResponse(
      statusCode,
      null,
      err.message || "Server Error"
    )
  );

  // 4️⃣ Optional: next middleware chaining
  // next(err); // sirf agar multiple error handlers ho
};
