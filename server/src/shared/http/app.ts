import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

import { AppError } from "../errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

const testNotes: any = [];

app.get("/api/notes", (req, res) => {
  res.json(testNotes);
});

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }
    console.log(error);
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
