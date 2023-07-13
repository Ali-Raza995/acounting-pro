import express from "express"
import { getSalesController } from "../controllers/salesController.js";

const billsRouter = express.Router()

billsRouter.get("/getsales", getSalesController);

export default billsRouter;