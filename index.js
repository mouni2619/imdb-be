import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dataBaseConnection } from "./db.js";
import { userRouter } from "./routes/user.route.js";
import { castRouter } from "./routes/cast.route.js";
import { movieRouter } from "./routes/movie.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Connecting the Database
dataBaseConnection();

// Sanity Check
app.get("/", (req, res) => {
  res.send("Hello World for IMDB Clone");
});

app.use("/user", userRouter);
app.use("/cast", castRouter);
app.use("/movie", movieRouter);

app.listen(PORT, () => console.log(`Server listening at PORT => ${PORT}`));
