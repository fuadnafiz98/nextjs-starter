import { database } from "../loaders/database";
import { PrismaClient } from "@prisma/client";

export interface Context {
  database: PrismaClient;
}

export const context: Context = {
  database,
};
