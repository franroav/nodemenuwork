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
        console.log(Character.data.results);
        res.send(Character.data.results);
      });
      //const CharacterRepository = getRepository(Character);
      //let Characters;

      // Characters = await CharacterRepository.find();
    } catch (error) {
      res.status(404).json({ message: "Something Went Wrong", error: error });
    }

    /*if (Characters.length > 0) {
      res.send(Characters);
    } else {
    }*/
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

    /* const CharacterRepository = getRepository(Character);
    try {
      const Character = await CharacterRepository.findOneOrFail(id);
      res.send(Character);
    } catch (error) {
      res.status(404).json({ message: "There are No Results" });
    }*/
  };

  //CREATE Character
  static newCharacter = async (req: Request, res: Response) => {
    // destructuring
    console.log(req.body);
    const {
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
    /* try {
      api.post<any>(db + "characters").then((response) => {
        console.log(response.data.results);

        res.send(response);
        res.status(201).json({
          message: "Character created successfully!" + response.data.results,
        });
      });
    } catch (error) {
      return res.status(409).json({ message: "There are No Results" });
    }*/

    const character = new Character();
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
    //destructuring
    const {
      name,
      status,
      species,
      type,
      gender,
      location,
      image,
      episode,
      url,
      created,
    } = req.body;
    try {
      api.put<any>(db + `${"character/" + id}`).then((response) => {
        console.log(response.data.results);

        //res.send(response.data.results);
        res.status(201).json({
          message: "Character created successfully!" + response.data.results,
        });
      });
    } catch (error) {
      return res.status(409).json({ message: "There are No Results" });
    }
    //hold Character
    /* let Character;

    const CharacterRepository = getRepository(Character);

    // try get Character
    try {
      Character = await CharacterRepository.findOneOrFail(id);
    } catch (error) {
      return res.status(404).json({ message: "Character not found" });
    }

    Character.Charactername = Charactername;
    Character.fullname = fullname;
    Character.age = age;

    const validationCharacter = { validationError: { target: false, value: false } };
    const errors = await validate(Character, validationCharacter);
    console.log("err", errors);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    // try to save Character
    try {
      await CharacterRepository.save(Character);
    } catch (error) {
      res.status(409).json({ message: "Character already exists" });
    }
    res.status(200).json({ message: "Character update" });*/
  };

  static deleteCharacter = async (req: Request, res: Response, id: number) => {
    // const { id } = req.params;
    /*const CharacterRepository = getRepository(Character);
    let Character: Character;

    try {
      Character = await CharacterRepository.findOneOrFail(id);
    } catch (error) {
      return res.status(404).json({ message: "Character not found" });
    }

    CharacterRepository.delete(id);
    res.status(200).json({ message: "Character deleted" });*/
  };
}

export default CharacterModel;
