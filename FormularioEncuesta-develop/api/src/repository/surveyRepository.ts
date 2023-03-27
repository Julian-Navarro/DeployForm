import database from "../config/database";

import { DatabaseRepository, Id, Query } from "../declarations";
import { Survey } from "../entity/Survey";

export class SurveyRepository implements DatabaseRepository<Survey>{
    
    async create(data: Partial<Survey>, _query?: Query | undefined): Promise<Survey> {
    const repository = database.getRepository(Survey)
    const newSurvey = repository.create(data);
    await repository.save(newSurvey)
    return newSurvey
    }

    async list(_query?: Query | undefined): Promise<Survey[]> {
        const repository = await database.getRepository(Survey);
        return repository.find()

    }

    async get(id: Id, _query?: Query | undefined): Promise<Survey> {
        const repository = database.getRepository(Survey);
        const survey = await repository.findOneBy({id: id as any});
        if (!survey) {
            throw new Error("La encuesta con ese ID no existe")
        };
        return survey   
    }

    async update(id: Id, data: Survey, query: Query): Promise<Survey> {
        const repository = database.getRepository(Survey);
        const survey = await repository.update(id, data);
        if (!survey) {
            throw new Error("No existe encuesta con el ID especificado")
        };
        return this.get(id, query) 
    }

    async remove(id: Id, query?: Query ): Promise<Survey> {
        const repository = database.getRepository(Survey);

        const surveyToDelete = await this.get(id, query)

        if(!surveyToDelete) {
            throw new Error("No existe encuesta con el ID especificado")
        } else {
            await repository.delete(id)
        }
        return surveyToDelete
    }   
}