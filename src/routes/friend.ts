/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { FriendController } from "./../controller/FriendController";
import { Router } from "express";
import { checkJwt } from "../middleware/jwt";
import { checkRole } from "../middleware/role";

const router = Router();

//Get all Friends
router.get("/", [checkJwt, checkRole(["admin"])], FriendController.getAll);

// get one Friend
router.get("/:id", [checkJwt, checkRole(["admin"])], FriendController.getById);

// create a new Friend
router.post("/", [checkJwt, checkRole(["admin"])], FriendController.newFriend);

// Edit Friend
router.put(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  FriendController.editFriend
);

// Delete Friend
router.delete(
  "/:id",
  [checkJwt, checkRole(["admin"])],
  FriendController.deleteFriend
);

export default router;
