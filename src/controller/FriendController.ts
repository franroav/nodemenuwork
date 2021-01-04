/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { NextFunction, Request, Response } from "express";
import { FriendModel } from "../Model/FriendModel";

export class FriendController {
  static getAll = async (req: Request, res: Response) => {
    const allFriends = FriendModel.getAll(req, res);
    return allFriends;
  };

  static getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const FriendById = FriendModel.getById(req, res, id);
    return FriendById;
  };

  static newFriend = async (req: Request, res: Response) => {
    //destructuring el request del formulario
    const { name, gender } = req.body;

    const newfriend = FriendModel.newFriend(req, res, name, gender);

    return newfriend;
  };

  static editFriend = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, gender } = req.body;

    const editFriend = FriendModel.editFriend(req, res, id, name, gender);

    return editFriend;
  };

  static deleteFriend = async (req: Request, res: Response) => {
    const { id } = req.params;

    const deleteFriend = FriendModel.deleteFriend(req, res, id);

    return deleteFriend;
  };
}

export default FriendController;
