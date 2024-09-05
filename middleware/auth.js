import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export default auth;
