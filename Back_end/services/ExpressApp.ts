import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

export default async (app: Application) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("hello world");
  });
  return app;
};
