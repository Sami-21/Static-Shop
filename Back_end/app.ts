import App from "./services/ExpressApp";
import Connection from "./services/connection";
import express from "express";
const Start = async () => {
  const app = express();
  await App(app);
  console.clear();
  await Connection();
  app.listen(3000, () => {
    console.log("server run on port 3000");
  });
};

Start();
