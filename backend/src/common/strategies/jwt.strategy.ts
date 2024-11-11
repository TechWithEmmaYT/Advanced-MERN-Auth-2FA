import passport, { PassportStatic } from "passport";
import {
  Strategy as JwtStrategy,
  ExtractJwt,
  //StrategyOptions,
  StrategyOptionsWithRequest,
} from "passport-jwt";
import { config } from "../../config/app.config";
import AuthService from "../../modules/auth/auth.service";
import { UnauthorizedException } from "../utils/catch-errors";

interface JwtPayload {
  userId: string;
  sessionId: string;
}

const options: StrategyOptionsWithRequest = {
  jwtFromRequest: ExtractJwt.fromExtractors([
    (req) => req.cookies.accessToken || null, // Extract accessToken from cookie
  ]),
  secretOrKey: config.JWT.SECRET,
  audience: ["user"],
  algorithms: ["HS256"],
  passReqToCallback: true,
};

export const setupJwtStrategy = (passport: PassportStatic) => {
  passport.use(
    new JwtStrategy(options, async (req, payload: JwtPayload, done) => {
      try {
        const authService = new AuthService();
        const user = await authService.findUserById(payload.userId);

        req.sessionId = payload.sessionId;
        return done(null, user);
      } catch (error) {
        const exception = new UnauthorizedException("User not authorized");
        return done(exception, false);
      }
    })
  );
};

export const authenticateJWT = passport.authenticate("jwt", { session: false });
