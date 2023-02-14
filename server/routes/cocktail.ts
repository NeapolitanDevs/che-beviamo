import express, { Request, Response } from "express";
import bodyparser from "body-parser";
import { add, getByBase, getAll, getRandom, getById } from "../mongo/schema/cocktail";

var cocktailRouter = express.Router();

cocktailRouter.get('/api/getBase/:input', async function (req: Request,res: Response) {
    console.log('GET api/getBase/:input');
    const cocktailQuery = req.params.input;
    const cocktail = await getByBase({base: cocktailQuery});
    res.json({status: 200, body: cocktail});
  });

cocktailRouter.get('/api/getId/:input', async function (req: Request,res: Response) {
  console.log('GET api/getId/:input');
  const cocktailQuery = req.params.input;
  const cocktail = await getById(parseInt(cocktailQuery));
  res.json({status: 200, body: cocktail});
});
  
cocktailRouter.get('/api/add/', async function (req: Request,res: Response) {
    console.log('GET api/add/:cocktail');
    const cocktailObject = {
      id: 123,
      name: "Vodka Tonic",
      base: "Vodka",
      ingredients: ["vodka", "Tonic", "vodka", "Tonic", "vodka"],
      instructions: {
          EN: "Mix vodka, Tonic, and vodka together to make a vodka tonic.",
          IT: "Mischia vodka, Tonic, and vodka together to make a vodka tonic.",
      }
    }
    const cocktail = await add(cocktailObject);
    res.json({status: 200, body: cocktail});
  });

  cocktailRouter.get('/api/getAll', async function (req: Request,res:  Response) {
    console.log('GET api/getAll');
    const cocktail = await getAll();
    res.json({status: 200, body: cocktail});
  });
  
  cocktailRouter.get('/api/getRandom', async function (req: Request,res:  Response) {
    console.log('GET api/getRandom');
    const cocktail = await getRandom();
    res.json({status: 200, body: cocktail});
  });

  export { cocktailRouter }
  export default { cocktailRouter };