import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
dotenv.config();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
