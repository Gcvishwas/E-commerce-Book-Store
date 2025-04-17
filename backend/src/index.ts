import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db";
import bookRoutes from "./routes/book";
import orderRoutes from "./routes/order";
import userRoutes from "./routes/user";
import adminRoutes from "./admin/admin";
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
const corsOptions = {
  origin: ["http://localhost:5173", "https://readit-lime.vercel.app"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
