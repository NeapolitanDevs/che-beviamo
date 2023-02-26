import express, { Request, response, Response } from "express";
import bodyparser from "body-parser";
import cocktail, { add, getByIngredient, getByMultipleIngredients, getByName, getAll, getRandom, getMultipleRandom, getRandomByIngredients, getById } from "../mongo/schema/cocktail";

var cocktailRouter = express.Router();

cocktailRouter.get('/getByIngredient/:input', async function (req: Request,res: Response) {
    console.log('GET api/getIngredient/:input');
    const ingredientQuery = req.params.input;
    const cocktail = await getByIngredient(ingredientQuery);
    res.json({status: 200, body: cocktail});
  });

cocktailRouter.get('/getByName/:input', async function (req: Request,res: Response) {
  console.log('GET api/getName/:input');
  const nameQuery = req.params.input;
  const cocktail = await getByName(nameQuery);

  if(Object.keys(cocktail).length > 0){
    res.json({status: 200, body: cocktail});
  }
  res.json({status: 404, body: "No cocktails found."});

});

cocktailRouter.get('/getById/:input', async function (req: Request,res: Response) {
  console.log('GET api/getId/:input');
  const cocktailQuery = req.params.input;
  const cocktail = await getById(parseInt(cocktailQuery));

  if(Object.keys(cocktail).length > 0){
    res.json({status: 200, body: cocktail});
  } else res.json({status: 404, body: "No cocktails found."});

});
  
// cocktailRouter.get('/add/', async function (req: Request,res: Response) {
//     console.log('GET api/add/:cocktail');
//     const cocktailObject = [
//       {
//         id: 1,
//         name: "Gin Tonic",
//         ingredients: ["Gin", "Tonic Water", "Lemon Peel", "Ice"],
//         instructions: {
//             EN: "Fill a highball glass with ice, pour the gin, top with tonic water and squeeze a lemon wedge and garnish with a lemon wedge.",
//             IT: "Colmate un bicchiere highball di ghiaccio, versate il gin, colmate con acqua tonica e spremete uno spicchio di limone e guarnite con una fetta di limone.",
//         }
//       },
//       {
//         id: 2,
//         name: "Gin Lemon",
//         ingredients: ["Gin", "Lemon Juice", "Lemon Peel", "Ice"],
//         instructions: {
//             EN: "For the preparation of the gin lemon you will not need the shaker. Fill the tumbler with ice, pour the gin and lemonade over it. Gently mix and decorate with a slice of lemon. Those who prefer can also add a few mint leaves. Your gin lemon is ready to be served.",
//             IT: "Per la preparazione del gin lemon non vi servirà lo shaker. Riempite il tumbler con il ghiaccio, versateci sopra il gin e la limonata. Mescolate delicatamente e decorate con una fetta di limone. Chi preferisce potrà aggiungere anche qualche fogliolina di menta. Il vostro gin lemon è pronto per essere servito.",
//         }
//       },
//       {
//         id: 3,
//         name: "Vodka Martini",
//         ingredients: ["Vodka", "Dry Vermouth", "Olive"],
//         instructions: {
//             EN: "Shake the vodka and vermouth together with a number of ice cubes, strain into a cocktail glass, add the olive and serve.",
//             IT: "Shakerare la vodka e il vermouth insieme ad alcuni cubetti di ghiaccio, filtrare in una coppetta da cocktail, aggiungere l'oliva e servire.",
//         }
//       },
//       {
//         id: 4,
//         name: "Black Russian",
//         ingredients: ["Vodka", "Coffee Liqueur"],
//         instructions: {
//             EN: "Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.",
//             IT: "Versare gli ingredienti in un bicchiere vecchio stile pieno di cubetti di ghiaccio. Mescola delicatamente.",
//         }
//       },
//       {
//         id: 5,
//         name: "White Russian",
//         ingredients: ["Vodka", "Coffee Liqueur", "Light Cream"],
//         instructions: {
//             EN: "Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve.",
//             IT: "Versare la vodka e il liquore al caffè sui cubetti di ghiaccio in un bicchiere vecchio stile. Farcite con crema leggera e servite.",
//         }
//       },
//       {
//         id: 6,
//         name: "Sex on the Beach",
//         ingredients: ["Vodka", "Peach Schnapps", "Cranberry Juice", "Orange Juice"],
//         instructions: {
//             EN: "Build all ingredients in a highball glass filled with ice. Garnish with orange slice.",
//             IT: "Metti tutti gli ingredienti in un bicchiere highball pieno di ghiaccio. Guarnire con fetta d'arancia.",
//         }
//       },
//       {
//         id: 7,
//         name: "Moscow Mule",
//         ingredients: ["Vodka", "Lime Juice", "Ginger Ale", "Orange Juice"],
//         instructions: {
//             EN: "Build all ingredients in a highball glass filled with ice. Garnish with orange slice.",
//             IT: "Metti tutti gli ingredienti in un bicchiere highball pieno di ghiaccio. Guarnire con fetta d'arancia.",
//         }
//       },
//     ]
//     try {
//     cocktailObject.forEach(async function (cocktail){
//       await add(cocktail);
//     });
//     } catch (error: unknown) {
//       console.log(JSON.stringify(error || ""), "cocktail add");
//     }
//     res.json({status: 200});
//   });

  cocktailRouter.get('/getAll', async function (req: Request,res:  Response) {
    console.log('GET api/getAll');
    const cocktail = await getAll();
    res.json({status: 200, body: cocktail});
  });
  
  cocktailRouter.get('/getRandom', async function (req: Request,res:  Response) {
    console.log('GET api/getRandom');
    const cocktail = await getRandom();
    res.json({status: 200, body: cocktail});
  });

  cocktailRouter.get('/getByMultipleIngredient', async function (req: Request,res:  Response) {
    console.log('GET api/getByIngredient');
    
    const ingredients = req.query.ingredient as string;

    if( ingredients ) {
      const cocktails = await getByMultipleIngredients(ingredients);
      return res.json({status: 200, body: cocktails});
    }

    res.json({status: 200, body: "No cocktails found."});

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

    res.json({status: 200, body: "No cocktails found."});
  });

  export { cocktailRouter }
  export default { cocktailRouter };
