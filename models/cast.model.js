import mongoose from "mongoose";

const castSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    professionalType: {
      type: String,
      enum: ["Producer", "Actor"],
      required: true,
    },
  },
  { timestamps: true }
);

const Cast = new mongoose.model("cast", castSchema);

export { Cast };
