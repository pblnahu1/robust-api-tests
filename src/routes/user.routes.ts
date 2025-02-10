import { Router } from "express";
import { getUsers, getUserById } from "../controllers/user.controllers";

export const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);