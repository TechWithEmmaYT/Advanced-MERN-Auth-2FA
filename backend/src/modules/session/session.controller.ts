import { z } from "zod";
import { Response, Request } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler";
import { HTTPSTATUS } from "../../config/http.config";
import SessionService from "./session.service";

class SessionController {
  private sessionService: SessionService;

  constructor() {
    this.sessionService = new SessionService();
  }

  public getAllSession = asyncHandler(
    async (req: Request, res: Response): Promise<any> => {
      const userId = req.user?.id;
      const sessionId = req.sessionId;
      const { sessions } = await this.sessionService.getAllSession(userId);

      const modifySessions = sessions.map((session) => ({
        ...session.toObject(),
        ...(session.id === sessionId && {
          isCurrent: true,
        }),
      }));

      return res.status(HTTPSTATUS.OK).json({
        message: "Retrieved all session successfully",
        sessions: modifySessions,
      });
    }
  );

  public deleteSession = asyncHandler(
    async (req: Request, res: Response): Promise<any> => {
      const sessionId = z.string().parse(req.params.id);
      const userId = req.user?.id;
      await this.sessionService.deleteSession(sessionId, userId);

      return res.status(HTTPSTATUS.OK).json({
        message: "Session remove successfully",
      });
    }
  );
}

export const sessionController = new SessionController();
