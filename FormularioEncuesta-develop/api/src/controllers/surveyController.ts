import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "../declarations";
import { Survey } from "../entity/Survey";
export class SurveyController {
    constructor(private repository: DatabaseRepository<Survey>) {}

    async list(
        _req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const surveys = await this.repository.list()
                res.status(200).send(surveys)    
            } catch (error) {
                next(error)
            }
    };

    async create(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
              const { gender, livesWith, city, commune, punctuation, occupation } = req.body
              
              if(!gender || 
                 !city || 
                 !commune || 
                 !punctuation || 
                 !livesWith ||
                 !occupation
                 ) {
                     res.status(404).json({msg: "Faltan datos para completar la encuesta"})
                } else {
                  const isArray = typeof livesWith === "object" ? true : false
                    if(!isArray || livesWith.length === undefined) {
                        res.status(404).json({msg: `La columna livesWith deberia ser un dato tipo array y es del tipo ${typeof livesWith}`})
                    } else {
                        const newSurvey = await this.repository.create(req.body)
                        res.status(200).json({msg: "Creacion correcta", newSurvey})
                    }
                }
            } catch (error) {
                next(error)
            }
    };

    async get(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const surveyId = req.params.surveyId
                const survey = await this.repository.get(surveyId as string)
                res.status(200).json(survey)
            } catch (error) {
                next(error)
            }
    };

    async update(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
     try {
        const { surveyId } = req.params
        const { gender, livesWith, city, commune, punctuation, occupation } = req.body

        if(!gender || 
           !city || 
           !commune || 
           !punctuation || 
           !livesWith ||
           !occupation
           )  {
                res.status(404).json({msg: "Faltan datos para actualizar la encuesta"})
            } else {
                const updatedSurvey = await this.repository.update(surveyId as string, req.body as any)
                res.status(200).json(updatedSurvey)
            }
     } catch (error) {
        next(error)
     } 
    };

    async remove(
        req: Request, 
        res: Response, 
        next: NextFunction
        ):Promise<void> {
            try {
                const { surveyId } = req.params
                const surveyToDelete = await this.repository.remove(surveyId as string)
                res.status(200).send({msg: "REMOVED", surveyToDelete})    
            } catch (error) {
                next(error)
            }
    };
}