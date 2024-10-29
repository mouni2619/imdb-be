import express from "express";
import {
  deleteCast,
  getActors,
  getProducers,
  postNewCast,
  updateCast,
} from "../controllers/cast.controller.js";

const router = express.Router();

// Get All Actors
router.get("/actors", async (req, res) => {
  try {
    const actors = await getActors();
    if (!actors) {
      return res.status(404).json({ error: "No Content Available." });
    }
    res.status(200).json({ data: actors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Get All Producers
router.get("/producers", async (req, res) => {
  try {
    const producers = await getProducers();
    if (!producers) {
      return res.status(404).json({ error: "No Content Available." });
    }
    res.status(200).json({ data: producers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Create New Cast
router.post("/create", async (req, res) => {
  try {
    const newCast = await postNewCast(req);
    console.log(req.body);
    if (!newCast) {
      return res
        .status(400)
        .json({ error: "Error occurred while saving the data." });
    }
    res.status(200).json({ data: newCast, message: "New Cast Added..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Update the Cast Data
router.put("/edit/:id", async (req, res) => {
  try {
    const updatedCast = await updateCast(req);
    if (!updatedCast) {
      return res
        .status(400)
        .json({ error: "Error occurred while updating the data." });
    }
    res.status(200).json({
      data: updatedCast,
      message: "Cast Updated...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

// Delete Cast
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedCast = await deleteCast(req);
    if (!deletedCast) {
      return res
        .status(400)
        .json({ error: "Error occurred while deleting the data." });
    }
    res.status(200).json({
      message: "Cast Data Deleted...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

export const castRouter = router;
