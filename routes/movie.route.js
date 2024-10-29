import express from "express";
import {
  deleteMovie,
  getAllMovies,
  postNewMovie,
  updateMovie,
} from "../controllers/movie.controller.js";

const router = express.Router();

// Get All Movies
router.get("/all", async (req, res) => {
  try {
    const movies = await getAllMovies();
    if (!movies) {
      return res.status(404).json({ error: "No Content Available." });
    }
    res.status(200).json({ data: movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Create New Movie
router.post("/create", async (req, res) => {
  try {
    const newMovie = await postNewMovie(req);
    if (!newMovie) {
      return res
        .status(400)
        .json({ error: "Error occurred while saving the data." });
    }
    res.status(200).json({ data: newMovie, message: "New Movie Added..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Update Movie Data
router.put("/edit/:id", async (req, res) => {
  try {
    const updatedMovie = await updateMovie(req);
    if (!updatedMovie) {
      return res
        .status(400)
        .json({ error: "Error occurred while updating the data." });
    }
    res.status(200).json({
      data: updatedMovie,
      message: "Movie Updated...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedMovie = await deleteMovie(req);
    if (!deletedMovie) {
      return res
        .status(400)
        .json({ error: "Error occurred while deleting the data." });
    }
    res.status(200).json({
      message: "Movie Data Deleted...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

export const movieRouter = router;
