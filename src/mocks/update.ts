import * as T from "../types/interfaces";

export const mockedUpdate: T.Update[] = [
  {
    id: 1,
    oldPrice: 300,
    newPrice: 400,
    userId: 2,
    canvaId: 3,
    createdAt: new Date(),
    user: "Amaro",
    canva: "Ruler",
    atStatus: "Failed",
    statusMessage: "This failed what you want?",
  },
  {
    id: 2,
    oldPrice: 200,
    newPrice: 500,
    userId: 3,
    canvaId: 4,
    createdAt: new Date(),
    user: "Henrique",
    canva: "Demon",
    atStatus: "Failed",
    statusMessage: "This failed what you want?",
  },
  {
    id: 33,
    oldPrice: 600,
    newPrice: 300,
    userId: 4,
    canvaId: 5,
    createdAt: new Date(),
    user: "Dang",
    canva: "God",
    atStatus: "Success",
    statusMessage: "Finally worked dumbass",
  },
];
