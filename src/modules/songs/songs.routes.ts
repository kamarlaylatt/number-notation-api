import { Router } from "express";
import * as songsController from "./songs.controller.js";
import { requireAuth } from "../../middlewares/requireAuth.js";

const router = Router();

router.use(requireAuth);

router.get("/", songsController.getAll);
router.get("/:id", songsController.getOne);
router.post("/", songsController.create);
router.put("/:id", songsController.update);
router.delete("/:id", songsController.remove);

export default router;
