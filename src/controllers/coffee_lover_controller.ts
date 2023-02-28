import { Request, Response } from "express";
import * as coffeeLoverService from "../services/coffee_lover_service";

export const getCoffeeLover = async (req: Request, res: Response) => {
  const coffeeLover = coffeeLoverService.getCoffeeLover(); 
  res.send(coffeeLover);
}
  
