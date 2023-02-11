import express, { Request, Response } from "express";
import bodyparser from "body-parser";
import path from 'path';
import dotenv from 'dotenv';
import { connectDB } from "./mongo/connect";
import { add, get } from "./mongo/schema/cocktail";
import { cocktailRouter } from "./routes/cocktail";

const app = express();
const hostname = '127.0.0.1';
const port = 3000;
dotenv.config();

app.use(express.static(process.cwd()+"/../che-beviamo/"));

app.get('/', function (req: Request,res: Response) {
  console.log('GET /');
  res.sendFile(path.resolve(__dirname+'/../che-beviamo/src/index.html'));
});

app.use(cocktailRouter)

app.listen(port, () => {
  let mongo = connectDB();
  
  console.log(`Server started::${port}`);
});