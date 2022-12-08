import express, {Request, Response} from "express"
import bodyParser from "body-parser"
import dotenv from 'dotenv'
import {randomUUID} from "crypto";

dotenv.config()
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const port = process.env.PORT
const instanceId: string = randomUUID()
let requestCount: number = 0;

interface SteveData {
  name: string;
  age: number;
  created: Date
}

interface AppData {
  name: string;
  id: string;
  requestNumber: number;
}

app.get("/steve", (req: Request, res: Response) => {
  console.log("received a request at /steve")
  const name = process.env.OWNER || "steve";
  const steve: SteveData = {name: name, age: 26, created: new Date()}
  const responseJson = JSON.stringify(steve);
  res.end(responseJson);
})

app.get("/", (req: Request, res: Response) => {
  requestCount += 1;
  console.log("received a request at / for instance " + instanceId);
  const appData: AppData = {name: "Express App", id: instanceId, requestNumber: requestCount};
  const responseJson = JSON.stringify(appData);
  res.end(responseJson);
})

app.listen(port, () => {
  console.log("---NodeJs Express Server---");
  console.log(`---Instance Id: ${instanceId}---`)
  console.log(`App running in: ${process.env.ENVIRONMENT} mode`)
  console.log(`Request count reset check: ${requestCount}`)
  console.log(`Running at port: ${port}`);
})
