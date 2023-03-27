import { Router } from "express";
import { SurveyController } from "../controllers/surveyController";
import { SurveyRepository } from "../repository/surveyRepository";
const router = Router();
const controller = new SurveyController(new SurveyRepository());

router.get("/surveys", controller.list.bind(controller));
router.post("/surveys", controller.create.bind(controller));
router.get("/surveys/:surveyId", controller.get.bind(controller));
router.put("/surveys/:surveyId", controller.update.bind(controller));
router.delete("/surveys/:surveyId", controller.remove.bind(controller));

export default router;
