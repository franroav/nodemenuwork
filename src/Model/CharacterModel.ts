/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Character } from "../entity/Character";
import { validate } from "class-validator";
import * as axios from "axios";
import * as config from "../config/service";

const service = config.default().service;
const db = config.default().db;
const api = axios.default;

export class CharacterModel {
  static getAll = async (req: Request, res: Response) => {
    try {
      api.get(service + "character").then((Character) => {
        res.send(Character.data.results);
      });
    } catch (error) {
      res.status(404).json({ message: "Something Went Wrong", error: error });
    }
  };

  static getAllFavorites = async (req: Request, res: Response) => {
    const CharacterRepository = getRepository(Character);
    let Characters;
    try {
      Characters = await CharacterRepository.find();
    } catch (error) {
      res.status(404).json({ message: "Something Went Wrong", error: error });
    }

    if (Characters.length > 0) {
      res.send(Characters);
    } else {
    }
  };

  // GET Character character/2
  static getById = async (req: Request, res: Response, id: number) => {
    try {
      api.get(service + `${"character/" + id}`).then((character) => {
        console.log(character);
        res.send(character.data);
      });
    } catch (error) {
      res.status(404).json({ message: "There are No Results" });
    }
  };

  //CREATE Character
  static newCharacter = async (req: Request, res: Response) => {
    // destructuring
    console.log(req.body);
    const {
      user_id,
      id,
      name,
      status,
      species,
      type,
      gender,
      location,
      origin,
      image,
      episode,
      url,
      created,
    } = req.body;

    const character = new Character();
    character.user_id = user_id;
    character.id = id;
    character.name = name;
    character.status = status;
    character.species = species;
    character.type = type;
    character.origin = origin;
    character.gender = gender;
    character.location = location;
    character.origin = status;
    character.image = image;
    character.episode = episode;
    character.url = url;
    character.created = created;

    //validate
    const validationCharacter = {
      validationError: { target: false, value: false },
    };
    const errors = await validate(character, validationCharacter);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const CharacterRepository = getRepository(Character);

    try {
      await CharacterRepository.save(character);
    } catch (error) {
      return res.status(409).json({ message: "There are No Results" });
    }

    res.status(201).json({ message: "Character created successfully!" });
  };

  static editCharacter = async (req: Request, res: Response, id: number) => {
    //hold Character
    let character;
    //destructuring
    const {
      name,
      status,
      species,
      type,
      gender,
      location,
      origin,
      image,
      episode,
      url,
      created,
    } = req.body;

    const CharacterRepository = getRepository(Character);

    // try get Character
    try {
      character = await CharacterRepository.findOneOrFail(id);
    } catch (error) {
      return res.status(404).json({ message: "Character not found" });
    }

    character.name = name;
    character.status = status;
    character.species = species;
    character.type = type;
    character.origin = origin;
    character.gender = gender;
    character.location = location;
    character.origin = status;
    character.image = image;
    character.episode = episode;
    character.url = url;
    character.created = created;

    const validationCharacter = {
      validationError: { target: false, value: false },
    };
    const errors = await validate(character, validationCharacter);
    console.log("err", errors);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // try to save Character
    try {
      await CharacterRepository.save(character);
    } catch (error) {
      res.status(409).json({ message: "Character already exists" });
    }
    res.status(200).json({ message: "Character update" });
  };

  static deleteCharacter = async (req: Request, res: Response) => {
    const { id } = req.params;
    const CharacterRepository = getRepository(Character);
    let character: Character;

    try {
      character = await CharacterRepository.findOneOrFail(id);
    } catch (error) {
      return res.status(404).json({ message: "Character not found" });
    }

    CharacterRepository.delete(id);
    res.status(200).json({ message: "Character deleted" });
  };
}

export default CharacterModel;
