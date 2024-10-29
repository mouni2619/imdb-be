import { Cast } from "../models/cast.model.js";

export function getActors() {
  return Cast.find({ professionalType: "Actor" });
}

export function getProducers() {
  return Cast.find({ professionalType: "Producer" });
}

export function postNewCast(req) {
  return new Cast({ ...req.body }).save();
}

export function updateCast(req) {
  return Cast.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
}

export function deleteCast(req) {
  return Cast.findOneAndDelete({ _id: req.params.id });
}
