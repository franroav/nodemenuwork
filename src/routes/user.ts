/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { UserController } from "./../controller/UserController";
import { Router } from "express";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";

const router = Router();

//Get all users
router.get("/", UserController.getAll);

// get one user
router.get("/:id", UserController.getById);

// create a new User
router.post("/", UserController.newUser);

// Edit user
router.put("/:id", [checkJwt, checkRole(["admin"])], UserController.editUser);

// Delete

router.delete(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  UserController.deleteUser
);

export default router;
