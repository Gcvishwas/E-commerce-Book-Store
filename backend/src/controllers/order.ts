import { Order } from "../modules/oders_data";
import { Request, Response } from "express";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = await new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error("error creating order", error);
  }
};
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find(req.params).sort({ createdAt: -1 });
    if (!orders) {
      res.status(404).send({ message: "order not found" });
    } else {
      res.status(200).json(orders);
    }
  } catch (error) {
    console.error("error fetching orders", error);
  }
};
