/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { NextFunction, Request, Response } from "express";
import { CharacterModel } from "../Model/CharacterModel";

export class CharacterController {
  static getAll = async (req: Request, res: Response) => {
    const allCharacters = CharacterModel.getAll(req, res);
    return allCharacters;
  };

  static getAllFavorites = async (req: Request, res: Response) => {
    const getAllFavorites = CharacterModel.getAllFavorites(req, res);
    return getAllFavorites;
  };

  static getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const CharacterById = CharacterModel.getById(req, res, id);
    return CharacterById;
  };

  static newCharacter = async (req: Request, res: Response) => {
    //destructuring el request del formulario

    const newCharacter = CharacterModel.newCharacter(req, res);

    /*const newCharacter = CharacterModel.newCharacter(
      req,
      res,
      name,
      status,
      species,
      type,
      gender,
      location,
      image,
      episode,
      url,
      created
    );*/

    return newCharacter;
  };

  static editCharacter = async (req: Request, res: Response) => {
    const { id } = req.params;
    //const { Charactername, role, fullname, age } = req.body;

    const editCharacter = CharacterModel.editCharacter(req, res, id);

    return editCharacter;
  };

  static deleteCharacter = async (req: Request, res: Response) => {
    const { id } = req.params;

    const deleteCharacter = CharacterModel.deleteCharacter(req, res, id);

    return deleteCharacter;
  };
}

export default CharacterController;
