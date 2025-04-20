import { app, server } from "./socket/socket.js";
import express from "express";
import connectDb from "./db/connection1.js"; // ✅ Correct import
import cookieParser from "cookie-parser";
import cors from "cors";

// Connect to Database
connectDb();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  })
);
const PORT = 5111;

// Middleware
app.use(express.json());
app.use(cookieParser()); // ✅ Added cookie parser middleware

// Routes
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
app.use("/api/v1/users", userRoute);
app.use("/api/v1/message", messageRoute);

//middleware
import { errorMiddlware } from "./middlewares/errorMiddlware.js";
app.use(errorMiddlware); // ✅ Added error middleware

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
