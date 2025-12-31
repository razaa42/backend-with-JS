import jwt from "jsonwebtoken";
import ApiError  from "../utils/ApiError.js";

export const authMiddleware = (req, res, next) => {

  // 1️⃣ Header se Authorization read karo
  const authHeader = req.header("Authorization");

  // 2️⃣ Agar header hi nahi mila
  if (!authHeader) {
    return next(new ApiError(401, "Authorization header missing"));
  }

  // 3️⃣ "Bearer TOKEN" se sirf token nikalo
  const token = authHeader.replace("Bearer  ", "");

  // 4️⃣ Token missing case
  if (!token) {
    return next(new ApiError(401, "Unauthorized"));
  }

  try {
    // 5️⃣ Token verify karo
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 6️⃣ Decoded user info request mein attach
    req.user = decoded;

    // 7️⃣ Next middleware / controller
    next();

  } catch (error) {
    // 8️⃣ Invalid / expired token
    return next(new ApiError(401, "Invalid token"));
  }
};
