import { User } from "../models/user.model.js";

export function getUserByEmail(request) {
  return User.findOne({ email: request.body.email });
}

export function getUserById(requestID) {
  return User.findById(requestID).select("_id username email");
}


