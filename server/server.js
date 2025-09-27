// // server.js
// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// import connectDb from "./db/connection1.js";
// import { app, server } from "./socket/socket.js";

// //Database connection
// connectDb();

// // ✅ CORS configuration
// const allowedOrigins = [];

// if (process.env.CLIENT_URL) {
//   allowedOrigins.push(process.env.CLIENT_URL);
// }

// // In development, allow localhost ports automatically
// if (process.env.NODE_ENV !== "production") {
//   allowedOrigins.push("http://localhost:5173");
// }

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       } else {
//         return callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

// //Middleware
// app.use(express.json());
// app.use(cookieParser());

// //Routes
// import userRoute from "./routes/userRoute.js";
// import messageRoute from "./routes/messageRoute.js";
// app.use("/api/v1/users", userRoute);
// app.use("/api/v1/message", messageRoute);

// //Error Middleware
// import { errorMiddlware } from "./middlewares/errorMiddlware.js";
// app.use(errorMiddlware);

// //Test route
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// //Start Server
// const PORT = process.env.PORT || 5111;
// server.listen(PORT, "0.0.0.0", () => {
//   console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
//   console.log(`✅ Allowed Origins:`, allowedOrigins);
// });

// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from "./db/connection1.js";
import { app, server } from "./socket/socket.js";

// ✅ Database connection
connectDb();

// ✅ CORS configuration
const allowedOrigins = [];

if (process.env.CLIENT_URL) {
  allowedOrigins.push(process.env.CLIENT_URL);
}

// In development, allow localhost for Vite/React
if (process.env.NODE_ENV !== "production") {
  allowedOrigins.push("http://localhost:5173");
}

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow tools like Postman

      if (allowedOrigins.some((o) => origin.startsWith(o))) {
        callback(null, true);
      } else {
        callback(null, false); // block but don’t crash
      }
    },
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
app.use("/api/v1/users", userRoute);
app.use("/api/v1/message", messageRoute);

// ✅ Error Middleware
import { errorMiddlware } from "./middlewares/errorMiddlware.js";
app.use(errorMiddlware);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// ✅ Start Server
const PORT = process.env.PORT || 5111;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  if (process.env.NODE_ENV !== "production") {
    console.log("✅ Allowed Origins:", allowedOrigins);
  }
});
