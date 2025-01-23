import express from "express";
import dotenv from "dotenv";

import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
