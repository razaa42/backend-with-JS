// import app from "./app.js";

// //server port 

// const PORT= process.env.PORT || 3000;
// // server start

// app.listen(PORT,()=>{
//     console.log(`server is running ${PORT}`)
// });

import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

// Correct property name: path (lowercase)
dotenv.config({
    path: "./.env",
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error("Database connection error:", error);
});
