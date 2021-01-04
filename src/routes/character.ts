/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { CharacterController } from "./../controller/CharacterController";
import { Router } from "express";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";

const router = Router();

//Get all characters
router.get("/", CharacterController.getAll);

// get one character
router.get("/:id", CharacterController.getById);

// create a new character
router.post("/", CharacterController.newCharacter);

// Edit character
router.put(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  CharacterController.editCharacter
);

// Delete character
router.delete(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  CharacterController.deleteCharacter
);

export default router;
