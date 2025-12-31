import express from "express"
import busRoutes from "./routes/bus.routes.js"
import userRoutes from "./routes/user.routes.js"
import bookingRoutes from "./routes/booking.routes.js"
import {errorMiddleware} from "./middlewares/error.middleware.js";
import { loginUser } from "./controllers/auth.controller.js";

const app = express()
app.use(express.json());

// Routes
app.use("/api/bus",busRoutes)
app.use("/api/user",userRoutes)
app.use("/api/booking",bookingRoutes)
app.use("/api/loginUser",loginUser)

// Global error handle

app.use(errorMiddleware);

export default app;

