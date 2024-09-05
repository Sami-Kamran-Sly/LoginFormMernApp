// Import necessary modules and dependencies
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Import custom modules
import connectDB from "./db/connect.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authRoutes from "./routes/authRoute.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// Determine __dirname for ESM compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize the express app
const app = express();

// Use CORS middleware
app.use(cors());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, "/client/dist")));

// Use JSON middleware to parse incoming requests
app.use(express.json());

// Define API routes
app.use("/api/v1/auth", authRoutes);

// Serve the index.html file for any other routes (for SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});

// Use custom middleware for handling 404 and other errors
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Determine the port
const port = process.env.PORT || 5000;

// Start the server and connect to the database
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

// Start the application
start();
