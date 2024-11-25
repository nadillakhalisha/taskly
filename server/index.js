import express from "express";
import "dotenv/config";
import { db } from "./config/db.js";
import userRouter from "./routes/user.route.js";
//import the router
import authrouter from "./router/auth.route.js";

//create the route
app.use("/api/v1/auth", authrouter);

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`); // Fixed template literal syntax
  next();
});

// Routes
app.use("/api/v1/users", userRouter);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello world",
  });
});

// 404 handler - should be last route
app.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started, listening on port ${PORT}`);
});
