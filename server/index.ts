import express, { Request, Response } from "express";
import bodyparser from "body-parser";
import path from 'path';
import dotenv from 'dotenv';
import { connectDB } from "./mongo/connect";
import { add, get } from "./mongo/schema/cocktail";

const app = express();
const hostname = '127.0.0.1';
const port = 3000;
dotenv.config();

app.use(express.static(process.cwd()+"/../che-beviamo/"));

app.get('/', function (req: Request,res: Response) {
  console.log('GET /');
  res.sendFile(path.resolve(__dirname+'/../che-beviamo/src/index.html'));
});


app.get('/api/get/:base', async function (req: Request,res: Response) {
  console.log('GET api/get/:base');
  const cocktailBase = req.params.base;
  const cocktail = await get({base: cocktailBase});
  console.log("Cocktails: ", cocktail);
  res.json({status: 200, body: cocktail});
});

app.get('/api/add/', async function (req: Request,res: Response) {
  console.log('GET api/add/:cocktail');
  const cocktailObject = {
    id: 123,
    name: "Gin Tonic",
    base: "Gin",
    ingredients: ["Gin", "Tonic", "Gin", "Tonic", "Gin"],
    instructions: {
        EN: "Mix gin, Tonic, and gin together to make a gin tonic.",
        IT: "Mischia gin, Tonic, and gin together to make a gin tonic.",
    }
  }
  const cocktail = await add(cocktailObject);
  console.log("Cocktail: ", cocktail);
  res.json({status: 200, body: cocktail});
});

app.listen(port, () => {
  let mongo = connectDB();
  
  console.log(`Server started::${port}`);
});