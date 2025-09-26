// import { app, server } from "./socket/socket.js";
// import express from "express";
// import connectDb from "./db/connection1.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// // Database connection
// connectDb();

// app.use(
//   cors({
//     origin: [process.env.CLIENT_URL],
//     credentials: true,
//   })
// );
// const PORT = process.env.PORT || 5111;

// // Middleware
// app.use(express.json());
// app.use(cookieParser()); // cookie parser middleware

// // Routes
// import userRoute from "./routes/userRoute.js";
// import messageRoute from "./routes/messageRoute.js";
// app.use("/api/v1/users", userRoute);
// app.use("/api/v1/message", messageRoute);

// //middleware
// import { errorMiddlware } from "./middlewares/errorMiddlware.js";
// app.use(errorMiddlware); // middleware

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
// // server.listen(PORT,'0.0.0.0', () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });
// server.listen(PORT, "0.0.0.0", () => {
//   console.log(`Server is running on http://0.0.0.0:${PORT}`);
// });

// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDb from "./db/connection1.js";
import { app, server } from "./socket/socket.js";

// 📌 Database connection
connectDb();

// ✅ CORS configuration
const allowedOrigins = [];

if (process.env.CLIENT_URL) {
  allowedOrigins.push(process.env.CLIENT_URL);
}

// In development, allow localhost ports automatically
if (process.env.NODE_ENV !== "production") {
  allowedOrigins.push("http://localhost:5173");
  allowedOrigins.push("http://localhost:5174");
  allowedOrigins.push("http://localhost:5175");
  allowedOrigins.push("http://localhost:5176");
  allowedOrigins.push("http://localhost:5177");
}

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// 📌 Middleware
app.use(express.json());
app.use(cookieParser());

// 📌 Routes
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
app.use("/api/v1/users", userRoute);
app.use("/api/v1/message", messageRoute);

// 📌 Error Middleware
import { errorMiddlware } from "./middlewares/errorMiddlware.js";
app.use(errorMiddlware);

// 📌 Test route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 📌 Start Server
const PORT = process.env.PORT || 5111;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
  console.log(`✅ Allowed Origins:`, allowedOrigins);
});
