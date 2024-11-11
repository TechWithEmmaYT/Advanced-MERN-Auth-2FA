import passport from "passport";
import { setupJwtStrategy } from "../common/strategies/jwt.strategy";

// Passport middleware to initialize and register strategies
const initializePassport = () => {
  setupJwtStrategy(passport);
  passport.initialize();
};

// Initialize Passport when this file is imported
initializePassport();

export default passport;
