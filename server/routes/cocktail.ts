import express, { Request, response, Response } from "express";
import bodyparser from "body-parser";
import cocktail, { getAllNames, getByIngredient, getByMultipleIngredients, getByName, getAll, getRandom, getMultipleRandom, getRandomByIngredients, getById } from "../mongo/schema/cocktail";

var cocktailRouter = express.Router();

cocktailRouter.get('/getByIngredient/:input', async function (req: Request,res: Response) {
    console.log('GET api/getIngredient/:input');
    const ingredientQuery = req.params.input;
    const cocktail = await getByIngredient(ingredientQuery);
    res.json({status: 200, body: cocktail});
  });

cocktailRouter.get(['/getByName/:input', '/getByName'], async function (req: Request,res: Response) {
  console.log('GET api/getName/:input');
  const nameQuery = req.params.input;
  const cocktail = await getByName(nameQuery);

  return res.json({status: 200, body: cocktail});

});

cocktailRouter.get('/getById/:input', async function (req: Request,res: Response) {
  console.log('GET api/getId/:input');
  const cocktailQuery = req.params.input;
  const cocktail = await getById(parseInt(cocktailQuery));

  return res.json({status: 200, body: cocktail});

});
  
  cocktailRouter.get('/getAll', async function (req: Request,res:  Response) {
    console.log('GET api/getAll');
    const cocktail = await getAll();
    res.json({status: 200, body: cocktail});
  });

  cocktailRouter.get('/getAllNames', async function (req: Request,res:  Response) {
    console.log('GET api/getAllNames');
    const cocktail = await getAllNames();
    res.status(200).send(cocktail);
  });
  
  cocktailRouter.get('/getRandom', async function (req: Request,res:  Response) {
    console.log('GET api/getRandom');
    const cocktail = await getRandom();
    res.json({status: 200, body: cocktail});
  });

  cocktailRouter.get('/getByMultipleIngredient', async function (req: Request,res:  Response) {
    console.log('GET api/getByIngredient');
    
    const ingredients = req.query.ingredient as string;
    const cocktails = await getByMultipleIngredients(ingredients);

    if( ingredients ) {
      return res.json({status: 200, body: cocktails});
    }

    res.json({status: 200, body: cocktails});

  })

  cocktailRouter.get('/getMultipleRandom/:numberOfDrink', async function (req: Request, res: Response) {
    console.log('GET api/getMultipleRandom');
    const numberOfDrinks = parseInt(req.params.numberOfDrink, 10);
    const cocktails = await getMultipleRandom(numberOfDrinks);

    res.json({status: 200, body: cocktails});
  })

  cocktailRouter.get('/getRandomByIngredients/', async function (req: Request,res: Response){
    console.log('GET api/getRandomByIngredients');

    const ingredients = req.query.ingredient as string[];

    
    if ( ingredients ) {
      const cocktails = await getRandomByIngredients(ingredients);
      return res.json({status: 200, body: cocktails});
    }

    res.sendStatus(200);
  });

  export { cocktailRouter }
  export default { cocktailRouter };
