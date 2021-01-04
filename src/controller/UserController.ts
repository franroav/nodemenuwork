/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { NextFunction, Request, Response } from "express";
import { UserModel } from "../Model/UserModel";

export class UserController {
  static getAll = async (req: Request, res: Response) => {
    const allUsers = UserModel.getAll(req, res);
    return allUsers;
  };

  static getById = async (req: Request, res: Response) => {
    const UserById = UserModel.getById(req, res);
    return UserById;
  };

  static newUser = async (req: Request, res: Response) => {
    const newUser = UserModel.newUser(req, res);
    return newUser;
  };

  static editUser = async (req: Request, res: Response) => {
    const editUser = UserModel.editUser(req, res);
    return editUser;
  };

  static deleteUser = async (req: Request, res: Response) => {
    const deleteUser = UserModel.deleteUser(req, res);
    return deleteUser;
  };
}

export default UserController;
