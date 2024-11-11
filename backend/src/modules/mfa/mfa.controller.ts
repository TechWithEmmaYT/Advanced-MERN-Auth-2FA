import { Response, Request } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler";
import { HTTPSTATUS } from "../../config/http.config";
import { UnauthorizedException } from "../../common/utils/catch-errors";
import MfaService from "./mfa.service";

class MfaController {
  private mfaService: MfaService;

  constructor() {
    this.mfaService = new MfaService();
  }

  public getCurrentUser = asyncHandler(
    async (req: Request, res: Response): Promise<any> => {
      const user = req?.user;
      if (!user) {
        throw new UnauthorizedException("User not found");
      }
      return res.status(HTTPSTATUS.OK).json({
        message: "Retrieve user successfully",
        data: {
          user,
        },
      });
    }
  );
}

export const mfaController = new MfaController();
