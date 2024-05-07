import { auth } from "express-oauth2-jwt-bearer";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

// If you want to add custome properties to the Express Request object, you need to extend the Express namespace
declare global {
  namespace Express {
    interface Request {
      auth0Id: string;
      userId: string;
    }
  }
}

// This is a function we get from our OAuth0 package that connects to our OAuth0 service based on our credentials we used when we created the account. It validates the job token and checks if it has indeed come from our OAuth0 server.
export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

export const jwtParse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer")) {
    return res.sendStatus(401);
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.decode(token) as jwt.JwtPayload;
    const auth0Id = decoded.sub;

    const user = await User.findOne({ auth0Id });

    if (!user) {
      return res.sendStatus(401);
    }

    req.auth0Id = auth0Id as string;
    req.userId = user._id.toString();
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};
