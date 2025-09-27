// // // server.js
// // import dotenv from "dotenv";
// // dotenv.config();

// // import express from "express";
// // import cors from "cors";
// // import cookieParser from "cookie-parser";

// // import connectDb from "./db/connection1.js";
// // import { app, server } from "./socket/socket.js";

// // //Database connection
// // connectDb();

// // // ✅ CORS configuration
// // const allowedOrigins = [];

// // if (process.env.CLIENT_URL) {
// //   allowedOrigins.push(process.env.CLIENT_URL);
// // }

// // // In development, allow localhost ports automatically
// // if (process.env.NODE_ENV !== "production") {
// //   allowedOrigins.push("http://localhost:5173");
// // }

// // app.use(
// //   cors({
// //     origin: function (origin, callback) {
// //       if (!origin) return callback(null, true);

// //       if (allowedOrigins.includes(origin)) {
// //         return callback(null, true);
// //       } else {
// //         return callback(new Error("Not allowed by CORS"));
// //       }
// //     },
// //     credentials: true,
// //   })
// // );

// // //Middleware
// // app.use(express.json());
// // app.use(cookieParser());

// // //Routes
// // import userRoute from "./routes/userRoute.js";
// // import messageRoute from "./routes/messageRoute.js";
// // app.use("/api/v1/users", userRoute);
// // app.use("/api/v1/message", messageRoute);

// // //Error Middleware
// // import { errorMiddlware } from "./middlewares/errorMiddlware.js";
// // app.use(errorMiddlware);

// // //Test route
// // app.get("/", (req, res) => {
// //   res.send("Hello, World!");
// // });

// // //Start Server
// // const PORT = process.env.PORT || 5111;
// // server.listen(PORT, "0.0.0.0", () => {
// //   console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
// //   console.log(`✅ Allowed Origins:`, allowedOrigins);
// // });

// // // server.js
// // import dotenv from "dotenv";
// // dotenv.config();

// // import express from "express";
// // import cors from "cors";
// // import cookieParser from "cookie-parser";

// // import connectDb from "./db/connection1.js";
// // import { app, server } from "./socket/socket.js";

// // // ✅ Database connection
// // connectDb();

// // // ✅ CORS configuration
// // const allowedOrigins = [];

// // if (process.env.CLIENT_URL) {
// //   allowedOrigins.push(process.env.CLIENT_URL);
// // }

// // // In development, allow localhost for Vite/React
// // if (process.env.NODE_ENV !== "production") {
// //   allowedOrigins.push("http://localhost:5173");
// // }

// // app.use(
// //   cors({
// //     origin: (origin, callback) => {
// //       if (!origin) return callback(null, true); // allow tools like Postman

// //       if (allowedOrigins.some((o) => origin.startsWith(o))) {
// //         callback(null, true);
// //       } else {
// //         callback(null, false); // block but don’t crash
// //       }
// //     },
// //     credentials: true,
// //   })
// // );

// // // ✅ Middleware
// // app.use(express.json());
// // app.use(cookieParser());

// // // ✅ Routes
// // import userRoute from "./routes/userRoute.js";
// // import messageRoute from "./routes/messageRoute.js";
// // app.use("/api/v1/users", userRoute);
// // app.use("/api/v1/message", messageRoute);

// // // ✅ Error Middleware
// // import { errorMiddlware } from "./middlewares/errorMiddlware.js";
// // app.use(errorMiddlware);

// // // ✅ Test route
// // app.get("/", (req, res) => {
// //   res.send("Hello, World!");
// // });

// // // ✅ Start Server
// // const PORT = process.env.PORT || 5111;
// // server.listen(PORT, "0.0.0.0", () => {
// //   console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
// //   if (process.env.NODE_ENV !== "production") {
// //     console.log("✅ Allowed Origins:", allowedOrigins);
// //   }
// // });

// // server.js
// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// import connectDb from "./db/connection1.js";
// import { app, server } from "./socket/socket.js";

// // ✅ Database connection
// connectDb();

// // ✅ CORS configuration
// const allowedOrigins = [];

// // Production frontend
// if (process.env.CLIENT_URL) {
//   allowedOrigins.push(process.env.CLIENT_URL);
// }

// // Allow only localhost:5173 for development
// allowedOrigins.push("http://localhost:5173");

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) return callback(null, true); // allow Postman/curl
//       if (allowedOrigins.some((o) => origin.startsWith(o))) {
//         callback(null, true);
//       } else {
//         callback(null, false); // block others
//       }
//     },
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // allow preflight
//   })
// );

// // Handle preflight requests for all routes
// app.options("*", cors());

// // ✅ Middleware
// app.use(express.json());
// app.use(cookieParser());

// // ✅ Routes
// import userRoute from "./routes/userRoute.js";
// import messageRoute from "./routes/messageRoute.js";
// app.use("/api/v1/users", userRoute);
// app.use("/api/v1/message", messageRoute);

// // ✅ Error Middleware
// import { errorMiddlware } from "./middlewares/errorMiddlware.js";
// app.use(errorMiddlware);

// // ✅ Test route
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 5111;
// server.listen(PORT, "0.0.0.0", () => {
//   console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
//   if (process.env.NODE_ENV !== "production") {
//     console.log("✅ Allowed Origins:", allowedOrigins);
//   }
// });

// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

// -------- Serve Frontend (React/Vite Build) --------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the frontend build
app.use(express.static(path.join(__dirname, "client", "dist")));

// Catch-all: send index.html for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
