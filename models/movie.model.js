import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    yearOfRelease: {
      type: String,
      required: true,
    },
    plot: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      default:
        "https://e7.pngegg.com/pngimages/229/405/png-clipart-art-film-clapperboard-cinema-movie-theatre-miscellaneous-text-thumbnail.png",
    },
    director: {
      type: String,
      required: true,
    },
    producer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cast",
    },
    actors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cast",
      },
    ],
  },
  { timestamps: true }
);

const Movie = new mongoose.model("movie", movieSchema);

export { Movie };
