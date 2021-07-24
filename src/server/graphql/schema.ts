import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import { join } from "path";

import * as types from "./types";

export const schema = makeSchema({
  types,
  plugins: [
    nexusPrisma({
      prismaClient: (ctx) => ctx.database,
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    schema: join(__dirname, "generated", "schema.graphql"),
    typegen: join(__dirname, "generated", "nexus-typegen.ts"),
  },
  contextType: {
    module: join(__dirname, "./context.ts"),
    export: "Context",
  },
});
