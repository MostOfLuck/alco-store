import { Router } from "express";
import { getSlides } from "../controllers/slideController.ts";

const router = Router();

router.get("/", getSlides);

export default router;
