import { RequestHandler } from "express";
import { DemoResponse } from "@shared/api";

export const handleDemo = (req, res) => {
  const response = {
    message: "Hello from Express server",
  };
  res.status(200).json(response);
};
