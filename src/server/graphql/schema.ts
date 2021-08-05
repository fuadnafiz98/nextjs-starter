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
    schema: join(process.cwd(), "src/server/graphql/generated/schema.graphql"),
    typegen: join(process.cwd(), "src/server/graphql/generated/nexus-typegen.ts"),
  },
  contextType: {
    module: join(process.cwd(), "src/server/graphql/context.ts"),
    export: "Context",
  },
});
