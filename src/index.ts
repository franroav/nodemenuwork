/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as cors from "cors";
import * as helmet from "helmet";
import routes from "./routes/index";
import { Request, Response } from "express";
import { User } from "./entity/User";

const PORT = process.env.PORT || 3000;

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    //middleware
    app.use(cors());
    //  urlencoded is in order to parse different content type
    app.use(express.urlencoded({ extended: false }));
    //Helmet helps you secure your Express.js apps by setting various HTTP headers. It's not a silver bullet, but it can help!
    app.use(helmet());
    // parses incoming requests with JSON payloads and is based on body-parser
    app.use(express.json());

    // Routes
    app.use("/", routes);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error));

/***    TYPEORM
 *
 *  ORMCONFIG DEFAULT
 */

// register express routes from defined application routes
/* Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });*/

// setup express app here
// ...

// start express server

// insert new users for test
/* await connection.manager.save(connection.manager.create(User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27
    }));
    await connection.manager.save(connection.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24
    }));

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");*/
