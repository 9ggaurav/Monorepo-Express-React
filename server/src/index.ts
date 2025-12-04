import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send({ message: "WELCOME!!!" });
});

app.listen(process.env.PORT, () => {
  console.log(`server running on http://localhost:3000`);
});
