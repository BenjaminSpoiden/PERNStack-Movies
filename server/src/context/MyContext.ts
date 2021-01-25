import { Request, Response } from "express"
import session, { Session } from "express-session"
import { createGenreLoader } from "src/utils/MovieLoader"

declare global {
    namespace Express {
        interface Request {
            session: Session & Partial<session.SessionData>
        }
    }
    
}

export interface MyContext {
    req: Request 
    res: Response,
    genreLoader: ReturnType<typeof createGenreLoader>
}